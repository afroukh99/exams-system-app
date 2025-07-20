package com.univ.exam.Controller;
import com.univ.exam.dto.TeacherDto;
import com.univ.exam.model.Exam;
import com.univ.exam.model.user.Teacher;
import com.univ.exam.service.ITeacherService;
import com.univ.exam.dto.ExamDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/teacher")
public class TeacherController {
    private final ITeacherService teacherService;

    public TeacherController(ITeacherService teacherService) {
        this.teacherService = teacherService;
    }

    @PostMapping("/exam")
    public ResponseEntity<Exam> createExam (@RequestBody ExamDto exam) {
        Exam savedExam = null;
        try {
            savedExam = teacherService.createExam(exam);
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        return ResponseEntity.ok(savedExam);
    }

    @PostMapping("/register")
    public ResponseEntity<Teacher> register (@RequestBody TeacherDto teacherDto) {
        Teacher saverdTeacher = teacherService.register(teacherDto);
        return ResponseEntity.ok(saverdTeacher);
    }
}
