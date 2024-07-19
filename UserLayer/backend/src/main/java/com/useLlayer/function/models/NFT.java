package com.useLlayer.function.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(name = "user_nfts")
public class NFT {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @NotBlank
    @Size(max = 200)
    private String metadataAddress;

    @NotBlank
    @Size(max = 100)
    private String nftAddress;


    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    public NFT() {

    }

    public NFT(String metadataAddress, String nftAddress) {
        this.metadataAddress = metadataAddress;
        this.nftAddress = nftAddress;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMetadataAddress() {
        return metadataAddress;
    }

    public void setMetadataAddress(String metadataAddress) {
        this.metadataAddress = metadataAddress;
    }

    public String getNftAddress() {
        return nftAddress;
    }

    public void setNftAddress(String nftAddress) {
        this.nftAddress = nftAddress;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
