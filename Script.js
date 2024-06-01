"use strict";
var registerForm = document.getElementById('registerForm');
var registerButton = document.getElementById('register');
registerForm.addEventListener('submit', function (event) {
    event.preventDefault();
    registerForm.submit();
});
var loginButton = document.getElementById('login');
loginButton.addEventListener('click', function () {
    alert('Login button clicked!');
});
var ProductManager = /** @class */ (function () {
    function ProductManager() {
        this.products = [];
    }
    // Getters for products and cart
    ProductManager.prototype.getProducts = function () {
        return this.products;
    };
    // Function to add product to cart
    ProductManager.prototype.addToCart = function (productId) {
        var product = this.products.find(function (p) { return p.id === productId; });
        if (!product)
            return;
        if (quantity > product.quantity) {
            alert("Insufficient stock!");
            return;
        }
        var existingCartItem = this.cart.find(function (item) { return item.id === product.id.toString(); });
        if (existingCartItem) {
            existingCartItem.quantity += quantity;
        }
        else {
            this.cart.push(new CartItem(product.id.toString(), product.title, product.image, quantity, product.price));
        }
        this.updateCartDisplay();
    };
    // Function to update cart quantity
    ProductManager.prototype.updateCartQuantity = function (productId, newQuantity) {
        var cartItem = this.cart.find(function (item) { return item.id === productId; });
        if (!cartItem)
            return;
        if (newQuantity <= 0) {
            this.removeFromCart(productId);
        }
        else {
            cartItem.quantity = newQuantity;
        }
        this.updateCartDisplay();
    };
    // Function to remove product from cart
    ProductManager.prototype.removeFromCart = function (productId) {
        var index = this.cart.findIndex(function (item) { return item.id === productId; });
        if (index !== -1) {
            this.cart.splice(index, 1);
        }
        this.updateCartDisplay();
    };
    // Function to update cart display
    ProductManager.prototype.updateCartDisplay = function () {
    };
    // Function to display products
    ProductManager.prototype.displayProducts = function () {
    };
    // Add a product to the product array
    ProductManager.prototype.addProduct = function (product) {
        this.products.push(product);
        this.displayProducts(); // Update the product display after adding
    };
    // Initialize the application
    ProductManager.prototype.init = function (products) {
        this.products = products;
        this.displayProducts();
    };
    return ProductManager;
}());
