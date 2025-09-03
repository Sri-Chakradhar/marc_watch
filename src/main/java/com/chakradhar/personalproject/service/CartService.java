package com.chakradhar.personalproject.service;

import com.chakradhar.personalproject.security.JwtUtil;

import java.util.List;
import org.springframework.stereotype.Service;
import com.chakradhar.personalproject.model.CartModel;
import com.chakradhar.personalproject.model.ProductsModel;
import com.chakradhar.personalproject.model.UserModel;
import com.chakradhar.personalproject.repository.CartItemRepository;
import com.chakradhar.personalproject.repository.ProductRepository;
import com.chakradhar.personalproject.repository.UserRepository;

@Service
public class CartService {

    private final CartItemRepository cartItemRepository;
    private final ProductRepository productRepository;
    private final UserRepository userRepository;
    private final JwtUtil jwtUtil;

    public CartService(CartItemRepository cartItemRepository,
                       ProductRepository productRepository,
                       UserRepository userRepository,
                       JwtUtil jwtUtil) {
        this.cartItemRepository = cartItemRepository;
        this.productRepository = productRepository;
        this.userRepository = userRepository;
        this.jwtUtil = jwtUtil;
    }

    public CartModel addToCart(String authHeader, Long productId, int quantity) {
        UserModel user = getUserFromToken(authHeader);
        ProductsModel product = productRepository.findById(productId)
                .orElseThrow(() -> new RuntimeException("Product not found"));

        CartModel cartItem = new CartModel();
        cartItem.setUser(user);
        cartItem.setProduct(product);
        cartItem.setQuantity(quantity);

        return cartItemRepository.save(cartItem);
    }

    public List<CartModel> getUserCart(String authHeader) {
        UserModel user = getUserFromToken(authHeader);
        return cartItemRepository.findByUser(user);
    }

    public void removeFromCart(Long cartItemId, String authHeader) {
        CartModel cartItem = cartItemRepository.findById(cartItemId)
                .orElseThrow(() -> new RuntimeException("Cart item not found"));

        UserModel user = getUserFromToken(authHeader);
        if (!cartItem.getUser().getId().equals(user.getId())) {
            throw new RuntimeException("Unauthorized");
        }
        cartItemRepository.delete(cartItem);
    }

    public CartModel updateQuantity(Long cartItemId, int quantity, String authHeader) {
        CartModel cartItem = cartItemRepository.findById(cartItemId)
                .orElseThrow(() -> new RuntimeException("Cart item not found"));

        UserModel user = getUserFromToken(authHeader);
        if (!cartItem.getUser().getId().equals(user.getId())) {
            throw new RuntimeException("Unauthorized");
        }

        cartItem.setQuantity(quantity);
        return cartItemRepository.save(cartItem);
    }

    private UserModel getUserFromToken(String authHeader) {
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            throw new RuntimeException("Invalid Authorization header");
        }
        String token = authHeader.substring(7);
        if (!jwtUtil.validateToken(token)) {
            throw new RuntimeException("Invalid or expired token");
        }
        Long userId = jwtUtil.extractUserId(token);
        return userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }
}
