package com.useLlayer.function.services;
import com.useLlayer.function.payload.request.UpdateProfileRequest;


import com.useLlayer.function.models.User;

import java.util.List;

public interface InstitutionService {

    public List<User> getAllUsers();

    public User getUserById(long id);

    User updateUser(Long id, UpdateProfileRequest updateProfileRequest);
}
