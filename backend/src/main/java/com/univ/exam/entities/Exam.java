package com.univ.exam.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.UUID;


@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@Table(name = "Exams")
public class Exam  {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long examID;

    @Column(nullable = false)
    private String title;

    @Column(nullable = true)
    private String description;

    @Column(length = 36, nullable = false , updatable = false)
    private UUID link;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(mappedBy = "exam" , cascade = CascadeType.ALL , orphanRemoval = true)
    List<Question> questions;

    @OneToMany(mappedBy = "exam" , cascade = CascadeType.ALL , orphanRemoval = true)
    List<Note> notes;

    @PrePersist
    public void setUUID () {
        if (link == null) link = UUID.randomUUID();
    }

}
