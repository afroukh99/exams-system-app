package com.univ.exam.service.implementation;

import com.univ.exam.dto.TeacherDto;
import com.univ.exam.dto.mapper.UserMapper;
import com.univ.exam.model.Exam;
    import com.univ.exam.model.user.Teacher;
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
        public Exam createExam(ExamDto examDto) throws Exception {
            Validator.validateExam(examDto);
            Teacher teacher = this.getTeacherById(examDto.getTeacherId());

            Exam exam = new Exam();
            exam.setName(examDto.getName());
            exam.setDescription(examDto.getDescription());
            exam.setTeacher(teacher);
            exam.setLink(UUID.randomUUID());

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
