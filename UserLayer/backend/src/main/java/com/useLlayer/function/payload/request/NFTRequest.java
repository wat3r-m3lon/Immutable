package com.useLlayer.function.payload.request;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class NFTRequest {
    @NotBlank
    @Size(max = 200)
    private String metadataAddress;

    @NotBlank
    @Size(max = 100)
    private String nftAddress;

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
}
