// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyToken is ERC1155, Ownable {
    constructor() ERC1155("") {}

    uint256 public mintRate = 0.005 ether;
    uint256[] public minted = [0, 0, 0];
    uint256[] public supplies = [10, 10, 50];

    function setURI(string memory newuri) public onlyOwner {
        _setURI(newuri);
    }

    function mint(uint256 id, uint256 amount) public payable {
        require(id <= supplies.length, "Token doesn't exist");
        require(id > 0, "Token doesn't exist");
        require(msg.value >= (amount * mintRate), "Not enough ether sent");
        require(
            minted[id - 1] + amount <= supplies[id - 1],
            "not enought supply left"
        );
        _mint(msg.sender, id, amount, "");
    }
}
