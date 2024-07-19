package com.useLlayer.function.services.impl;

import com.useLlayer.function.exception.userResourceNotFoundException;
import com.useLlayer.function.models.NFT;
import com.useLlayer.function.payload.request.NFTRequest;
import com.useLlayer.function.payload.response.MessageResponse;
import com.useLlayer.function.repository.NFTRepository;
import com.useLlayer.function.repository.UserRepository;
import com.useLlayer.function.services.NFTService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NFTServiceImpl implements NFTService {
    @Autowired
    private NFTRepository NFTRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public ResponseEntity<?> createNFTForUser(Long userId, NFTRequest nftRequest) {
        return userRepository.findById(userId).map(user -> {

            NFT nft = new NFT(
                    nftRequest.getMetadataAddress(),
                    nftRequest.getNftAddress()
            );

            nft.setUser(user);
            user.addNFT(nft);
            userRepository.save(user);
            return ResponseEntity.ok(new MessageResponse("User nft created successfully!"));
        }).orElseThrow(() -> new userResourceNotFoundException("User", "id", userId));
    }

    @Override
    public ResponseEntity<List<NFT>> getNFTsByUserId(Long userId) {
        List<NFT> nfts = NFTRepository.findByUserId(userId);
        return ResponseEntity.ok(nfts);
    }

    @Override
    public ResponseEntity<?> deleteNFT(Long requestId) {
        NFT nft = NFTRepository.findById(requestId)
                .orElseThrow(() -> new userResourceNotFoundException("Request", "id", requestId));

        NFTRepository.delete(nft);

        return ResponseEntity.ok().build();
    }
}
