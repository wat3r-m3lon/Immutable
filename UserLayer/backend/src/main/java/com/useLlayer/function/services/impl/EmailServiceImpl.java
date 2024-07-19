package com.useLlayer.function.services.impl;

import com.useLlayer.function.exception.userResourceNotFoundException;
import com.useLlayer.function.models.User;
import com.useLlayer.function.models.VerificationCode;
import com.useLlayer.function.payload.request.EmailRequest;
import com.useLlayer.function.payload.response.MessageResponse;
import com.useLlayer.function.repository.UserRepository;
import com.useLlayer.function.repository.VerificationCodeRepository;
import com.useLlayer.function.services.EmailService;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class EmailServiceImpl implements EmailService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private VerificationCodeRepository verificationCodeRepository;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    private JavaMailSender mailSender;

    public String sendVerificationCode(String email) {
        String code = RandomStringUtils.randomNumeric(6);
        String subject = "Verification Code";
        String text = "Your verification code is " + code;
        sendEmail(email, subject, text);

        return code;
    }

    private void sendEmail(String email, String subject, String text) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(email);
        message.setSubject(subject);
        message.setText(text);
        mailSender.send(message);
    }

    @Override
    public ResponseEntity<?> sendEmail(EmailRequest emailRequest) {
        String userName = emailRequest.getUsername();
        System.out.println(userName);
        return userRepository.findByUsername(userName).map(user -> {
            String code = sendVerificationCode(emailRequest.getEmail());
            VerificationCode verificationCode = new VerificationCode(emailRequest.getEmail(), code, emailRequest.getRequestTime(), user);
            user.addVerificationCode(verificationCode);
            userRepository.save(user);
            return ResponseEntity.ok(new MessageResponse("Verification code sent to " + emailRequest.getEmail()));
        }).orElseThrow(() -> new userResourceNotFoundException("User", "name", userName));
    }

    @Override
    public ResponseEntity<?> verifyCode(EmailRequest emailRequest) {
        System.out.println(emailRequest.getEmail());
        System.out.println(emailRequest.getCode());

        //TODO need to protect user's password safety!!!!
        //TODO expiration time check
        if (verificationCodeRepository.existsByEmailAndCode(emailRequest.getEmail(), emailRequest.getCode())) {

            String newPassword = emailRequest.getPassword();
            String userName = emailRequest.getUsername();
            User user = userRepository.findByUsername(userName)
                    .orElseThrow(() -> new userResourceNotFoundException("User", "name", userName));
            user.setPassword(encoder.encode( newPassword ));
            userRepository.save(user);

            //TODO we may encounter a repeated code problem
            verificationCodeRepository.deleteByCode(emailRequest.getCode());



            return ResponseEntity.ok(new MessageResponse("Your password has been changed"));
        } else {
            return ResponseEntity.ok(new MessageResponse("Verification code is incorrect"));
        }
    }
}
