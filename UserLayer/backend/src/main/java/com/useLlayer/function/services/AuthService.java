package com.useLlayer.function.services;

import com.useLlayer.function.payload.request.LoginRequest;
import com.useLlayer.function.payload.request.SignupRequest;
import org.springframework.http.ResponseEntity;

public interface AuthService {
    ResponseEntity<?> authenticateUser(LoginRequest loginRequest);
    ResponseEntity<?> registerUser(SignupRequest signUpRequest);
    ResponseEntity<?> logoutUser();
    ResponseEntity<?> deleteUser(Long userId);
}
