package com.univ.exam.Controller;


import com.univ.exam.dto.UserDto;
import com.univ.exam.model.user.Role;
import com.univ.exam.model.user.User;
import com.univ.exam.service.implementation.UserServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
public class AuthController {

    private final UserServiceImpl userService;

    @PostMapping("/register")
    public ResponseEntity<User> createUser (@RequestBody UserDto userDto) {
        User user = userService.addNewUser(userDto.getFirstName(), userDto.getLastName(),userDto.getEmail(), userDto.getPassword(), userDto.getConfirmPassword());
        return ResponseEntity.status(201).body(user);
    }

    @PostMapping("/role")
    public ResponseEntity<Role> createUser (@RequestBody Role role) {
        Role savedRole = userService.addNewRole(role);
        return ResponseEntity.status(201).body(savedRole);
    }




}
