package com.univ.exam.service;

import com.univ.exam.exceptions.UserAlreadyExisteExeption;
import com.univ.exam.model.user.Role;
import com.univ.exam.model.user.User;
import org.springframework.stereotype.Repository;

@Repository
public interface UserService {
    User addNewUser (String firstName, String lastName , String email , String password , String confirmPassword) throws UserAlreadyExisteExeption;
    Role addNewRole(Role role);
    String addRoleToUser (String userID , Role role);
    String removeRoleFromUser(String userID , Role role);
}
