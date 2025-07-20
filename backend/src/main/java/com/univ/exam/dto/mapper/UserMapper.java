package com.univ.exam.dto.mapper;

import com.univ.exam.dto.TeacherDto;
import com.univ.exam.model.user.Teacher;

public class UserMapper {
    public static Teacher toTeacher (TeacherDto teacherDto) {
        Teacher teacher = new Teacher();
        teacher.setFirstName(teacherDto.getFirstName());
        teacher.setLastName(teacherDto.getLastName());
        teacher.setEmail(teacherDto.getEmail());
        teacher.setPassword(teacherDto.getPassword());
        return  teacher;
    }
}
