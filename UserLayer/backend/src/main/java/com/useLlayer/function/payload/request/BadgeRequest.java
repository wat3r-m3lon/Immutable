package com.useLlayer.function.payload.request;

import org.springframework.web.multipart.MultipartFile;

import javax.persistence.Lob;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class BadgeRequest {

//    @NotBlank
//    @Lob
//    private byte[] badge;

    @NotBlank
    private MultipartFile badge;

    @NotBlank
    @Size(max = 100)
    private String uploadDate;

    public MultipartFile getBadge() {
        return badge;
    }

    public void setBadge(MultipartFile badge) {
        this.badge = badge;
    }

    public String getUploadDate() {
        return uploadDate;
    }

    public void setUploadDate(String uploadDate) {
        this.uploadDate = uploadDate;
    }
}
