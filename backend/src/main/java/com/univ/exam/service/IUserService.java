package com.univ.exam.service;
import com.univ.exam.exceptions.UserAlreadyExisteExeption;
import com.univ.exam.model.Role;
import com.univ.exam.model.User;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IUserService {
    Role addNewRole(Role role);
    void addRoleToUser (String userID , Role role);
    void removeRoleFromUser(String userID , Role role);
    List<User> fetchAllUsers();
}
