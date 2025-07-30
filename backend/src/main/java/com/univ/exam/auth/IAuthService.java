package com.univ.exam.auth;

import com.univ.exam.model.User;

public interface IAuthService {
    User register (String firstName , String lastName , String email ,String password ,String confirmPassword);
    User authenticate (String email , String password);
    void logout ();
}
