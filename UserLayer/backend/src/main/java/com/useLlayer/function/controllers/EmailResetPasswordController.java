package com.useLlayer.function.controllers;


import com.useLlayer.function.exception.userResourceNotFoundException;
import com.useLlayer.function.models.Order;
import com.useLlayer.function.models.User;
import com.useLlayer.function.models.VerificationCode;
import com.useLlayer.function.payload.request.EmailRequest;
import com.useLlayer.function.payload.response.MessageResponse;
import com.useLlayer.function.repository.UserRepository;
import com.useLlayer.function.repository.VerificationCodeRepository;
import com.useLlayer.function.services.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(value = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/email")
public class EmailResetPasswordController {

    @Autowired
    private EmailService emailService;

    @PostMapping("/send")
    public ResponseEntity<?> sendEmail(@RequestBody EmailRequest emailRequest) {
        return emailService.sendEmail(emailRequest);
    }

    @PostMapping("/verify")
    public ResponseEntity<?> verifyCode(@RequestBody EmailRequest emailRequest) {
        return emailService.verifyCode(emailRequest);
    }


//    


//    @PostMapping("/verify")
//    public String verifyEmail(@RequestBody EmailRequest emailRequest) {
//        String code = emailService.sendVerificationCode(emailRequest.getEmail());
//
//        VerificationCode verificationCode = new VerificationCode();
//        verificationCode.setCode(code);
//        verificationCode.setRequestTime();
//        verificationCode.setUser();
//
//
//        return "Verification code sent to " + emailRequest.getEmail();
//    }
//    


}

