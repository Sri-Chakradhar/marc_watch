package com.chakradhar.personalproject.controller;

import com.chakradhar.personalproject.model.CartModel;
import com.chakradhar.personalproject.service.CartService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/public/cart")
public class CartController {

    private final CartService cartService;

    public CartController(CartService cartService) {
        this.cartService = cartService;
    }

    @PostMapping("/add/{productId}")
    public ResponseEntity<CartModel> addToCart(
            @RequestHeader("Authorization") String authHeader,
            @PathVariable Long productId,
            @RequestParam(defaultValue = "1") int quantity) {
        return ResponseEntity.ok(cartService.addToCart(authHeader, productId, quantity));
    }

    @GetMapping
    public ResponseEntity<List<CartModel>> getCart(@RequestHeader("Authorization") String authHeader) {
        return ResponseEntity.ok(cartService.getUserCart(authHeader));
    }

    @PutMapping("/update/{cartItemId}")
    public ResponseEntity<CartModel> updateQuantity(
            @RequestHeader("Authorization") String authHeader,
            @PathVariable Long cartItemId,
            @RequestParam int quantity) {
        return ResponseEntity.ok(cartService.updateQuantity(cartItemId, quantity, authHeader));
    }

    @DeleteMapping("/remove/{cartItemId}")
    public ResponseEntity<Void> removeFromCart(
            @RequestHeader("Authorization") String authHeader,
            @PathVariable Long cartItemId) {
        cartService.removeFromCart(cartItemId, authHeader);
        return ResponseEntity.noContent().build();
    }
}
