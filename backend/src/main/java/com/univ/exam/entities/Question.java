package com.univ.exam.entities;


import com.univ.exam.enums.QuestionType;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data
@AllArgsConstructor @NoArgsConstructor
@Builder
@Table(name = "questions")
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    @Column
    private String text;

    @Enumerated(EnumType.STRING)
    private QuestionType type;

    @Column
    private double duration;

    @Column
    private String imageUrl;

    @ManyToOne
    @JoinColumn(name = "exam_id" , nullable = false)
    private  Exam exam;

    @OneToMany(mappedBy = "question" , cascade = CascadeType.ALL , orphanRemoval = true)
    List<Answer> answers;

}
