document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.getElementById('products-container');
    const cartItemsContainer = document.getElementById('cart-items');

    fetch('/api/products') // Fetch products (create this route if needed)
        .then(res => res.json())
        .then(products => {
            products.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.innerHTML = `
                    <h3>${product.name}</h3>
                    <p>Price: $${product.price}</p>
                    <button class="add-to-cart" data-product-id="${product._id}">Add to Cart</button>
                `;
                productsContainer.appendChild(productDiv);

                const addToCartButton = productDiv.querySelector('.add-to-cart');
                addToCartButton.addEventListener('click', () => {
                  addToCart(product._id);
                });
            });
        });

    function addToCart(productId) {
        fetch('/api/cart', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ productId })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data.message);
            updateCartDisplay();
        });
    }

    function updateCartDisplay() {
      fetch('/api/cart')
        .then(res => res.json())
        .then(cart => {
          cartItemsContainer.innerHTML = ''; // Clear previous items

          if (cart && cart.items) {
            cart.items.forEach(item => {
              const cartItemDiv = document.createElement('div');
              cartItemDiv.innerHTML = `<p>${item.product.name} x ${item.quantity}</p>`;
              cartItemsContainer.appendChild(cartItemDiv);
            });
          } else {
            cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
          }
        });
    }

    updateCartDisplay(); // Initial cart display
});