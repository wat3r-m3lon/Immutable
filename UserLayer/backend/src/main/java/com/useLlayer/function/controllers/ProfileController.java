package com.useLlayer.function.controllers;

import com.useLlayer.function.exception.userResourceNotFoundException;
import com.useLlayer.function.models.Profile;
import com.useLlayer.function.models.User;
import com.useLlayer.function.payload.request.ProfileRequest;
import com.useLlayer.function.payload.response.MessageResponse;
import com.useLlayer.function.repository.ProfileRepository;
import com.useLlayer.function.repository.UserRepository;
import com.useLlayer.function.services.ProfileService;
import com.useLlayer.function.tools.imageProcessor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/profiles")
public class ProfileController {

    @Autowired
    private ProfileService profileService;
    //if profile doesn't exist, create a new profile
    //if profile exists, update the profile
    @PostMapping("/{userId}")
    public ResponseEntity<?> editProfile(@PathVariable(value = "userId") Long userId, @RequestBody ProfileRequest profileRequest) {
        return profileService.editOrCreateProfile(userId, profileRequest);
    }

    //get profile by user id
    @GetMapping("/{userId}")
    public ResponseEntity<Map<String, String>> getProfileByUserId(@PathVariable Long userId) {
        return profileService.getProfileByUserId(userId);
    }


}