package com.useLlayer.function.controllers;

import com.useLlayer.function.models.User;
import com.useLlayer.function.payload.request.UpdateProfileRequest;
import com.useLlayer.function.services.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(value = "*", maxAge = 3600)
public class AdminController {

    @Autowired
    private AdminService adminService;

//    @PostMapping("/admin")
//    Admin newUser(@RequestBody Admin newAdmin){
//        newAdmin.setStatus("Pending");
//        return adminRepository.save(newAdmin);
//    }

    @GetMapping("/admin")
    public ResponseEntity<List<User>> getAllUsers() {

        List<User> users = adminService.getAllUsers();

        if (users.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else if (users==null) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return new ResponseEntity<>(users, HttpStatus.OK);

    }

    //TODO need to be modified
    @GetMapping("/admin/{id}")
    User getUserById(@PathVariable Long id) {
        return adminService.getUserById(id);
    }

    //TODO need to be modified
//    @PutMapping("/admin/{id}")
//    User updateUser(@RequestBody Admin newAdmin, @PathVariable Long id){
//        return userRepository.findById(id)
//                .map(admin -> {
//                    admin.setUsername(newAdmin.getUsername());
////                    admin.setName(newAdmin.getName());
//                    admin.setEmail(newAdmin.getEmail());
////                    admin.setStatus(newAdmin.getStatus());
//                    return userRepository.save(admin);
//                }).orElseThrow(()->new UserNotFoundException(id));
//    }
    @PutMapping("/admin/{id}")
    public ResponseEntity<?> updateUser(@PathVariable Long id, @RequestBody UpdateProfileRequest updateProfileRequest) {
        User updatedUser = adminService.updateUser(id, updateProfileRequest);
        return ResponseEntity.ok(updatedUser);
    }


    //TODO need to be modified
    @PostMapping("/admin/{id}")
    String deleteUser(@PathVariable Long id) {
        return adminService.deleteUserById(id);
    }
}