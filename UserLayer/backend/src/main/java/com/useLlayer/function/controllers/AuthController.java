package com.useLlayer.function.controllers;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import javax.validation.Valid;

import com.useLlayer.function.models.ERole;
import com.useLlayer.function.models.Role;
import com.useLlayer.function.models.User;
import com.useLlayer.function.payload.request.SignupRequest;
import com.useLlayer.function.security.jwt.JwtUtils;
import com.useLlayer.function.services.AdminService;
import com.useLlayer.function.services.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import com.useLlayer.function.payload.request.LoginRequest;
import com.useLlayer.function.payload.response.UserInfoResponse;
import com.useLlayer.function.payload.response.MessageResponse;
import com.useLlayer.function.repository.RoleRepository;
import com.useLlayer.function.repository.UserRepository;
import com.useLlayer.function.security.authentication.UserDetailsImpl;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {
  @Autowired
  private AuthService authService;

  @PostMapping("/signin")
  public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
    return authService.authenticateUser(loginRequest);
  }

  @PostMapping("/signup")
  public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
    return authService.registerUser(signUpRequest);
  }

  @PostMapping("/signout")
  public ResponseEntity<?> logoutUser() {
    return authService.logoutUser();
  }

  @DeleteMapping("/delete/{userId}")
  public ResponseEntity<?> deleteUser(@PathVariable(value = "userId") Long userId) {
    return authService.deleteUser(userId);
  }




}