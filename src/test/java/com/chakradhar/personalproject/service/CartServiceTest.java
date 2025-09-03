package com.chakradhar.personalproject.service;

import com.chakradhar.personalproject.model.CartModel;
import com.chakradhar.personalproject.model.ProductsModel;
import com.chakradhar.personalproject.model.UserModel;
import com.chakradhar.personalproject.repository.CartItemRepository;
import com.chakradhar.personalproject.repository.ProductRepository;
import com.chakradhar.personalproject.repository.UserRepository;
import com.chakradhar.personalproject.security.JwtUtil;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(MockitoExtension.class)
class CartServiceTest {

    @Mock
    private CartItemRepository cartItemRepository;
    @Mock
    private ProductRepository productRepository;
    @Mock
    private UserRepository userRepository;
    @Mock
    private JwtUtil jwtUtil;

    @InjectMocks
    private CartService cartService;

    @Test
    void testAddToCart_Success() {
        String token = "Bearer testtoken";
        UserModel user = new UserModel();
        user.setId(1L);
        ProductsModel product = new ProductsModel();
        product.setId(100L);
        CartModel cartItem = new CartModel();

        Mockito.when(jwtUtil.validateToken("testtoken")).thenReturn(true);
        Mockito.when(jwtUtil.extractUserId("testtoken")).thenReturn(1L);
        Mockito.when(userRepository.findById(1L)).thenReturn(Optional.of(user));
        Mockito.when(productRepository.findById(100L)).thenReturn(Optional.of(product));
        Mockito.when(cartItemRepository.save(Mockito.any())).thenReturn(cartItem);

        CartModel result = cartService.addToCart(token, 100L, 2);
        assertNotNull(result);
        Mockito.verify(cartItemRepository).save(Mockito.any());
    }

    @Test
    void testAddToCart_InvalidToken() {
        String token = "Bearer invalid";
        Mockito.when(jwtUtil.validateToken("invalid")).thenReturn(false);

        assertThrows(RuntimeException.class, () -> cartService.addToCart(token, 1L, 1));
    }
}
