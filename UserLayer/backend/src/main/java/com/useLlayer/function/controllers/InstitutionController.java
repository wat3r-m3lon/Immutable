package com.useLlayer.function.controllers;

import com.useLlayer.function.models.User;
import com.useLlayer.function.payload.request.UpdateProfileRequest;
import com.useLlayer.function.services.InstitutionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(value = "*", maxAge = 3600)
public class InstitutionController {

    @Autowired
   private InstitutionService institutionService;


    @GetMapping("/institution")
    public ResponseEntity<List<User>> getAllUsers() {

        List<User> users = institutionService.getAllUsers();

        if (users.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else if (users==null) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return new ResponseEntity<>(users, HttpStatus.OK);

    }

    //TODO need to be modified
    @GetMapping("/institution/{id}")
    User getUserById(@PathVariable Long id) {
        return institutionService.getUserById(id);
    }

    //TODO need to be modified
    @PutMapping("/institution/{id}")
    public ResponseEntity<?> updateUser(@PathVariable Long id, @RequestBody UpdateProfileRequest updateProfileRequest) {
        User updatedUser = institutionService.updateUser(id, updateProfileRequest);
        return ResponseEntity.ok(updatedUser);
    }

}