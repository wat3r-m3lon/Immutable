package com.useLlayer.function.repository;

import com.useLlayer.function.models.Badge;

import org.jetbrains.annotations.NotNull;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;
import java.util.List;

@Transactional
public interface BadgeRepository extends JpaRepository<Badge, Long>{

    List<Badge> findByUserId(Long userId);




}
