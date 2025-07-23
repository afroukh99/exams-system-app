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
    public ResponseEntity<User> createUser (@RequestBody AuthenticationRequest authReq) {
        User user = authService.register(authReq);
        return ResponseEntity.status(201).body(user);
    }



}
