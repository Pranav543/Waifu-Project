// SPDX-License-Identifier: MIT
pragma solidity ^0.6.2;
pragma experimental ABIEncoderV2;

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
        string waifuLink;
    }

    struct auctionTrade{
        address seller;
        uint256 tokenId;
        uint256 price;
        uint256 status;   /// Open, Executed, Cancelled
    }

    Waifu[] public waifus;
    address[] public hostedAuctions;
    mapping(bytes32 => string) requestToWaifuName;
    mapping(bytes32 => string) requestToWaifuOrigin;
    mapping(bytes32 => string) requestToWaifuDescription;
    mapping(bytes32 => string) requestToWaifuLink;
    mapping(bytes32 => address) requestToSender;
    mapping(address => uint256[]) public senderToTokenId;
    uint256 auctionCount;
    mapping(uint256 => auctionTrade) public trades;
    uint256[] public forAuction;

    event TradeStatusChange(uint256 ad, uint256 status);

    constructor(address _VRFCoordinator, address _LinkToken, bytes32 _keyhash)
        public
        VRFConsumerBase(_VRFCoordinator, _LinkToken)
        ERC721("CreateWaifu", "WFU")
    {   
        VRFCoordinator = _VRFCoordinator;
        LinkToken = _LinkToken;
        keyHash = _keyhash;
        fee = 0.0001 * 10**18; // 0.1 LINK
        auctionCount = 0;
    }

    function removeElement(uint256[] storage arr, uint256 index) internal {
        // Move the last element into the place to delete
        arr[index] = arr[arr.length - 1];
        // Remove the last element
        arr.pop();
    }

    function requestNewRandomWaifu(
        uint256 userProvidedSeed,
        string memory name, 
        string memory origin,
        string memory description,
        string memory waifuLink
    ) public returns (bytes32) {
        require(
            LINK.balanceOf(address(this)) >= fee,
            "Not enough LINK - fill contract with faucet"
        );
        bytes32 requestId = requestRandomness(keyHash, fee, userProvidedSeed);
        requestToWaifuName[requestId] = name;
        requestToWaifuOrigin[requestId] = origin;
        requestToWaifuDescription[requestId] = description;
        requestToWaifuLink[requestId] = waifuLink;
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
        uint256 age = ((randomNumber % 10000) + 1 );
        uint256 height = ((randomNumber % 160) + 90 );
        uint256 weight = ((randomNumber % 30) + 10 );
        uint256 bust = ((randomNumber % 110) + 75 );
        uint256 waist = ((randomNumber % 80) + 54 );
        uint256 hip = ((randomNumber % 110) + 82 );
        uint256 rating = ((randomNumber % 100) / 1 );

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
                rating,
                requestToWaifuLink[requestId]
            )
        );
        _safeMint(requestToSender[requestId], newId);
        senderToTokenId[requestToSender[requestId]].push(newId);
    }

    function getWaifusCount(address _address) public view returns (uint256) {
        return senderToTokenId[_address].length;
    }

    function getNumberOfWaifus() public view returns (uint256) {
        return waifus.length; 
    }

    function getWaifuStats(uint256 tokenId)
        public
        view
        returns (
            string memory,
            string memory,
            string memory,
            string memory,
            uint256,
            uint256,
            uint256,
            uint256,
            uint256,
            uint256,
            uint256
        )
    {
        Waifu memory w = waifus[tokenId];
        return (
            w.name,
            w.origin,
            w.description,
            w.waifuLink,
            w.age,
            w.height,
            w.weight,
            w.bust,
            w.waist,
            w.hip,
            w.rating
        );
    }
    
    function putForAuction(uint256 _tokenId, uint256 _price) public {
        approve(address(this), _tokenId);
        transferFrom(msg.sender, address(this), _tokenId);
        trades[_tokenId] = auctionTrade({
            seller: msg.sender,
            tokenId: _tokenId,
            price: _price,
            status: 1
        });
        auctionCount += 1;
        forAuction.push(_tokenId);
        emit TradeStatusChange(auctionCount - 1, 1);
    }

    function transferWaifu(address from, address to, uint256 tokenId) private {
        transferFrom(from, to, tokenId);
    }

    function buyWaifu(uint256 _tokenId) public payable {
        auctionTrade memory trade = getAuctionTrade(_tokenId);
        require(trade.status == 1, "Trade is not Open.");
        address payable seller = address(uint160(trade.seller));
        uint256 buyAmount = trade.price;
        require (msg.value == buyAmount, "msg.value should be equal to the buyAmount");
        seller.transfer(buyAmount);
        address buyer = msg.sender;
        approve(buyer, _tokenId);
        transferFrom(address(this), buyer, _tokenId);
        // approve(buyer, _tokenId);
        // transferWaifu(address(this), buyer, _tokenId);
        getAuctionTrade(_tokenId).status = 0;
        emit TradeStatusChange(_tokenId, 0);
        
        uint256 index;
        for (uint i=0; i<senderToTokenId[trade.seller].length; i++) {
            if (senderToTokenId[trade.seller][i] == trade.tokenId) {
                index = i;
                break;
            }
        }
        removeElement(senderToTokenId[trade.seller], index);
        senderToTokenId[buyer].push(trade.tokenId);
    }

    function getAuctionTrade(uint256 _tokenId) public view returns (auctionTrade memory trade_) {
        auctionTrade memory trade = trades[_tokenId];
        return trade;
    }
}