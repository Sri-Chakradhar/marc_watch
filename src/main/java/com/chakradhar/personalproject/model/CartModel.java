package com.chakradhar.personalproject.model;

import jakarta.persistence.*;

@Entity
@Table(name = "cart_items")
public class CartModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cartId;

    // One user can have many cart items
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private UserModel user;

    // Each cart item references a product
    @ManyToOne
    @JoinColumn(name = "product_id", nullable = false)
    private ProductsModel product;

    @Column(nullable = false)
    private int quantity;

    // Default constructor required by JPA
    public CartModel() {}

    // Parameterized constructor
    public CartModel(UserModel user, ProductsModel product, int quantity) {
        this.user = user;
        this.product = product;
        this.quantity = quantity;
    }

    // Getters and Setters
    public Long getCartId() {
        return cartId;
    }

    public void setCartId(Long cartId) {
        this.cartId = cartId;
    }

    public UserModel getUser() {
        return user;
    }

    public void setUser(UserModel user) {
        this.user = user;
    }

    public ProductsModel getProduct() {
        return product;
    }

    public void setProduct(ProductsModel product) {
        this.product = product;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}
