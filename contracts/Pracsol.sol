// SPDX-License-Identifier: MIT
// ["efsdajv",133,14444444444,155,1555,155555,3,3]
// [0x5B38Da6a701c568545dCfcB03FcB875f56beddC4,"Httpnaver",1555,2000000000,10000,1000,100000,30,70]
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";
// 0x43D218197E8c5FBC0527769821503660861c7045
// import "@openzeppelin/contracts/utils/Strings.sol";

contract NewSickFund is ERC1155,Ownable,ERC1155Burnable{
    event createFund(uint256 indexed tokenId, fundingStruct);

    modifier creatorOnly(uint256 _id) {
    require(creators[_id] == msg.sender, "ERC1155Tradable#creatorOnly: ONLY_CREATOR_ALLOWED");
        _;
    }
    uint256 tokenId = 1;
    // 펀딩 신청할 때 구조체
    struct fundingStruct{
        address creator;
        string uri;
        uint256 startdate;
        uint256 finishdate;
        uint256 price;
        uint256 min;
        uint256 max;
        uint256 holdershare;
        uint256 creatorshare;
    }

    // 어떤 Nft를 누가 만든건지
    mapping(uint256=>address) creators;

    // 각 토큰아이디당 구조체 할당
    mapping(uint256 => fundingStruct) public tokenInfo;

    // 각 토큰아이디당 총 여태 판매된 갯수(토탈 서플라이라고 보면 됌)
    mapping (uint256 => uint256) public totalSupply;

    // 어떤 토큰아이디를 누가 몇개나 펀딩했는지
    mapping (uint256 => mapping(address=> uint256)) public tokenOwner; 

    // 내가 가지고 있는 토큰 아이디
    mapping (address => uint256[]) public toOwner;

    // 토큰 아이디 배열에 중복된 토큰아이디를 넣지 않으려고 만든 매핑
    mapping (address => mapping(uint256 => bool)) public toOwner2;

    constructor() ERC1155("https://game.example/api/item/{id}.json") {}
    
    // 유저가 가지고 있는 모든 Nft의 metadata uri를 배열로 리턴
    function totaluri() public view returns(string[] memory) {
        uint256 length =toOwner[msg.sender].length;
        string[] memory memo = new string[](length);
        for(uint256 i = 0; i< length; i++){
            memo[i] = uri(toOwner[msg.sender][i]);
        }
        return memo;
    }

    function uri(uint256 _tokenId) override public view returns(string memory){
        return tokenInfo[_tokenId].uri;
    }

    // 최초 펀딩 신청시 메타데이터 uri 및 각종 nft정보 세팅 최초만 가능하며 추후 변경 불가
    function setTokenUri(fundingStruct memory _fundingStruct) public onlyOwner {
        require(keccak256(bytes(tokenInfo[tokenId].uri)) == keccak256(bytes("")),'already set');
        tokenInfo[tokenId] = _fundingStruct;
        creators[tokenId] = msg.sender;
        emit createFund(tokenId,_fundingStruct);
        tokenId++;
    }

    // 펀딩 신청 
    function mint(address _to, uint256 _tokenId, uint256 _amount, bytes calldata _data)public payable{
        require(tokenInfo[_tokenId].price*_amount < msg.value,'no money'); // nft가격 * 구매 신청갯수 > 보낸 이더보다 커야됌
        require(tokenInfo[_tokenId].startdate < block.timestamp,'no start'); // 해당 펀딩 오픈되었는지 확인
        require(tokenInfo[_tokenId].finishdate > block.timestamp,'sale finish'); // 해당 펀딩이 종료된건 아닌지 확인
        require(tokenInfo[_tokenId].max >= totalSupply[_tokenId] + _amount,'exceeded supply'); // 여태 누적 판매된 갯수 + 펀딩신청한 갯수 보다 하드캡 갯수가 크면 안됌 물량초과
        require(tokenInfo[_tokenId].max >= totalSupply[_tokenId],'sold out!'); // 하드캡 충족
        totalSupply[_tokenId] = totalSupply[_tokenId] + _amount; // 총 풀린 물량 확인
        tokenOwner[_tokenId][_to] = tokenOwner[_tokenId][_to] + _amount; // 요청자가 구매한 수량 만큼 기존 신청 수량에 더하기 디폴트는 0
        if(!toOwner2[_to][_tokenId]){ 
            toOwner2[_to][_tokenId] = true; // 어떤어떤 토큰을 가지고 있는지 확인 최초 펀딩신청이면 트루로 변경
            toOwner[_to].push(_tokenId);
        }
        _mint(_to, _tokenId, _amount, _data);
    }

    // 환불
    function refund(address _to, uint256 _tokenId,uint256 _amount) public{
        // ca에 입금되어있는 eth를 환불 원하는 nft의 가격을 조회 후 환불 요청 갯수 * 가격 해서 요청자에게 전달
        require(tokenInfo[_tokenId].startdate < block.timestamp,'no start'); // 해당 펀딩 오픈되었는지 확인
        require(tokenInfo[_tokenId].finishdate > block.timestamp,'sale finish'); // 해당 펀딩이 종료된건 아닌지 확인
        require(tokenOwner[_tokenId][_to] >= _amount,'you have no'); // 요청자가 환불 신청한 갯수이상 이전에 펀딩신청을 해뒀는지
        address payable receiver = payable(_to); // payable 등록
        receiver.transfer(tokenInfo[_tokenId].price * _amount); // ca 에서 환불신청한 만큼 금액 전송
        if(tokenOwner[_tokenId][_to] - _amount == 0){
        toOwner2[_to][_tokenId] == false;
        }
        tokenOwner[_tokenId][_to] = tokenOwner[_tokenId][_to] - _amount; // 환불 신청한 갯수만큼 신청서에서 빼기
        totalSupply[_tokenId] = totalSupply[_tokenId]-_amount; // 
        burn(_to,_tokenId,_amount); // _to가 토큰아이디랑 총갯수
    }

    function _setApprovalForAll2(address _operator) external {
        _setApprovalForAll(msg.sender,_operator,true);
    }
}