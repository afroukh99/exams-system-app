package com.univ.exam.dto;

import com.univ.exam.model.Role;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@AllArgsConstructor
@Setter
@Getter
@NoArgsConstructor
public class UserDto {
    private String firstName;
    private String lastName;
    private String email;
    private List<Role> roles;
}
