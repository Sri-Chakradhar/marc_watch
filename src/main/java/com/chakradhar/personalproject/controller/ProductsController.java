package com.chakradhar.personalproject.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.chakradhar.personalproject.model.ProductsModel;
import com.chakradhar.personalproject.service.ProductService;

@RestController
@RequestMapping("/api/public")
public class ProductsController {
    private final ProductService productService;

    public ProductsController(ProductService productService){
        this.productService = productService;
    }

    @GetMapping("/store")
    public List<ProductsModel> GetProducts(){
        return productService.getAllProducts();
    }

}
