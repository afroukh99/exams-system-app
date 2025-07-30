package com.univ.exam;
import org.apache.catalina.core.ApplicationContext;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

import java.util.Arrays;

@SpringBootApplication
public class ExamsSystemApplication  {
	public static void main(String[] args) {
		SpringApplication.run(ExamsSystemApplication.class, args);
	}
}
