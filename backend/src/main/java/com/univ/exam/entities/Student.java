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
public class Student {

    @Id
    private String username;

    @Column
    private String email;

    @OneToMany(mappedBy = "student" , cascade = CascadeType.ALL , orphanRemoval = true)
    List<Note> notes;
}
