package com.useLlayer.function.models;


import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(name = "user_profiles")
public class Profile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Size(max = 50)
    private String university;

    @NotBlank
    @Size(max = 50)
    private String major;
    
    //max description length is 300
    @Size(max = 300)
    @NotBlank
    private String description;
    

    @NotBlank
    @Size(max = 200)
    private String profilePhoto;

    //    private LocalDate graduationDate;
    @JsonIgnore
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;


    public Profile() {
    }
    
    //Use setter to set profilePhoto instead of constructor
    public Profile(String university, String major, String description) {
        
        this.university = university;
//        this.graduationDate = graduatedDate;
        this.major = major;
        this.description = description;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUniversity() {
        return university;
    }

    public void setUniversity(String university) {
        this.university = university;
    }

    public String getMajor() {
        return major;
    }

    public void setMajor(String major) {
        this.major = major;
    }

//    public LocalDate getGraduationDate() {
//        return graduationDate;
//    }
//
//    public void setGraduationDate(LocalDate graduationDate) {
//        this.graduationDate = graduationDate;
//    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
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

    // constructors, getters and setters omitted for brevity
}