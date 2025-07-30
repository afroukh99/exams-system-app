package com.univ.exam.Controller;
import com.univ.exam.dto.RoleUser;
import com.univ.exam.model.Role;
import com.univ.exam.model.User;
import com.univ.exam.service.IUserService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/user")
public class UserController {

    IUserService userService;

    @PostMapping("/role")
    public ResponseEntity<Role> createUser (@RequestBody Role role) {
        Role savedRole = userService.addNewRole(role);
        return ResponseEntity.status(201).body(savedRole);
    }

    @PostMapping("/role/{userId}")
    public ResponseEntity<String> addRoleToUser (@RequestBody RoleUser roleUser) {
        userService.addRoleToUser(roleUser.getUsername() , roleUser.getRole());
        return ResponseEntity.status(201).body("Role added to user " + roleUser.getUsername());
    }

    @GetMapping
    public ResponseEntity<List<User>>fetchAllUsers () {
        List<User> users = userService.fetchAllUsers();
        return ResponseEntity.status(200).body(users);
    }

}
