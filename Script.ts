const registerForm = document.getElementById('registerForm') as HTMLFormElement;
const registerButton = document.getElementById('register') as HTMLButtonElement;

registerForm.addEventListener('submit', (event: Event) => {
  event.preventDefault();

  registerForm.submit();
});


const loginButton = document.getElementById('login') as HTMLButtonElement;

loginButton.addEventListener('click', () => {

  alert('Login button clicked!');
});


interface Product {
    id: number;
    title: string;
    image: string;
    price: number;
    quantity: number;
  }
  
  class ProductManager {
    private products: Product[] = [];

  
    // Getters for products and cart
    public getProducts(): Product[] {
      return this.products;
    }
  
    // Function to add product to cart
    public addToCart(productId: number): void {
      const product = this.products.find(p => p.id === productId);
      if (!product) return;
  
      if (quantity > product.quantity) {
        alert("Insufficient stock!");
        return;
      }
  
      const existingCartItem = this.cart.find(item => item.id === product.id.toString());
      if (existingCartItem) {
        existingCartItem.quantity += quantity;
      } else {
        this.cart.push(
          new CartItem(
            product.id.toString(),
            product.title,
            product.image,
            quantity,
            product.price
          )
        );
      }
      this.updateCartDisplay();
    }
  
    // Function to update cart quantity
    public updateCartQuantity(productId: string, newQuantity: number): void {
      const cartItem = this.cart.find(item => item.id === productId);
      if (!cartItem) return;
  
      if (newQuantity <= 0) {
        this.removeFromCart(productId);
      } else {
        cartItem.quantity = newQuantity;
      }
      this.updateCartDisplay();
    }
  
    // Function to remove product from cart
    public removeFromCart(productId: string): void {
      const index = this.cart.findIndex(item => item.id === productId);
      if (index !== -1) {
        this.cart.splice(index, 1);
      }
      this.updateCartDisplay();
    }
  
    // Function to update cart display
    private updateCartDisplay(): void {

    }
  
    // Function to display products
    public displayProducts(): void {
    
    }
  
    // Add a product to the product array
    public addProduct(product: Product): void {
      this.products.push(product);
      this.displayProducts(); // Update the product display after adding
    }
  
    // Initialize the application
    public init(products: Product[]): void {
      this.products = products;
      this.displayProducts();
    }
  }