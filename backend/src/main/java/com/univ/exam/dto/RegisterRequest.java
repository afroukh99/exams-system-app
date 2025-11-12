package com.univ.exam.dto;

import com.univ.exam.enums.Role;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@AllArgsConstructor
@Setter
@Getter
@NoArgsConstructor
public class RegisterRequest {
    @NotBlank(message = "First name is required")
    private String firstName;

    @NotBlank(message = "Last name is required")
    private String lastName;

    @NotBlank(message = "Username is required")
    @Size(min = 3 , max = 15 , message = "Username must between 3 and 15 characters")
    private String username;

    @NotBlank(message = "Email is required")
    @Email(message = "Invalidate email format")
    private String email;

    @Size(min = 8 , message = "Password must be at least 8 characters")
    private String password;

    @NotBlank
    private String confirmPassword;
}
