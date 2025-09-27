// File: src/components/ProductCart.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Impor Link
import products from '../utils/data';
import './ProductCart.css';

function ProductCart({ cartItems, onUpdateQuantity }) {
  const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price.replace(/[Rp.,]/g, '')) * item.quantity, 0);

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-list">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-info">
                <h4>{item.name}</h4>
                <p>Price: {item.price}</p>
                <div className="quantity-control">
                  <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>-</button>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => onUpdateQuantity(item.id, parseInt(e.target.value))}
                    min="1"
                  />
                  <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total: Rp{totalPrice.toLocaleString('id-ID')}</h3>
          </div>
          {/* Tombol yang akan mengarah ke halaman Checkout */}
          <Link to="/checkout" className="proceed-to-checkout-btn">
            Continue to Payment
          </Link>
        </div>
      )}
    </div>
  );
}

export default ProductCart;