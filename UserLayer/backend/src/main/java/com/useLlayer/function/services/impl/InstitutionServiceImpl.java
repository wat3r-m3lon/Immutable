package com.useLlayer.function.services.impl;

import com.useLlayer.function.exception.UserNotFoundException;
import com.useLlayer.function.models.User;
import com.useLlayer.function.payload.request.UpdateProfileRequest;
import com.useLlayer.function.repository.UserRepository;
import com.useLlayer.function.services.AdminService;
import com.useLlayer.function.services.InstitutionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InstitutionServiceImpl implements InstitutionService {


    @Autowired
    private UserRepository userRepository;
    @Override
    public List<User> getAllUsers() {
        try {
            List<User> users = userRepository.findAll();
            return users;
        } catch (Exception e) {
            return null;
        }
    }

    @Override
    public User getUserById(long id) {
        return userRepository.findById(id).orElseThrow(() -> new UserNotFoundException(id));
    }


    @Override
    public User updateUser(Long id, UpdateProfileRequest updateProfileRequest) {
        return userRepository.findById(id).map(user -> {
            user.setUsername(updateProfileRequest.getUsername());
            user.setEmail(updateProfileRequest.getEmail());
            // Assume more fields might be updated
            return userRepository.save(user);
        }).orElseThrow(() -> new UserNotFoundException(id));
    }
}
