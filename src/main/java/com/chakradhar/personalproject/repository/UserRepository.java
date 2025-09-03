package com.chakradhar.personalproject.repository;

import java.util.Optional;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.chakradhar.personalproject.model.UserModel;

@Repository
public interface UserRepository extends JpaRepository<UserModel, Long> {
    Optional<UserModel> findByUsername(String username);
    Optional<UserModel> findByEmail(String email);
    Optional<UserModel> findById(int Id);
    Boolean existsByUsername(String username);
    Boolean existsByEmail(String email);
}
