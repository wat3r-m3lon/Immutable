package com.useLlayer.function.services.impl;
import com.useLlayer.function.payload.request.UpdateProfileRequest;
import com.useLlayer.function.exception.UserNotFoundException;
import com.useLlayer.function.models.User;
import com.useLlayer.function.repository.UserRepository;
import com.useLlayer.function.services.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminServiceImpl implements AdminService {

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
    public String deleteUserById(Long id) {
        if (!userRepository.existsById(id)){
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
        return "User with id " + id + " has been deleted.";
    }

    public User updateUser(Long id, UpdateProfileRequest updateProfileRequest) {
        return userRepository.findById(id).map(user -> {
            user.setUsername(updateProfileRequest.getUsername());
            user.setEmail(updateProfileRequest.getEmail());
            return userRepository.save(user);
        }).orElseThrow(() -> new UserNotFoundException(id));
    }
}
