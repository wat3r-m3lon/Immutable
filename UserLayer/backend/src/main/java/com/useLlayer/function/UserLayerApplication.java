package com.useLlayer.function;

import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Objects;

@SpringBootApplication
public class UserLayerApplication {

	public static void main(String[] args) {
		Dotenv dotenv = Dotenv.configure().load();

		System.setProperty("spring.datasource.password", Objects.requireNonNull(dotenv.get("SPRING_DATASOURCE_PASSWORD")));
		System.setProperty("userlayer.app.jwtSecret", Objects.requireNonNull(dotenv.get("USERLAYER_APP_JWT_SECRET")));
		System.setProperty("spring.mail.username", Objects.requireNonNull(dotenv.get("SPRING_MAIL_USERNAME")));
		System.setProperty("spring.mail.password", Objects.requireNonNull(dotenv.get("SPRING_MAIL_PASSWORD")));
		System.setProperty("WEB3STORAGE_EMAIL", Objects.requireNonNull(dotenv.get("WEB3STORAGE_EMAIL")));

		SpringApplication.run(UserLayerApplication.class, args);
	}

}
