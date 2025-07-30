package com.univ.exam.service.implementation;

import com.univ.exam.dto.TeacherDto;
import com.univ.exam.dto.mapper.UserMapper;
import com.univ.exam.model.Exam;
    import com.univ.exam.model.Teacher;
    import com.univ.exam.repository.TeacherRepository;
    import com.univ.exam.service.IExamService;
    import com.univ.exam.service.ITeacherService;
    import com.univ.exam.validation.Validator;
    import com.univ.exam.dto.ExamDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.UUID;



    @Service
    public class TeacherService implements ITeacherService {

        private final TeacherRepository teacherRepository;
        private final IExamService examService;


        @Autowired
        public TeacherService(
                TeacherRepository teacherRepository ,
                IExamService examService
        )
        {
            this.teacherRepository = teacherRepository;
            this.examService = examService;
        }

        @Override
        public Exam createExam(String name , String description , Long teacherId) throws Exception {
            Validator.validateExam(name , description , teacherId);
            Teacher teacher = this.getTeacherById(teacherId);
            Exam exam = Exam.builder()
                    .name(name)
                    .description(description)
                    .teacher(teacher)
                    .link(UUID.randomUUID())
                    .build();
            return  examService.saveExam(exam);
        }




        @Override
        public Teacher register(TeacherDto teacherDto) {
            Validator.validateTeacher(teacherDto);
            Teacher teacher = UserMapper.toTeacher(teacherDto);
            return teacherRepository.save(teacher);
        }


        @Override
        public Teacher getTeacherById(Long id) {
            return teacherRepository.findById(id)
                    .orElseThrow(() -> new RuntimeException("Teacher with id : " + id + "doesn't exist!"));
        }


    }
