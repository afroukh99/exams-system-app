package com.univ.exam.service.implementation;

import com.univ.exam.model.Exam;
import com.univ.exam.repository.ExamRepository;
import com.univ.exam.service.IExamService;
import com.univ.exam.exceptions.ExamNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExamService implements IExamService {

    private  final ExamRepository examRepository;

    @Autowired
    public ExamService (ExamRepository examRepository) {
        this.examRepository = examRepository;
    }


    @Override
    public Exam saveExam(Exam exam) {
        return examRepository.save(exam);
    }


    @Override
    public Exam getExamById(Long examId) throws ExamNotFoundException {
              return examRepository.findById(examId)
                      .orElseThrow(()-> new ExamNotFoundException("Exam with id : "+ examId + "not found"));
    }

    @Override
    public List<Exam> getAllExams() {
        return examRepository.findAll();
    }


}
