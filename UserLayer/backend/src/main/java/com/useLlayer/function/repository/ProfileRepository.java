package com.useLlayer.function.repository;

import com.useLlayer.function.models.Profile;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProfileRepository extends JpaRepository<Profile, Long> {
    // 可以自定义一些查询方法
    // ...
     boolean existsProfileByUserId(Long userId) ;

    Optional<Profile> findProfileByUserId(Long userId);
}
