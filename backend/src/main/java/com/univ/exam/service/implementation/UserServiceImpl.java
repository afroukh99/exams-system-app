package com.univ.exam.service.implementation;
import com.univ.exam.exceptions.UserAlreadyExisteExeption;
import com.univ.exam.model.user.Role;
import com.univ.exam.model.user.User;
import com.univ.exam.repository.RoleRepository;
import com.univ.exam.repository.UserRepository;
import com.univ.exam.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {

    UserRepository userRepository;
    RoleRepository roleRepository;
    BCryptPasswordEncoder bCryptPasswordEncoder;

    @Override
    public User addNewUser(String firstName, String lastName, String email, String password, String confirmPassword) {
        boolean userExist = userRepository.findByEmail(email) != null ;
        if (userExist) throw new UserAlreadyExisteExeption();
        if (!password.equals(confirmPassword)) throw new RuntimeException("Password mismatch!");
        String hashedPassword = bCryptPasswordEncoder.encode(password);
        User user = User.builder()
                .userID()
                .firstName(firstName)
                .lastName(lastName)
                .email(email)
                .password(hashedPassword)
                .build();
        return userRepository.save(user);
    }

    @Override
    public Role addNewRole(Role role) {
       return roleRepository.save(role);
    }

    @Override
    public String addRoleToUser(String userID, Role role) {
        return "";
    }

    @Override
    public String removeRoleFromUser(String userID, Role role) {
        return "";
    }
}
