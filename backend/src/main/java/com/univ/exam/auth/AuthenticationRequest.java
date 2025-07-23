package com.univ.exam.auth;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@Data
@NoArgsConstructor
public class AuthenticationRequest {
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String confirmPassword;
}
