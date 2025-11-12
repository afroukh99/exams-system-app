package com.univ.exam.service;

import com.univ.exam.entities.Exam;

import java.util.List;

public interface IExamService {
     Exam saveExam(Exam exam);
     Exam getExamById(Long examId) throws Exception;
     List<Exam> getAllExams();
}
