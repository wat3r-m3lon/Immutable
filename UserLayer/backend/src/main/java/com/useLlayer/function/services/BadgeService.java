package com.useLlayer.function.services;

import com.useLlayer.function.models.Badge;
import com.useLlayer.function.payload.request.BadgeRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;


public interface BadgeService {

    ResponseEntity<List<Badge>> getBadge(Long userId, BadgeRequest badgeRequest);

    Badge uploadBadgeImage(Badge badge, MultipartFile file);

}
