package com.chakradhar.personalproject.repository;

import java.util.Optional;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.chakradhar.personalproject.model.ProductsModel;

@Repository
public interface ProductRepository extends JpaRepository<ProductsModel,Long> {
    Optional<ProductsModel> findByProductName(String ProductName);
    Optional<ProductsModel> findByProductPrice(int ProductPrice);
    boolean existsByProductName (String ProductName);
    boolean existsByProductPrice (int ProductPrice);
}
