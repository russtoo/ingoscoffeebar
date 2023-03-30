import React, { useState } from 'react';

// Product component
function Product({ product }) {
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    // add product to cart with the current quantity
    addToCart(product, quantity);
  }

  return (
    <li>
      <h3>{product.name}</h3>
      <img src={product.image} alt={product.name} />
      <p>{product.price}</p>
      <label>
        Quantity:
        <input
          type="number"
          value={quantity}
          onChange={e => setQuantity(e.target.value)}
        />
      </label>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </li>
  );
}

// ShoppingCart component
function ShoppingCart({ cart }) {
  return (
    <div id="shopping-cart">
      <h2>Shopping Cart</h2>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cart.items.map((item, index) => (
            <tr key={index}>
              <td>{item.product.name}</td>
              <td>{item.quantity}</td>
              <td>{item.product.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Total: {cart.total}</p>
      <button>Checkout</button>
    </div>
  );
}

// ProductListing component
function ProductListing({ products }) {
  return (
    <div id="product-listing">
      <h2>Product Listing</h2>
      <ul>
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </ul>
    </div>
  );
}
