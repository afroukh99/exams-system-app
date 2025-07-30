package com.univ.exam.repository;

import com.univ.exam.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role , Long> {

    Optional<Role> findByRole(String role);
}
