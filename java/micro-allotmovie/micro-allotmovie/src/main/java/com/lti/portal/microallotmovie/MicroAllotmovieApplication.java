package com.lti.portal.microallotmovie;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

@EnableEurekaClient
@SpringBootApplication
@EnableFeignClients("com.lti.portal.microallotmovie.feignproxy")
public class MicroAllotmovieApplication {

	public static void main(String[] args) {
		SpringApplication.run(MicroAllotmovieApplication.class, args);
	}

	/*
	 * @Bean public RestTemplate restTemplate() { return new RestTemplate(); }
	 */
}
