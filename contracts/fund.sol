// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract Fund is ERC1155{
    constructor(
        string memory _uri
    ) ERC1155 ()
}