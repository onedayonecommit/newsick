// SPDX-License-Identifier: MIT
// ["efsdajv",133,14444444444,155,1555,155555,3,3] 5000000000000000
// [0x615AD5f8BcC596B4E160b11F31F141037d8BA43A,https://nftstorage.link/ipfs/bafkreihca75uugpudozdbtjdb343j3wgii33zzo7nuwhuimyyiv4r2b54i/,1555,2000000000,2222222222,1000000000000000,10,10]
pragma solidity ^0.8.17;
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155URIStorage.sol";
// 0x43D218197E8c5FBC0527769821503660861c7045
// import "@openzeppelin/contracts/utils/Strings.sol";

contract NewSickFund is ERC1155URIStorage,Ownable,ERC1155Burnable{
    // 펀딩을 생성했을 시 보내줄 이벤트
    event createFund(uint256 indexed tokenId, fundingStruct);
    // 크리에이터만 접근 가능하도록 하는 정의
    modifier creatorOnly {
    require(creatorList[msg.sender], "ERC1155Tradable#creatorOnly: ONLY_CREATOR_ALLOWED");
        _;
    }
    // 관리자만 접근가능하도록 하는 정의
    modifier newsicOnly{
        require(msg.sender == newsicadmin,"you not admin");
        _;
    }
    // 관리자 주소 담을 변수
    address private newsicadmin;
    // address payable admin = payable(newsicadmin);
    // 펀딩 관리 변수(토큰아이디) 1부터 시작
    uint256 public tokenId = 1;
    
    function getTokenId() public view returns(uint256){
        return tokenId;
    }
    // [0x615AD5f8BcC596B4E160b11F31F141037d8BA43A,"Httpnaver",1555,2000000000,2222222222,1000,100000]
    // 펀딩 신청할 때 구조체
    struct fundingStruct{
        address creator; // 크리에이터
        string uri; // 메타데이터
        uint256 startdate; // 시작일
        uint256 finishdate; // 종료일
        uint256 makedate; // 음원제작 기간
        uint256 price; // 개당 가격
        uint256 max; // 최대
        uint256 holdershare; // 음원수익중 홀더 수익
    }
    // [크리에이터 주소(address) : 크리에이터 확인 데이터(bool)]
    mapping(address=>bool) public creatorList; 
    // 어떤 Nft를 누가 만든건지 [토큰아이디(uint) : 크리에이터(address)]
    mapping(uint256=>address) creators; 
    // 각 토큰의 정보 [토큰아이디(uint) : 토큰정보(fundingStruct)]
    mapping(uint256 => fundingStruct) public tokenInfo;
    // 각 토큰의 총 민팅수량 [토큰아이디(uint) : 총 개수(uint)]
    mapping (uint256 => uint256) public totalSupply;
    // 각 토큰을 누가 몇개나 펀딩했는지 [토큰아이디(uint) : 펀딩자(address) : 펀딩개수(uint)]
    mapping (uint256 => mapping(address=> uint256)) public tokenOwner;
    // 내가 가지고 있는 토큰 아이디
    mapping (address => uint256[]) public toOwner;
    // 토큰 아이디 배열에 중복된 토큰아이디를 넣지 않으려고 만든 매핑
    mapping (address => mapping(uint256 => bool)) public toOwner2;
    // 각 토큰 음원 수익 중 홀더가 가져갈 퍼센트 몫(크리에이터 몫 = 100 - holdershare) [토큰아이디(uint) : 홀더 몫(uint)]
    // 
    mapping(uint256 => mapping(address => uint256)) whoareyou;
    constructor() ERC1155("https://www.n2wsic.com") {
        newsicadmin = msg.sender;
    }

    function uri(uint256 _id) public view override(ERC1155URIStorage, ERC1155) returns (string memory) {
    return super.uri(_id);
    }
    
    // 펀딩 진행 중
    function viewAll() public view returns(uint256[] memory){
        uint256[] memory hi;
        uint256 count = 0;
        for(uint i = 1; i <= tokenId;i++){
            if(tokenInfo[i].startdate <= block.timestamp && tokenInfo[i].finishdate > block.timestamp){
                hi[count] = i;
                count++;
            }
        }
        return hi;
    }

    // 진행예정
    function beforeStart() public view returns(uint256[] memory){
        uint256[] memory hi;
        uint256 count = 0;
        for(uint i = 1; i <= tokenId;i++){
            if(tokenInfo[i].startdate > block.timestamp){
                hi[count] = i;
                count++;
            }
        }
        return hi;
    }

    // 종료된 놈들 제작기간까지 지난놈들
    function fundingEnd() public view returns(uint256[] memory){
        uint256[] memory hi;
        uint256 count = 0;
        for(uint i = 1; i <= tokenId;i++){
            if(tokenInfo[i].finishdate < block.timestamp && tokenInfo[i].makedate < block.timestamp){
                hi[count] = i;
                count++;
            }
        }
        return hi;
    }

    // 종료되고 제작시작하는 애들 
    function makeStart() public view returns(uint256[] memory){
        uint256[] memory hi;
        uint256 count = 0;
        for(uint i = 1; i <= tokenId;i++){
            if(tokenInfo[i].finishdate < block.timestamp && tokenInfo[i].makedate > block.timestamp){
                hi[count] = i;
                count++;
            }
        }
        return hi;
    }

    struct totalUris{
        string uri;
        uint256 tokenId;
        uint256 amount;
    }
    // 유저가 가지고 있는 모든 Nft의 metadata uri를 배열로 리턴(마이페이지 보유 NFT 확인)
    function totalUri() public view returns(totalUris[] memory) {
        uint256 length =toOwner[msg.sender].length;
        totalUris[] memory memo = new totalUris[](length);
        for(uint256 i = 0; i< length; i++){
            memo[i] = totalUris(uri(toOwner[msg.sender][i]),toOwner[msg.sender][i],balanceOf(msg.sender,i));
        }
        return memo;
    }

    // 보유하고 있는 토큰아이디 목록들
    function totalTokenId()public view returns(uint256[] memory){
        return toOwner[msg.sender];
    }

    // 보유 NFT의 개수 확인 함수
    function myNftAmount(uint _tokenId)public view returns(uint256){
        return tokenOwner[_tokenId][msg.sender];
    }

    // [0x5B38Da6a701c568545dCfcB03FcB875f56beddC4,"Httpnaver",1555,2000000000,10000,1000,100000]
    // 최초 펀딩 신청시 메타데이터 uri 및 각종 nft정보 세팅 최초만 가능하며 추후 변경 불가
    function _setUri(fundingStruct memory _fundingStruct,uint256 _fundingPrice)public creatorOnly {
        require(keccak256(bytes(tokenInfo[tokenId].uri)) == keccak256(bytes("")),"already set"); // 최초 세팅 한번 끝
        tokenAssociate[tokenId].push(msg.sender);
        tokenInfo[tokenId] = _fundingStruct;
        tokenInfo[tokenId].price = _fundingPrice;
        creators[tokenId] = msg.sender; // 크리에이터 주소
        emit createFund(tokenId,_fundingStruct);
        _setURI(tokenId,_fundingStruct.uri);
        tokenId++;
    }

    //펀딩 구매 함수
    event fundBuySucsess(address indexed _buyer,bool _status,uint256 _totalSupply,uint256 _tokenId);
    function mint(uint256 _tokenId, uint256 _amount, bytes calldata _data)public payable{
        require(tokenInfo[_tokenId].price*_amount <= msg.value,"no money"); // nft가격 * 구매 신청갯수 보낸 이더가 더 커야됌
        require(tokenInfo[_tokenId].startdate < block.timestamp,"no start"); // 해당 펀딩 오픈되었는지 확인
        require(tokenInfo[_tokenId].finishdate > block.timestamp,"sale finish"); // 해당 펀딩이 종료된건 아닌지 확인
        require(tokenInfo[_tokenId].max >= totalSupply[_tokenId] + _amount,"exceeded supply"); // 여태 누적 판매된 갯수 + 펀딩신청한 갯수 보다 하드캡 갯수가 크면 안됌 물량초과
        // require(tokenInfo[_tokenId].max >= totalSupply[_tokenId],"sold out!"); // 하드캡 충족
        totalSupply[_tokenId] = totalSupply[_tokenId] + _amount; // 총 풀린 물량 확인
        tokenOwner[_tokenId][msg.sender] = tokenOwner[_tokenId][msg.sender] + _amount; // 요청자가 구매한 수량 만큼 기존 신청 수량에 더하기 디폴트는 0
        if(!toOwner2[msg.sender][_tokenId]){
            toOwner2[msg.sender][_tokenId] = true; // 어떤어떤 토큰을 가지고 있는지 확인 최초 펀딩신청이면 트루로 변경
            toOwner[msg.sender].push(_tokenId);
        }
        setAssociate(_tokenId,msg.sender);
        _mint(msg.sender, _tokenId, _amount, _data);
        emit fundBuySucsess(msg.sender,true,totalSupply[_tokenId],_tokenId);
    }

    mapping(uint256 => bool) boonStatus;
    // 펀딩 완료되고 수익 분배
    event boonbae(uint256 indexed _tokenId,bool _status);
    function boon(uint256 _tokenId) public creatorOnly{
        require(!boonStatus[_tokenId],"already boon success");
        require(tokenInfo[_tokenId].finishdate > block.timestamp || tokenInfo[_tokenId].max == totalSupply[_tokenId],"not finish or not sold out!");
        require(tokenInfo[_tokenId].creator == msg.sender,"who are you?");
        address payable creator = payable(tokenInfo[_tokenId].creator);
        creator.transfer(tokenInfo[_tokenId].price * totalSupply[_tokenId] * 7 / 10);
        address payable admin = payable(newsicadmin);
        admin.transfer(tokenInfo[_tokenId].price * totalSupply[_tokenId] * 3 / 10);
        boonStatus[_tokenId] = true;
        emit boonbae(_tokenId,true);
    }

    // 환불
    event refundSucsess(address indexed _refunder,bool _status,uint256 _totalSupply,uint256 _tokenId);
    function refund(uint256 _tokenId, uint256 _amount) public payable{
        // ca에 입금되어있는 eth를 환불 원하는 nft의 가격을 조회 후 환불 요청 갯수 * 가격 해서 요청자에게 전달
        require(tokenInfo[_tokenId].startdate < block.timestamp,"no start"); // 해당 펀딩 오픈되었는지 확인
        require(tokenInfo[_tokenId].finishdate > block.timestamp,"sale finish"); // 해당 펀딩이 종료된건 아닌지 확인
        require(tokenOwner[_tokenId][msg.sender] > _amount,"you have no"); // 요청자가 환불 신청한 갯수이상 이전에 펀딩신청을 해뒀는지
        address payable receiver = payable(msg.sender); // payable 등록
        receiver.transfer(tokenInfo[_tokenId].price * _amount); // ca 에서 환불신청한 만큼 금액 전송
        if(tokenOwner[_tokenId][msg.sender] - _amount == 0){
            toOwner2[msg.sender][_tokenId] == false;
        }
        tokenOwner[_tokenId][msg.sender] = tokenOwner[_tokenId][msg.sender] - _amount; // 환불 신청한 갯수만큼 신청서에서 빼기
        totalSupply[_tokenId] = totalSupply[_tokenId]-_amount; //
        burn(msg.sender,_tokenId,_amount); // _to가 토큰아이디랑 총갯수
        emit refundSucsess(msg.sender,true,totalSupply[_tokenId],_tokenId);
    }

    //====================== 크리에이터 신청 ============================
    // 크리에이터 신청자 확인
    event creatorApplicant(address indexed _address,bool _status);
    // 크리에이터 비용 지불 함수
    function creatorJoinPay() public payable{
        // 크리에이터 인지 아닌지
        require(!creatorList[msg.sender],"you already creator");
        // 가입비 0.1EHT 확인
        require(msg.value >= 0.1 ether, "no money");
        // 크리에이터 등록
        creatorList[msg.sender] = true;
        // 받은 크리에이터 신청비 어드민한테 전송
        address payable admin = payable(newsicadmin);
        admin.transfer(msg.value);
        // front로 신청자 전송
        emit creatorApplicant(msg.sender,true);
    }
    //==================================================================

    //========================= 구독권 구매 =============================
    // 구독권 구매자 확인
    event subscriber(address indexed _address, bool _status);
    // 구독권 구매 함수
    function subscriptionPay() public payable{
        require(msg.sender != address(0));
        // 구독권 가격 0.005EHT 확인
        require(msg.value == 0.005 ether, "you need 0.005EHT for subscription fee");
        // 금액 전송
        address payable admin = payable(newsicadmin);
        admin.transfer(msg.value);
        // front로 신청자 전송
        emit subscriber(msg.sender, true);
    }
    //==================================================================

    //========================== 수익 분배 ==============================
    // 토큰이동과 관련된 주소 모두 담음 [토큰아이디(uint) : 관련자(address)]

    // 토큰 관련자 담는 함수 (중복 확인용) 이거 erc1155에 때려넣어둠
    // function setAssociate(uint _tokenId, address _associator) internal{
    //     for(uint i = 0; i < tokenAssociate[_tokenId].length; i++) {
    //         if (tokenAssociate[_tokenId][i] == _associator) {
    //             return;
    //         }
    //     }
    //     tokenAssociate[_tokenId].push(_associator);
    // }

    // 에어드랍 형식으로 수익 분배 함수
    function doAirDrop(uint256[] memory _amount) onlyOwner public payable{
        for(uint256 ii=1; ii < tokenId; ii++) {
            uint256 count = tokenAssociate[ii].length;
            if(_amount[ii-1] != 0 && _amount[ii-1] * tokenInfo[ii].holdershare > totalSupply[ii]){
                address payable creator = payable(tokenInfo[ii].creator);
                creator.transfer(_amount[ii] * (100 - tokenInfo[ii].holdershare) /100);
                for (uint256 k = 0; k < count; k++) {
                    if(balanceOf(tokenAssociate[ii][k],ii) > 0){
                    address payable holder = payable(tokenAssociate[ii][k]);
                    holder.transfer(balanceOf(tokenAssociate[ii][k],ii) * _amount[ii-1] * tokenInfo[ii].holdershare / 100 / totalSupply[ii]);
                    }
                }
            }
        }
    }

    function creatorDelete() public {
        creatorList[msg.sender] = false;
    }

    // function _safeTransferFrom(address _to,uint256 _tokenId, uint256 _amount, bytes memory _data) internal {
    //     safeTransferFrom(msg.sender,_to,_tokenId,_amount,_data);
    // }

    // function safeTransferFrom(address _to,uint256 _tokenId, uint256 _amount, bytes memory _data) override public{
    //     setAssociate(_tokenId,_to);
    //     super.safeTransferFrom(msg.sender,_to,_tokenId,_amount,_data);
    // }
}
    //==================================================================
//"0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db" 1번 전부 소지중 2번 반절
// 0x78731D3Ca6b7E34aC0F824c42a7cC18A495cabaB 2번 반절
// [2000000000000000000,3000000000000000000]
// [0x5B38Da6a701c568545dCfcB03FcB875f56beddC4,"Httpnaver",1555,2000000000,10000,1000,100000] 
// 1000096972929292928
// 1000000000000000000
// 2000000000000000000
// 3000000000000000000



// 2번이 각 100개씩 
// 3번은 1번 0개 2번 200개 3번 150개

// [1000000000000000000,2000000000000000000,3000000000000000000] 보상 6개를 뿌리고 1번이 2.866666666666 1 + 
// 3번 3분의 4개 1.8개 3.1333개 1.3333+1.8