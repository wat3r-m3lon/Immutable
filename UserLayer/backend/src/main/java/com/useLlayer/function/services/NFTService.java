package com.useLlayer.function.services;

import com.useLlayer.function.models.NFT;
import com.useLlayer.function.payload.request.NFTRequest;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface NFTService {
    ResponseEntity<?> createNFTForUser(Long userId, NFTRequest nftRequest);
    ResponseEntity<List<NFT>> getNFTsByUserId(Long userId);
    ResponseEntity<?> deleteNFT(Long requestId);
}
