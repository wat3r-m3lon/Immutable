package com.useLlayer.function.services;
import com.useLlayer.function.payload.request.UpdateProfileRequest;


import com.useLlayer.function.models.User;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface AdminService {

    public List<User> getAllUsers();

    public User getUserById(long id);

    public String deleteUserById(Long id);

    User updateUser(Long id, UpdateProfileRequest updateProfileRequest);
}
