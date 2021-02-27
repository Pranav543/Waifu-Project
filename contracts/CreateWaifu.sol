// SPDX-License-Identifier: MIT
pragma solidity ^0.6.2;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@chainlink/contracts/src/v0.6/VRFConsumerBase.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract CreateWaifu is ERC721, VRFConsumerBase, Ownable {
    using SafeMath for uint256;
    using Strings for string;

    bytes32 internal keyHash;
    uint256 internal fee;
    uint256 public randomResult;
    address public VRFCoordinator;
    address public LinkToken;

    struct Waifu {
        string name;
        string origin;
        uint256 age;
        uint256 height;
        uint256 weight;
        uint256 bust;
        uint256 waist;
        uint256 hip;
        string description;
        uint256 rating;
    }

    Waifu[] public waifus;
    mapping(bytes32 => string) requestToWaifuName;
    mapping(bytes32 => string) requestToWaifuOrigin;
    mapping(bytes32 => string) requestToWaifuDescription;
    mapping(bytes32 => address) requestToSender;
    mapping(bytes32 => uint256) requestToTokenId;

    constructor(address _VRFCoordinator, address _LinkToken, bytes32 _keyhash)
        public
        VRFConsumerBase(_VRFCoordinator, _LinkToken)
        ERC721("CreateWaifu", "WFU")
    {   
        VRFCoordinator = _VRFCoordinator;
        LinkToken = _LinkToken;
        keyHash = _keyhash;
        fee = 0.0001 * 10**18; // 0.1 LINK
    }

    function requestNewRandomWaifu(
        uint256 userProvidedSeed,
        string memory name, 
        string memory origin,
        string memory description
    ) public returns (bytes32) {
        require(
            LINK.balanceOf(address(this)) >= fee,
            "Not enough LINK - fill contract with faucet"
        );
        bytes32 requestId = requestRandomness(keyHash, fee, userProvidedSeed);
        requestToWaifuName[requestId] = name;
        requestToWaifuOrigin[requestId] = origin;
        requestToWaifuDescription[requestId] = description;
        requestToSender[requestId] = msg.sender;
        return requestId;
    }

    function getTokenURI(uint256 tokenId) public view returns (string memory) {
        return tokenURI(tokenId);
    }

    function setTokenURI(uint256 tokenId, string memory _tokenURI) public {
        require(
            _isApprovedOrOwner(_msgSender(), tokenId),
            "ERC721: transfer caller is not owner nor approved"
        );
        _setTokenURI(tokenId, _tokenURI);
    }

    function fulfillRandomness(bytes32 requestId, uint256 randomNumber)
        internal
        override
    {
        uint256 newId = waifus.length;
        uint256 age = ((randomNumber % 10000) / 100 );
        uint256 height = ((randomNumber % 10000) / 100 );
        uint256 weight = ((randomNumber % 10000) / 100 );
        uint256 bust = ((randomNumber % 10000) / 100 );
        uint256 waist = ((randomNumber % 10000) / 100 );
        uint256 hip = ((randomNumber % 10000) / 100 );
        uint256 rating = ((randomNumber % 10000) / 100 );

        waifus.push(
            Waifu(
                requestToWaifuName[requestId],
                requestToWaifuOrigin[requestId],
                age,
                height,
                weight,
                bust,
                waist,
                hip,
                requestToWaifuDescription[requestId],
                rating
            )
        );
        _safeMint(requestToSender[requestId], newId);
    }

    function getRating(uint256 tokenId) public view returns (uint256) {
        return waifus[tokenId].rating;
    }

    function getNumberOfWaifus() public view returns (uint256) {
        return waifus.length; 
    }

    function getWaifuStats(uint256 tokenId)
        public
        view
        returns (
            uint256,
            uint256,
            uint256,
            uint256,
            uint256,
            uint256,
            uint256
        )
    {
        return (
            waifus[tokenId].age,
            waifus[tokenId].height,
            waifus[tokenId].weight,
            waifus[tokenId].bust,
            waifus[tokenId].waist,
            waifus[tokenId].hip,
            waifus[tokenId].rating
        );
    }


}