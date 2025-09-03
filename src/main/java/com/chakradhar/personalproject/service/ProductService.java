package com.chakradhar.personalproject.service;

import com.chakradhar.personalproject.model.ProductsModel;
import com.chakradhar.personalproject.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<ProductsModel> getAllProducts() {
        return productRepository.findAll();
    }

    public ProductsModel getProductByName(String productName) {
        return productRepository.findByProductName(productName)
                .orElseThrow(() -> new RuntimeException("Product not found: " + productName));
    }

    public ProductsModel saveProduct(ProductsModel product) {
        return productRepository.save(product);
    }

    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }
}
