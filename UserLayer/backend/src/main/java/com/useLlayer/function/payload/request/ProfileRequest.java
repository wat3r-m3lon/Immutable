package com.useLlayer.function.payload.request;

import javax.validation.constraints.NotBlank;
import java.time.LocalDate;

public class ProfileRequest {
    private String university;
//    private LocalDate graduationDate;
    private String major;


    @NotBlank
    private String description;


    @NotBlank
    private String profilePhoto;
    
    
    

    public String getUniversity() {
        return university;
    }
    
    

    public void setUniversity(String university) {
        this.university = university;
    }

//    public LocalDate getGraduationDate() {
//        return graduationDate;
//    }
//
//    public void setGraduationDate(LocalDate graduationDate) {
//        this.graduationDate = graduationDate;
//    }

    public String getMajor() {
        return major;
    }

    public void setMajor(String major) {
        this.major = major;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getProfilePhoto() {
        return profilePhoto;
    }

    public void setProfilePhoto(String profilePhoto) {
        this.profilePhoto = profilePhoto;
    }

    // getter/setter methods
    // ...
}
