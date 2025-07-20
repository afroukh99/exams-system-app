package com.univ.exam.repository;

import com.univ.exam.model.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User , String> {
    User findByEmail(String email);
}
