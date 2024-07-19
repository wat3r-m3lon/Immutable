package com.useLlayer.function.services;

import com.useLlayer.function.payload.request.ProfileRequest;
import org.springframework.http.ResponseEntity;

import java.util.Map;

public interface ProfileService {
    ResponseEntity<?> editOrCreateProfile(Long userId, ProfileRequest profileRequest);
    ResponseEntity<Map<String, String>> getProfileByUserId(Long userId);
}
