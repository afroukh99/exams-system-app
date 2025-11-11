package com.univ.exam.auth;
import com.univ.exam.model.AppUser;
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
    public ResponseEntity<AppUser> createUser (@RequestBody RegistrationRequest registerReq) {
        AppUser user = authService.register(registerReq.getFirstName()  , registerReq.getLastName(), registerReq.getEmail() , registerReq.getPassword(),registerReq.getConfirmPassword());
        return ResponseEntity.status(201).body(user);
    }
}
