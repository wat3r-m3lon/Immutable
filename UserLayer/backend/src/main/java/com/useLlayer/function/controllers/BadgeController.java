package com.useLlayer.function.controllers;

import com.useLlayer.function.models.Badge;
import com.useLlayer.function.payload.request.BadgeRequest;
import com.useLlayer.function.services.BadgeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


//TODO The Badge save and fetch functionality
/**
 * This controller is used to save and get the badges designed by users in the badge design page
 * However, it hasn't been completed yer due to the file type and other issues.
 * To solve this, you need to edit the Badge.java, BadgeService.java, BadgeServiceImpl.java, BadgeRequest.java and BadgeRepository.java file
 */

@RestController
@CrossOrigin(value = "*", maxAge = 3600)
@RequestMapping("/api/badges")
public class BadgeController {

    @Autowired
    private BadgeService badgeService;

    @PostMapping("/upload")
    public ResponseEntity<Badge> uploadBadgeImage(@ModelAttribute Badge badge,
                                                  @RequestParam("badge") MultipartFile file) {
        try {
            Badge savedBadge = badgeService.uploadBadgeImage(badge, file);
            //ResponseEntity<?> response =  badgeService.uploadBadgeImage(userId, file);
            return new ResponseEntity<>(savedBadge, HttpStatus.CREATED);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }


}
