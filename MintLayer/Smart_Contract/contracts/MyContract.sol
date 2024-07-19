// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ImmutableNFT is ERC721URIStorage {
    using Counters for Counters.Counter;
    using SafeMath for uint256;
    Counters.Counter private _tokenIDs;

    event NFTTransfer(uint256 tokenID, address from, address to, string tokenURI, uint256 price);

    constructor() ERC721("Certificate NFT", "CNFT") {}

    function createNFT(string calldata tokenURI) public {
        _tokenIDs.increment();
        uint256 currentID = _tokenIDs.current();
        _safeMint(msg.sender, currentID);
        _setTokenURI(currentID, tokenURI);
        emit NFTTransfer(currentID, address(0),msg.sender, tokenURI, 0);
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId,
        uint256 batchSize
    ) internal virtual override {
        super._beforeTokenTransfer(from, to, tokenId, batchSize = 1);
        require(from == address(0) || to == address(0), "Not allowed to transfer token");
    }


    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        require(_exists(tokenId), "NonTransferableNFT: URI query for nonexistent token");
        // Only allow each individual NFT owner to access their respective NFT's metadata
        require(_msgSender() == ownerOf(tokenId), "NonTransferableNFT: Caller is not the owner of the token");
        // Call the inherited tokenURI function from the ERC721URIStorage contract using the super keyword.
        string memory originalTokenURI = super.tokenURI(tokenId);
        return originalTokenURI;
    }
    
}
