package com.univ.exam.Controller;

import com.univ.exam.model.Exam;
import com.univ.exam.service.implementation.ExamService;
import com.univ.exam.exceptions.ExamNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/exam")
public class ExamController {


    private final ExamService examService;

    @Autowired
    public ExamController(ExamService examService) {
        this.examService = examService;
    }



    @GetMapping
    public ResponseEntity<List<Exam>> getAllExams () {
        List<Exam> exams = examService.getAllExams();
        return ResponseEntity.ok(exams);
    }


    @GetMapping("/{id}")
    public ResponseEntity<?> getExamById (@PathVariable Long examId) {
        try {
            Exam exam = examService.getExamById(examId);
            return ResponseEntity.ok(exam);
        } catch (ExamNotFoundException e) {
            return  ResponseEntity.status(404).body(e.getMessage());
        }
    }




}
