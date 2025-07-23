package com.univ.exam.repository;

import com.univ.exam.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role , Long> {
}
