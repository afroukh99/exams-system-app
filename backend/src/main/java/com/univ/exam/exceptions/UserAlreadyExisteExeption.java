package com.univ.exam.exceptions;

public class UserAlreadyExisteExeption extends RuntimeException {
    public UserAlreadyExisteExeption() {
        super("User already exists!");
    }
}
