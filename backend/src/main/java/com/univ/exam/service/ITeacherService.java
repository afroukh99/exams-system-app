package com.univ.exam.service;

import com.univ.exam.dto.TeacherDto;
import com.univ.exam.model.Exam;
import com.univ.exam.model.Teacher;
import com.univ.exam.dto.ExamDto;


public interface ITeacherService {

    Exam createExam(ExamDto examDto) throws Exception;

    Teacher register(TeacherDto teacherDto);

    Teacher getTeacherById(Long id);


}
