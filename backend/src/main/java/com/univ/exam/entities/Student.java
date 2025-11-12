package com.univ.exam.entities;

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
@Table(name = "students")
public class Student {

    @Id
    private String username;

    @Column(unique = true , nullable = false)
    private String email;

    @OneToMany(mappedBy = "student" , cascade = CascadeType.ALL , orphanRemoval = true)
    List<Note> notes;
}
