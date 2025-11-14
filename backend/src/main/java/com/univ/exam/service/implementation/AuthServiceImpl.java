package com.univ.exam.service.implementation;
import com.univ.exam.dto.RegisterRequest;
import com.univ.exam.entities.User;
import com.univ.exam.enums.Role;
import com.univ.exam.exceptions.UserAlreadyExisteExeption;
import com.univ.exam.repository.UserRepository;
import com.univ.exam.service.IAuthService;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


@Service
@AllArgsConstructor
public class AuthServiceImpl implements IAuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Transactional
    @Override
    public void register(RegisterRequest request) {
        if (userRepository.existsByUsername(request.getUsername())) {
            throw new UserAlreadyExisteExeption();
        }
        String hashedPassword = passwordEncoder.encode(request.getPassword());
        User user = User.builder()
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .username(request.getUsername())
                .email(request.getEmail())
                .password(hashedPassword)
                .role(Role.TEACHER)
                .build();
        userRepository.save(user);
    }

}
