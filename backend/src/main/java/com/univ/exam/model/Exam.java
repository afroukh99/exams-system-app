package com.univ.exam.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;


@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name = "Exams")
public class Exam  {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long examID;

    @Column(nullable = false)
    private String name;

    @Column(nullable = true)
    private String description;

    @Column(length = 36, nullable = false , updatable = false)
    private UUID link;


    @ManyToOne
    @JoinColumn(name = "teacher_id")
    private Teacher teacher;


}
