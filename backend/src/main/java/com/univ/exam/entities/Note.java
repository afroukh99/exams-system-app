package com.univ.exam.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class Note {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "student_username" , nullable = false)
    private Student student;

    @ManyToOne
    @JoinColumn(name = "exam_id" , nullable = false)
    private Exam exam;

    @Column
    private Double score;
}
