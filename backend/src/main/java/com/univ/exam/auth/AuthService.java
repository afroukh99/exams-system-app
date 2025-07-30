package com.univ.exam.auth;
import com.univ.exam.exceptions.UserAlreadyExisteExeption;
import com.univ.exam.model.User;
import com.univ.exam.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@AllArgsConstructor
@Transactional
public class AuthService implements IAuthService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    public void validateRegistration (String email , String password , String confirmPassword) {
        boolean userExist = userRepository.findByEmail(email) != null;
        if (userExist) throw new UserAlreadyExisteExeption();
        if (!password.equals(confirmPassword)) throw new RuntimeException("Password mismatch!");
    }

    @Override
    public User register(String firstName ,String lastName , String email ,String password ,String confirmPassword ) {
        validateRegistration(email , password , confirmPassword);
        String hashedPassword = bCryptPasswordEncoder.encode(password);
        User user = User.builder()
                .firstName(firstName)
                .lastName(lastName)
                .email(email)
                .password(hashedPassword)
                .build();
        return userRepository.save(user);
    }

    @Override
    public User authenticate(String email, String password) {
        return null;
    }

    @Override
    public void logout() {
    }
}
