package com.univ.exam.entities;


import com.univ.exam.enums.QuestionType;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor @NoArgsConstructor
@Builder
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

}
