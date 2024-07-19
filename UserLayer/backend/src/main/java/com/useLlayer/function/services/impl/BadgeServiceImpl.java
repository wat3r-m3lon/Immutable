package com.useLlayer.function.services.impl;

import com.useLlayer.function.models.Badge;
import com.useLlayer.function.models.ERole;
import com.useLlayer.function.payload.request.BadgeRequest;
import com.useLlayer.function.payload.response.MessageResponse;
import com.useLlayer.function.repository.BadgeRepository;
import com.useLlayer.function.services.BadgeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class BadgeServiceImpl implements BadgeService {


    @Autowired
    private BadgeRepository badgeRepository;

    @Override
    public ResponseEntity<List<Badge>> getBadge(Long userId, BadgeRequest badgeRequest) {
//        return badgeRepository.findById(userId).map(user -> {
//
//            Badge badge = new Badge(badgeRequest.getBadge(),
//                    badgeRequest.getUploadDate());
//
//            badgeRepository.save(badge);
//
//            return ResponseEntity.ok(new MessageResponse("Badge saved!"));
//
//        }).orElseThrow(() -> new userResourceNotFoundException("User", "id", userId));
        return  null;
    }

    @Override
    public Badge uploadBadgeImage(Badge badge, MultipartFile file) {
        try{
            badge.setBadge(file.getBytes());
            return badgeRepository.save(badge);
        } catch (Exception e) {
            throw new Error("Save badge failed!");
        }
    }


}
