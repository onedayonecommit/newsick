// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;
import "./V1Newsic.sol";
// 1000000000000000
// ["0x5B38Da6a701c568545dCfcB03FcB875f56beddC4","324","1000","good"]
contract Market {
    // NewsickFund 컨트랙트 생성자인지 확인(메인 작업자 인지)
    modifier onlyAdmin{
        require(marketAdmin == msg.sender, "OA");
        _;  // Market 컨트랙트 실행할 때 동작 명령
    }
    // 관리자 주소
    address private admin;
    // 마켓 이용요금(? 거래 수수료?)
    uint256 public marketplaceFee = 5;
    // 토큰별 거래 수수료 [토큰아이디(uint) : 수수료(uint)]   필요한부분??
    mapping (uint256 => uint256) public fee;
    // 판매 목록
    mapping (uint256 => SellList) public sales;
    // 판매 물품 구조체
    struct SellList {
        address seller;
        uint256 tokenId;
        uint256 amountOfToken;
        uint256 price;
        bool isSold;
    }
    // 구매 목록
    mapping (uint256 => OfferList[]) offers;
    // 구매등록 관리 변수 0부터
    // 구매 물품 구조체
    struct OfferList {
        address offer;
        uint256 tokenId;
        uint256 amountOfToken;
        uint256 price;
        bool isSold;
    }
    // 이벤트 정리
    event SellEvent (
        address indexed _seller,
        uint256 _tokenId,
        uint256 _amountOfToken,
        uint256 _price
    );
    event BuyEvent (
        address indexed _buyer,
        uint256 _tokenId,
        uint256 _amountOfToken,
        uint256 _price
    );
    event CanceledSell (
        address indexed _seller,
        uint256 _tokenId,
        uint256 _amountOfToken,
        uint256 _price
    );
    event CanceledBuy (
        address indexed _seller,
        uint256 _tokenId,
        uint256 _amountOfToken,
        uint256 _price
    );
    event BuyRegistEvent(
        address indexed _buyer,
        uint256 _tokenId,
        uint256 _price,
        uint256 _amountOfToken
    );
    event SellRegistEvent(
        address indexed _seller,
        uint256 _tokenId,
        uint256 _price,
        uint256 _amountOfToken
    );
    // 컨트랙트 복사
    NewSickFund public Token;
    address NewSickCa;
    address marketAdmin;
    // 생성자 함수
    constructor(address _tokenAddress,address _admin) {
        Token = NewSickFund(_tokenAddress);
        NewSickCa = _tokenAddress;
        marketAdmin = _admin;
    }
    // [] : (토큰아이디) : (개수)
    mapping (address => mapping(uint256 => uint256)) public howmuch;
    // 마켓 이용 수수료 적용 함수
    function _patchMarketFee(uint256 _fee)public onlyAdmin{
        marketplaceFee = _fee;
    }

    // 판매 등록
    // 매도주문
    mapping(uint256 => SellList[]) SellOffer;
    function _createSellList(
        uint256 _tokenId,
        uint256 _amountOfToken,
        uint256 _price
        ) public returns(bool){
            uint256 sellAmount = 0;
        // require(Token.balanceOf(msg.sender,_tokenId) >= _amountOfToken ,"less amount");
        for(uint256 i = 0 ; i< SellOffer[_tokenId].length; i++){
            if(SellOffer[_tokenId][i].seller == msg.sender){
                sellAmount += SellOffer[_tokenId][i].amountOfToken;
            }
        }
        require(Token.balanceOf(msg.sender,_tokenId) >= sellAmount + _amountOfToken,"exceed");
            if(!Token.isApprovedForAll(msg.sender, address(this))){
                Token.setApprovalForAll(msg.sender, address(this), true);
            }
        if(SellOffer[_tokenId].length > 0){
            uint256 SellOfferLength = SellOffer[_tokenId].length - 1;
            if(_price < SellOffer[_tokenId][SellOfferLength].price){ // 가격이 매도 가장싼거보다 더 싼지 확인
                    while(_amountOfToken > 0 && offers[_tokenId].length > 0){ // 매도 신청 물량도 0보다 크고 매수 신청물량도 있음
                        uint256 offerLength = offers[_tokenId].length -1;
                        OfferList memory offer = offers[_tokenId][offerLength];
                        if(_price <= offer.price && _amountOfToken < offer.amountOfToken){ // 매수벽보다도 더 싼데 물량도 더 적으면
                            uint256 salePrice = offer.price * _amountOfToken;
                            uint256 saleFee = salePrice * (marketplaceFee / 100);
                            Token.safeTransferFrom(msg.sender,offer.offer,_tokenId,_amountOfToken,"0x00");
                            address payable seller = payable(msg.sender);
                            seller.transfer(salePrice - saleFee);
                            address payable _admin = payable(admin);
                            _admin.transfer(saleFee);
                            emit BuyEvent(offer.offer,_tokenId,_amountOfToken,offer.price);
                            emit SellEvent(msg.sender,_tokenId,_amountOfToken,offer.price);
                            offer.amountOfToken -= _amountOfToken;
                            _amountOfToken = 0;
                        }
                        else if(_price <= offer.price && _amountOfToken >= offer.amountOfToken){ // 매수벽보다 싸지만 물량은 더 많음
                            uint256 sellamount = offer.amountOfToken;
                            uint256 salePrice = offer.price * sellamount;
                            uint256 saleFee = salePrice * (marketplaceFee / 100);
                            Token.safeTransferFrom(msg.sender,offer.offer,_tokenId,sellamount,"0x00");
                            address payable seller = payable(msg.sender);
                            seller.transfer(salePrice - saleFee);
                            address payable _admin = payable(admin);
                            _admin.transfer(saleFee);
                            emit BuyEvent(offer.offer,_tokenId,sellamount,offer.price);
                            emit SellEvent(msg.sender,_tokenId,sellamount,offer.price);
                            _amountOfToken -= sellamount;
                            offers[_tokenId].pop();
                        }
                        else {
                            break;
                        }
                    }
                    if(_amountOfToken > 0){
                        SellOffer[_tokenId].push(SellList(msg.sender,_tokenId,_amountOfToken,_price,true));
                        emit SellRegistEvent(msg.sender,_tokenId,_amountOfToken,_price);
                        return true;
                    }
                }
            else {
                for(uint256 i = 0; i <= SellOfferLength;i++){ // [10,8,5,4,1] length = 4 , i=1 [10,9,8,5,4,1] // [10,9,8,5,4,1]
                    if(_price >= SellOffer[_tokenId][i].price){
                        SellOffer[_tokenId].push(SellOffer[_tokenId][SellOfferLength]);
                        for(uint256 ii = 1; ii <= SellOfferLength-i;ii++){
                            SellOffer[_tokenId][SellOfferLength - ii + 1] = SellOffer[_tokenId][SellOfferLength - ii];
                        }
                        SellOffer[_tokenId][i]=SellList(msg.sender,_tokenId,_amountOfToken,_price,true);
                        emit SellRegistEvent(msg.sender,_tokenId,_amountOfToken,_price);
                        break;
                    }
                }
                return true;
            }
        }
        else {
            while(_amountOfToken > 0 && offers[_tokenId].length > 0){ // 매도 신청 물량도 0보다 크고 매수 신청물량도 있음
                        uint256 offerLength = offers[_tokenId].length -1;
                        OfferList memory offer = offers[_tokenId][offerLength];
                        if(_price <= offer.price && _amountOfToken < offer.amountOfToken){ // 매수벽보다도 더 싼데 물량도 더 적으면
                            uint256 salePrice = offer.price * _amountOfToken;
                            uint256 saleFee = salePrice * (marketplaceFee / 100);
                            Token.safeTransferFrom(msg.sender,offer.offer,_tokenId,_amountOfToken,"0x00");
                            address payable seller = payable(msg.sender);
                            seller.transfer(salePrice - saleFee);
                            address payable _admin = payable(admin);
                            _admin.transfer(saleFee);
                            emit BuyEvent(offer.offer,_tokenId,_amountOfToken,offer.price);
                            emit SellEvent(msg.sender,_tokenId,_amountOfToken,offer.price);
                            offer.amountOfToken -= _amountOfToken;
                            _amountOfToken = 0;
                        }
                        else if(_price <= offer.price && _amountOfToken >= offer.amountOfToken){ // 매수벽보다 싸지만 물량은 더 많음
                            uint256 sellamount = offer.amountOfToken;
                            uint256 salePrice = offer.price * sellamount;
                            uint256 saleFee = salePrice * (marketplaceFee / 100);
                            Token.safeTransferFrom(msg.sender,offer.offer,_tokenId,sellamount,"0x00");
                            address payable seller = payable(msg.sender);
                            seller.transfer(salePrice - saleFee);
                            address payable _admin = payable(admin);
                            _admin.transfer(saleFee);
                            emit BuyEvent(offer.offer,_tokenId,sellamount,offer.price);
                            emit SellEvent(msg.sender,_tokenId,sellamount,offer.price);
                            _amountOfToken -= sellamount;
                            offers[_tokenId].pop();
                        }
                        else {
                            break;
                        }
                    }
                    if(_amountOfToken > 0){
                        SellOffer[_tokenId].push(SellList(msg.sender,_tokenId,_amountOfToken,_price,true));
                        emit SellRegistEvent(msg.sender,_tokenId,_amountOfToken,_price);
                        return true;
                    }
        }
        return true;
    }

    function offertest(uint256 _tokenId,uint256 _price) public view returns(bool){
        if(_price > offers[_tokenId][0].price){return true;}
        else return false;
    }

    function truetest(bool a, bool b)public pure returns(bool){
        bool aa = a&&b;
        return aa;
    }


    // 구매 등록
    function _createBuyList(
        uint256 _tokenId,
        uint256 _amountOfToken, // 100개를 // 10000wei 사겠다는 주문을
        uint256 _price
        ) public payable returns(bool) {
            require(msg.value >= _amountOfToken * _price,"not enough value");
        // if(!Token.isApprovedForAll(msg.sender, address(this))){
        //     Token.setApprovalForAll(msg.sender, address(this), true);
        // }
        if(offers[_tokenId].length > 0){ // 12000원
            uint256 OfferLength = offers[_tokenId].length - 1; // 0
            if(_price > offers[_tokenId][OfferLength].price) { // 제시한 가격이 현 매수벽 제일비싼거보다 비싸면
                while(_amountOfToken > 0 && SellOffer[_tokenId].length > 0){
                    uint256 SellOfferLength = SellOffer[_tokenId].length - 1;
                    if(_price >= SellOffer[_tokenId][SellOfferLength].price){ // 제시가격이 매도벽 제일싼거보다 비싼지 체크
                        if(_amountOfToken <= SellOffer[_tokenId][SellOfferLength].amountOfToken){ // 물량이 매도벽보다 작으면
                            uint256 salePrice = _price * _amountOfToken;
                            uint256 saleFee = salePrice * (marketplaceFee / 100);
                            Token.safeTransferFrom(SellOffer[_tokenId][SellOfferLength].seller,msg.sender,_tokenId,_amountOfToken,"0x00"); // nft보내주고
                            address payable seller = payable(SellOffer[_tokenId][SellOfferLength].seller); 
                            seller.transfer(salePrice - saleFee); // 판매대금 발송
                            address payable _admin = payable(admin);
                            _admin.transfer(saleFee);
                            emit BuyEvent(msg.sender,_tokenId,_amountOfToken,_price);
                            emit SellEvent(SellOffer[_tokenId][SellOfferLength].seller,_tokenId,_amountOfToken,_price);
                            SellOffer[_tokenId][SellOfferLength].amountOfToken -= _amountOfToken; // 기존 물량에서 주문갯수 만큼 제거
                            _amountOfToken = 0;
                        }
                        else{
                            uint256 _amount = SellOffer[_tokenId][SellOfferLength].amountOfToken;
                            uint256 salePrice = _price * _amount;
                            uint256 saleFee = salePrice * (marketplaceFee / 100);
                            Token.safeTransferFrom(SellOffer[_tokenId][SellOfferLength].seller,msg.sender,_tokenId,_amount,"0x00");
                            address payable seller = payable(SellOffer[_tokenId][SellOfferLength].seller); 
                            seller.transfer(salePrice - saleFee); // 판매대금 발송
                            address payable _admin = payable(admin);
                            _admin.transfer(saleFee);
                            emit BuyEvent(msg.sender,_tokenId,_amount,_price);
                            emit SellEvent(SellOffer[_tokenId][SellOfferLength].seller,_tokenId,_amount,_price);
                            _amountOfToken = _amountOfToken - SellOffer[_tokenId][SellOfferLength].amountOfToken;
                            SellOffer[_tokenId].pop();
                        }
                    }
                    else {
                        break;
                    }
                }
                if(_amountOfToken > 0){
                    offers[_tokenId].push(OfferList(msg.sender,_tokenId,_amountOfToken,_price,true));
                    emit BuyRegistEvent(msg.sender,_tokenId,_amountOfToken,_price);
                }
        return true;
        }
        else {
            for(uint256 i = 0; i <= OfferLength;i++){ // [1,3,4,5,7] // oL = 4, i = 1 [1,3,4,5,7,7] // [1,2,3,4,5,7]
                if(_price <= offers[_tokenId][i].price){
                    offers[_tokenId].push(offers[_tokenId][OfferLength]);
                    for(uint256 ii = 1; ii <= OfferLength - i; ii++){
                        offers[_tokenId][OfferLength - ii + 1] = offers[_tokenId][OfferLength - ii];
                    }
                    offers[_tokenId][i] = OfferList(msg.sender,_tokenId,_amountOfToken,_price,true);
                    emit BuyRegistEvent(msg.sender,_tokenId,_amountOfToken,_price);
                    break;
                }
            }
            return true;
        }
        }
        else {
            while(_amountOfToken > 0&& SellOffer[_tokenId].length > 0){
                    uint256 SellOfferLength = SellOffer[_tokenId].length - 1;
                    if(_price >= SellOffer[_tokenId][SellOfferLength].price){ // 제시가격이 매도벽 제일싼거보다 비싼지 체크
                        if(_amountOfToken <= SellOffer[_tokenId][SellOfferLength].amountOfToken){ // 물량이 매도벽보다 작으면
                            uint256 salePrice = _price * _amountOfToken;
                            uint256 saleFee = salePrice * (marketplaceFee / 100);
                            Token.safeTransferFrom(SellOffer[_tokenId][SellOfferLength].seller,msg.sender,_tokenId,_amountOfToken,"0x00"); // nft보내주고
                            address payable seller = payable(SellOffer[_tokenId][SellOfferLength].seller); 
                            seller.transfer(salePrice - saleFee); // 판매대금 발송
                            address payable _admin = payable(admin);
                            _admin.transfer(saleFee);
                            emit BuyEvent(msg.sender,_tokenId,_amountOfToken,_price);
                            emit SellEvent(SellOffer[_tokenId][SellOfferLength].seller,_tokenId,_amountOfToken,_price);
                            SellOffer[_tokenId][SellOfferLength].amountOfToken -= _amountOfToken; // 기존 물량에서 주문갯수 만큼 제거
                            _amountOfToken = 0;
                        }
                        else{
                            uint256 _amount = SellOffer[_tokenId][SellOfferLength].amountOfToken;
                            uint256 salePrice = _price * _amount;
                            uint256 saleFee = salePrice * (marketplaceFee / 100);
                            Token.safeTransferFrom(SellOffer[_tokenId][SellOfferLength].seller,msg.sender,_tokenId,_amount,"0x00");
                            address payable seller = payable(SellOffer[_tokenId][SellOfferLength].seller); 
                            seller.transfer(salePrice - saleFee); // 판매대금 발송
                            address payable _admin = payable(admin);
                            _admin.transfer(saleFee);
                            emit BuyEvent(msg.sender,_tokenId,_amount,_price);
                            emit SellEvent(SellOffer[_tokenId][SellOfferLength].seller,_tokenId,_amount,_price);
                            _amountOfToken = _amountOfToken - SellOffer[_tokenId][SellOfferLength].amountOfToken;
                            SellOffer[_tokenId].pop();
                        }
                    }
                    else {
                        break;
                    }
                }
                if(_amountOfToken > 0){
                    offers[_tokenId].push(OfferList(msg.sender,_tokenId,_amountOfToken,_price,true));
                    emit BuyRegistEvent(msg.sender,_tokenId,_amountOfToken,_price);
                return true;
                }
            }
        // offers[_tokenId].push(OfferList(msg.sender,_tokenId,_amountOfToken,_price,true));
        return true;
    }
    
    // 구매오더 취소
    function cancelBuyOrder(uint256 _tokenId, uint256 _amount, uint256 _price) public returns(bool){
        if(offers[_tokenId].length > 0){
        uint256 OfferLength = offers[_tokenId].length -1;
            for(uint256 i = 0; i <= OfferLength; i++){ // [1,3,4,5,6] oL = 4, i = 1 [1,3,4,5,6,3] = [1,4,5,6]
                if(_price == offers[_tokenId][i].price && _amount == offers[_tokenId][i].amountOfToken && msg.sender == offers[_tokenId][i].offer){
                    offers[_tokenId].push(offers[_tokenId][i]);
                    for(uint256 ii = OfferLength-i; ii >= i; ii--){ // 3
                        offers[_tokenId][OfferLength - ii] = offers[_tokenId][OfferLength - ii + 1];
                    }
                    offers[_tokenId].pop();
                    offers[_tokenId].pop();
                    address payable refunder = payable(msg.sender);
                    refunder.transfer(_price * _amount);
                    emit CanceledBuy(msg.sender,_tokenId,_amount,_price);
                    return true;
                }
                else {
                    return false;
                }
            }
        }
        return false;
    }

    // 판매오더 취소
    function cancelSellOrder(uint256 _tokenId, uint256 _amount, uint256 _price) public returns(bool){
        uint256 SellOfferLength = SellOffer[_tokenId].length -1;
        for(uint256 i = 0; i <= SellOfferLength; i++){ // [1,3,4,5,6] oL = 4, i = 1 [1,3,4,5,6,3] = [1,4,5,6]
            if(_price == SellOffer[_tokenId][i].price && _amount == SellOffer[_tokenId][i].amountOfToken && msg.sender == SellOffer[_tokenId][i].seller){
                SellOffer[_tokenId].push(SellOffer[_tokenId][i]);
                for(uint256 ii = SellOfferLength-i; ii >= i; ii--){ // 3
                    SellOffer[_tokenId][SellOfferLength - ii] = SellOffer[_tokenId][SellOfferLength - ii + 1];
                }
                SellOffer[_tokenId].pop();
                SellOffer[_tokenId].pop();
                emit CanceledSell(msg.sender,_tokenId,_amount,_price);
                return true;
            }
            else {
                return false;
            }
        }
        return false;
    }

    // 내 판매나 구매 등록해둔 목록
    function myorder(uint256 _tokenId) public view returns(OfferList[] memory, SellList[] memory){
        if(offers[_tokenId].length > 0 && SellOffer[_tokenId].length>0){
        uint256 OfferLength = offers[_tokenId].length-1;
        uint256 SellOfferLength = SellOffer[_tokenId].length-1;

        // OfferList[] memory hi = new OfferList[](OfferLength);
        // SellList[] memory hello = new SellList[](SellOfferLength);
        OfferList[] memory _BuyList;
        SellList[] memory _SellList;

        uint256 OfferIndex = 0;
        uint256 SellOfferIndex = 0;

        for(uint i = 0 ; i<= OfferLength;i++){
            if(offers[_tokenId][i].offer == msg.sender){
                _BuyList[OfferIndex] = offers[_tokenId][i];
                OfferIndex++;
            }
        }

        for(uint256 i = 0; i<= SellOfferLength;i++){
            if(SellOffer[_tokenId][i].seller == msg.sender){
                _SellList[SellOfferIndex] = SellOffer[_tokenId][i];
                SellOfferIndex++;
            }
        }

        return (_BuyList,_SellList);
        }
        else if(offers[_tokenId].length > 0 && SellOffer[_tokenId].length == 0){
            uint256 OfferLength = offers[_tokenId].length-1;
            OfferList[] memory _BuyList;
            uint256 OfferIndex = 0;

            for(uint i = 0 ; i<= OfferLength;i++){
                if(offers[_tokenId][i].offer == msg.sender){
                    _BuyList[OfferIndex] = offers[_tokenId][i];
                    OfferIndex++;
                }
            }

            return (_BuyList,new SellList[](0));
        }

        else if(offers[_tokenId].length == 0 && SellOffer[_tokenId].length > 0){
            uint256 SellOfferLength = SellOffer[_tokenId].length-1;
            SellList[] memory _SellList;
            uint256 SellOfferIndex = 0;

            for(uint256 i = 0; i<= SellOfferLength;i++){
                if(SellOffer[_tokenId][i].seller == msg.sender){
                    _SellList[SellOfferIndex] = SellOffer[_tokenId][i];
                    SellOfferIndex++;
                }
            }

            return (new OfferList[](0),_SellList);
        }
        
        else {
            return (new OfferList[](0),new SellList[](0));
        }
    }

    function _offers(uint256 _tokenId) public view returns(OfferList[] memory,SellList[] memory){
        return (offers[_tokenId],SellOffer[_tokenId]);
    }

    function _soLength()public view returns(uint256){
        return SellOffer[1].length;
    }

    function _ofLength() public view returns(uint256){
        return offers[1].length;
    }
}

    // 토큰 개수 적용 함수
    // function setSellTokenAmount(uint _sellerId, uint _amount) internal {
    //     sales[_sellerId].amountOfToken -= _amount;
    //     // 다 팔렸을 경우
    //     require(sales[_sellerId].amountOfToken == 0);
    //     sales[_sellerId].isSold = true;
    //     delete sales[_sellerId];
    // }
    // 배열 리스트 제거
    // function remove(uint _index) public {
    //     require(_index < sales.length, "index out of bound");

    //     for( uint i = _index; i < sales.length - 1; i++){
    //         sales[i] = sales[i + 1];
    //     }
    //     sales.pop();
    // }
    // 취소
    // function cancelList(
    //     uint256 _sellId
    // ) public returns(bool) {
    //     require(sales[_sellId].seller == msg.sender,"who are you?");
    //     require(sales[_sellId].isSold != true, "already sold out");
    //     delete sales[_sellId];
    //     emit CanceledSell(
    //         sales[_sellId].seller,
    //         sales[_sellId].tokenId,
    //         sales[_sellId].amountOfToken
    //     );
    //     return true;
    // }


// [0xd8b934580fcE35a11B58C6D73aDeE468a2833fa8,0x5B38Da6a701c568545dCfcB03FcB875f56beddC4]