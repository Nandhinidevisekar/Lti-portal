package com.lti.portal.micromovie;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class MicroMovieApplication {

	public static void main(String[] args) {
		SpringApplication.run(MicroMovieApplication.class, args);
	}

}
