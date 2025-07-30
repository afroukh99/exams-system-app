package com.univ.exam.auth;
import com.univ.exam.model.User;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
public class AuthController {

    private final IAuthService authService;

    @PostMapping("/register")
    public ResponseEntity<User> createUser (@RequestBody RegistrationRequest registerReq) {
        User user = authService.register(registerReq.getFirstName()  , registerReq.getLastName(), registerReq.getEmail() , registerReq.getPassword(),registerReq.getConfirmPassword());
        return ResponseEntity.status(201).body(user);
    }

    @PostMapping("/login")
    public ResponseEntity<AuthReq> authenticate (@RequestBody AuthReq authReq) {
        return ResponseEntity.status(200).body(authReq);
    }



}
