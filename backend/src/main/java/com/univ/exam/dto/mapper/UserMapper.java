package com.univ.exam.dto.mapper;

import com.univ.exam.dto.TeacherDto;
import com.univ.exam.dto.UserDto;
import com.univ.exam.model.Teacher;
import com.univ.exam.model.User;

public class UserMapper {

    public static Teacher toTeacher (TeacherDto teacherDto) {
        Teacher teacher = new Teacher();
        teacher.setFirstName(teacherDto.getFirstName());
        teacher.setLastName(teacherDto.getLastName());
        teacher.setEmail(teacherDto.getEmail());
        teacher.setPassword(teacherDto.getPassword());
        return  teacher;
    }

    public static UserDto toUserDto (User user) {
        UserDto userDto = new UserDto();
        userDto.setFirstName(user.getFirstName());
        userDto.setLastName(user.getLastName());
        userDto.setEmail(user.getEmail());
        userDto.setRoles(user.getRoles());
        return  userDto;
    }

}

