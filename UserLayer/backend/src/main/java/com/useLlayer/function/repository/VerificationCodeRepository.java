package com.useLlayer.function.repository;

import com.useLlayer.function.models.Profile;
import com.useLlayer.function.models.VerificationCode;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
public interface VerificationCodeRepository  extends JpaRepository<VerificationCode, Long> {
    Boolean existsByEmailAndCode ( String email, String code);
    
    @Transactional
    void deleteByCode( String code);
    
}
