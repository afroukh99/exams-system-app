package com.univ.exam.service.implementation;
import com.univ.exam.exceptions.UserAlreadyExisteExeption;
import com.univ.exam.model.Role;
import com.univ.exam.model.User;
import com.univ.exam.repository.RoleRepository;
import com.univ.exam.repository.UserRepository;
import com.univ.exam.service.IUserService;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.List;

import org.springframework.transaction.annotation.Transactional;


@Service
@AllArgsConstructor
@Transactional
public class UserServiceImpl implements IUserService {

    UserRepository userRepository;
    RoleRepository roleRepository;


    @Override
    public Role addNewRole(Role role) {
        return roleRepository.save(role);
    }

    @Override
    public void addRoleToUser(String userID, Role role) {
        User user = userRepository.findById(userID)
                .orElseThrow(() -> new RuntimeException("User doesn't exists !"));
        Role userRole = roleRepository.findById(role.getId())
                .orElseThrow(()-> new RuntimeException("Role doesn't exists !"));

        if (!user.getRoles().contains(userRole)) {
            user.getRoles().add(userRole);
        }
    }

    @Override
    public void removeRoleFromUser(String userID, Role role) {

    }

    @Override
    public List<User> fetchAllUsers() {
        return List.of();
    }
}
