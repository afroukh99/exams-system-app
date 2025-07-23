package com.univ.exam.Controller;


import com.univ.exam.model.Role;
import com.univ.exam.service.IUserService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
public class UserController {

    IUserService IUserService;

    @PostMapping("/role")
    public ResponseEntity<Role> createUser (@RequestBody Role role) {
        Role savedRole = IUserService.addNewRole(role);
        return ResponseEntity.status(201).body(savedRole);
    }

    @PostMapping("/role/{userId}")
    public ResponseEntity<String> addRoleToUser (@RequestBody Role role , @PathVariable String userId) {
        IUserService.addRoleToUser(userId , role);
        return ResponseEntity.status(201).body("Role added to user " + userId);
    }
}
