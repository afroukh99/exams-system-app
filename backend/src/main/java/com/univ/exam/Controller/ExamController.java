package com.univ.exam.Controller;

import com.univ.exam.entities.Exam;
import com.univ.exam.service.implementation.ExamService;
import com.univ.exam.exceptions.ExamNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
public class ExamController {

    private final ExamService examService;

    @GetMapping("/exams")
    public ResponseEntity<String> getAllExams () {
        return ResponseEntity.ok("Hello");
    }


    @GetMapping("/exam/{id}")
    public ResponseEntity<?> getExamById (@PathVariable Long examId) {
        try {
            Exam exam = examService.getExamById(examId);
            return ResponseEntity.ok(exam);
        } catch (ExamNotFoundException e) {
            return  ResponseEntity.status(404).body(e.getMessage());
        }
    }

}
