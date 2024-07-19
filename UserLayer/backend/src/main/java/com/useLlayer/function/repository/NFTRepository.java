package com.useLlayer.function.repository;

import com.useLlayer.function.models.NFT;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


public interface NFTRepository extends JpaRepository<NFT, Long> {
    List<NFT> findByUserId(Long userId);

}
