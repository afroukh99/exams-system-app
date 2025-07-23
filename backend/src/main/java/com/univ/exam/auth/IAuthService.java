package com.univ.exam.auth;

import com.univ.exam.model.User;

public interface IAuthService {
    User register (AuthenticationRequest authReq);
    User authenticate (String email , String password);
    void logout ();
}
