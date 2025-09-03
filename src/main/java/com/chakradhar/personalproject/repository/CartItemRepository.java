package com.chakradhar.personalproject.repository;

import com.chakradhar.personalproject.model.CartModel;
import com.chakradhar.personalproject.model.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CartItemRepository extends JpaRepository<CartModel, Long> {
    List<CartModel> findByUser(UserModel user);
}
