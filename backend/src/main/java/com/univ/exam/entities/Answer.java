package com.univ.exam.entities;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor @NoArgsConstructor
@Builder
@Table(name = "answers")
public class Answer {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long answerID;

    @Column(nullable = false)
    private String value;

    @Column
    private boolean correct;

    @ManyToOne
    @JoinColumn(name = "question_id" , nullable = false)
    private Question question;
}
