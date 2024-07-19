package com.useLlayer.function.controllers;

import java.util.List;

import javax.validation.Valid;


import com.useLlayer.function.models.NFT;
import com.useLlayer.function.payload.request.NFTRequest;
import com.useLlayer.function.services.NFTService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/nft")
public class NFTController {

    @Autowired
    NFTService nftService;

    @PostMapping("/{userId}")
    public ResponseEntity<?> createRequest(@PathVariable(value = "userId") Long userId,
                                           @Valid @RequestBody NFTRequest nftRequest) {
        return nftService.createNFTForUser(userId, nftRequest);
    }


    @GetMapping("/{userId}")
    public ResponseEntity<List<NFT>> getRequestsByUserId(@PathVariable Long userId) {
        return nftService.getNFTsByUserId(userId);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteRequest(@PathVariable(value = "id") Long requestId) {
        return nftService.deleteNFT(requestId);
    }
}
