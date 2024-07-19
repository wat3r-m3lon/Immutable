package com.useLlayer.function.services;

import com.useLlayer.function.models.VerificationCode;
import com.useLlayer.function.payload.request.EmailRequest;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public interface EmailService {
    ResponseEntity<?> sendEmail(EmailRequest emailRequest);
    ResponseEntity<?> verifyCode(EmailRequest emailRequest);
}