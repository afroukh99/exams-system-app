package com.univ.exam.auth;


import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class AuthReq {
    private String username;
    private String password;
}
