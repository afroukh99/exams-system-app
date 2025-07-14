package com.univ.exam.validation;

import com.univ.exam.dto.ExamDto;
import com.univ.exam.dto.TeacherDto;

public class Validator {

    public static void validateExam(ExamDto examDto) {
        if (examDto == null) {
            throw new IllegalArgumentException("Exam data cannot be null");
        }

        if (examDto.getName() == null || examDto.getName().isBlank()) {
            throw new IllegalArgumentException("Exam name is required");
        }

        if (examDto.getTeacherId() == null) {
            throw new IllegalArgumentException("Teacher ID is required");
        }

        if (examDto.getDescription() != null) {
            throw new IllegalArgumentException("Description is too long (max 500 characters)");
        }
    }


    public static void validateTeacher(TeacherDto teacherDto) {
        if (teacherDto == null) {
            throw new IllegalArgumentException("Exam data cannot be null");
        }

        if (teacherDto.getFirstName() == null || teacherDto.getFirstName().isBlank()) {
            throw new IllegalArgumentException("Teacher first name is required");
        }

        if (teacherDto.getLastName() == null || teacherDto.getLastName().isBlank()) {
            throw new IllegalArgumentException("Teacher last name is required");
        }

        if (teacherDto.getEmail() == null || teacherDto.getEmail().isBlank()) {
            throw new IllegalArgumentException("Email is required");
        }
    }

}
