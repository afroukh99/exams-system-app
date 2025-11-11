package com.univ.exam.auth;

import com.univ.exam.model.AppUser;

public interface IAuthService {
    AppUser register (String firstName , String lastName , String email , String password , String confirmPassword);
    AppUser authenticate (String email , String password);
    void logout ();
}
