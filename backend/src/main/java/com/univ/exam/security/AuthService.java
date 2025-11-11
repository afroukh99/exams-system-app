package com.univ.exam.auth;
import com.univ.exam.exceptions.UserAlreadyExisteExeption;
import com.univ.exam.model.AppUser;
import com.univ.exam.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@RequiredArgsConstructor
@Transactional
public class AuthService implements IAuthService {

    private final UserRepository userRepository;

    public void validateRegistration (String email , String password , String confirmPassword) {
        boolean userExist = userRepository.findByEmail(email).isPresent();
        if (userExist) throw new UserAlreadyExisteExeption();
        if (!password.equals(confirmPassword)) throw new RuntimeException("Password mismatch!");
    }

    @Override
    public AppUser register(String firstName , String lastName , String email , String password , String confirmPassword ) {
        validateRegistration(email , password , confirmPassword);
        String hashedPassword = "";
        AppUser user = AppUser.builder()
                .firstName(firstName)
                .lastName(lastName)
                .email(email)
                .password(hashedPassword)
                .build();
        return userRepository.save(user);
    }

    @Override
    public AppUser authenticate(String email, String password) {
        return null;
    }

    @Override
    public void logout() {

    }
}
