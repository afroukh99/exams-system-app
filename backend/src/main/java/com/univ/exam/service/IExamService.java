package com.univ.exam.service;

import com.univ.exam.model.Exam;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Optional;

public interface IExamService {
     Exam saveExam(Exam exam);
     Exam getExamById(Long examId) throws Exception;
     List<Exam> getAllExams();
}
