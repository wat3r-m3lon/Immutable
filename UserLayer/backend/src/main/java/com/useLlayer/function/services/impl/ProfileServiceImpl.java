package com.useLlayer.function.services.impl;

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
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Service
public class ProfileServiceImpl implements ProfileService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ProfileRepository profileRepository;

    @Override
    public ResponseEntity<?> editOrCreateProfile(Long userId, ProfileRequest profileRequest) {
        return userRepository.findById(userId).map(user -> {

            Profile profile;
            boolean isNewProfile = !profileRepository.findProfileByUserId(userId).isPresent();

            if (isNewProfile) {

                profile = new Profile(profileRequest.getUniversity(), profileRequest.getMajor(), profileRequest.getDescription());

                //save profile photo file to server and save the photo id to database
                String photoId = new imageProcessor(profileRequest.getProfilePhoto()).getImage();

                profile.setProfilePhoto(photoId);


            } else {
                //update profile
                profile = profileRepository.findProfileByUserId(userId).get();

                if (profileRequest.getUniversity() != null)
                    profile.setUniversity(profileRequest.getUniversity());

                if (profileRequest.getMajor() != null)
                    profile.setMajor(profileRequest.getMajor());

                if (profileRequest.getDescription() != null)
                    profile.setDescription(profileRequest.getDescription());


                if (profileRequest.getProfilePhoto() != null) {
                    //save profile photo file to server and save the photo id to database
                    String photoId = new imageProcessor(profileRequest.getProfilePhoto()).getImage();

                    profile.setProfilePhoto(photoId);
                }
            }

            profile.setUser(user);
            user.setProfile(profile);
            userRepository.save(user);


            return ResponseEntity.ok(new MessageResponse(isNewProfile ? "Profile created successfully!" : "Profile updated successfully!"));
        }).orElseThrow(() -> new userResourceNotFoundException("User", "id", userId));
    }

    @Override
    public ResponseEntity<Map<String, String>> getProfileByUserId(Long userId) {
        Optional<User> user = userRepository.findById(userId);

        if (user.isPresent()) {
            Optional<Profile> profile = profileRepository.findProfileByUserId(userId);

            if (profile.isPresent()) {
                Map<String, String> profileMap = new HashMap<>();

                profileMap.put("university", profile.get().getUniversity());
                profileMap.put("major", profile.get().getMajor());
                profileMap.put("description", profile.get().getDescription());


//                if ( !=null){
//                    profileMap.put("profilePhoto", profile.get().getProfilePhoto());
//                }else{
//                    profileMap.put("profilePhoto", null);
//                }

                String base64Image = new imageProcessor().getBase64(profile.get().getProfilePhoto());

                profileMap.put("profilePhoto", base64Image);

                return new ResponseEntity<>(profileMap, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
