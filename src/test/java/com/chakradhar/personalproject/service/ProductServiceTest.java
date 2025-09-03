package com.chakradhar.personalproject.service;

import com.chakradhar.personalproject.model.ProductsModel;
import com.chakradhar.personalproject.repository.ProductRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(MockitoExtension.class)
class ProductServiceTest {

    @Mock
    private ProductRepository productRepository;

    @InjectMocks
    private ProductService productService;

    @Test
    void testGetAllProducts() {
        ProductsModel product = new ProductsModel();
        Mockito.when(productRepository.findAll()).thenReturn(List.of(product));
        List<ProductsModel> result = productService.getAllProducts();
        assertEquals(1, result.size());
    }

    @Test
    void testGetProductByName_Found() {
        ProductsModel product = new ProductsModel();
        Mockito.when(productRepository.findByProductName("Watch")).thenReturn(Optional.of(product));

        ProductsModel result = productService.getProductByName("Watch");
        assertEquals(product, result);
    }

    @Test
    void testGetProductByName_NotFound() {
        Mockito.when(productRepository.findByProductName("Unknown")).thenReturn(Optional.empty());

        assertThrows(RuntimeException.class, () -> productService.getProductByName("Unknown"));
    }
}
