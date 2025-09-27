// File: src/components/Checkout.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';

// Komponen ini sekarang menerima onCheckoutItems
function Checkout({ cartItems, onCheckoutItems }) {
  const navigate = useNavigate();
  const [isPurchased, setIsPurchased] = useState(false);
  const [checkedItems, setCheckedItems] = useState([]);

  // Inisialisasi checkedItems saat komponen pertama kali dimuat
  useEffect(() => {
    setCheckedItems(cartItems.map(item => ({ ...item, isChecked: true })));
  }, [cartItems]);

  const handleCheckboxChange = (productId) => {
    const updatedCheckedItems = checkedItems.map(item =>
      item.id === productId ? { ...item, isChecked: !item.isChecked } : item
    );
    setCheckedItems(updatedCheckedItems);
  };

  const totalPrice = checkedItems.reduce((total, item) => {
    return item.isChecked ? total + parseFloat(item.price.replace(/[Rp.]/g, '')) * item.quantity : total;
  }, 0);

  const handleCheckout = () => {
    const itemsToBuy = checkedItems.filter(item => item.isChecked);
    if (itemsToBuy.length > 0) {
      onCheckoutItems(itemsToBuy);
      setIsPurchased(true);
    } else {
      alert("Pilih setidaknya satu item untuk checkout.");
    }
  };

  if (isPurchased) {
    return (
      <div className="checkout-container">
        <h1 className="success-message">Order Received!</h1>
        <p className="success-subtext">Thank you for shopping.</p>
        <button onClick={() => navigate('/')} className="back-to-dashboard-btn">
          Return to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      {checkedItems.length === 0 ? (
        <p>There are no items to checkout.</p>
      ) : (
        <div className="checkout-summary">
          <h2>Order Summary</h2>
          {checkedItems.map((item) => (
            <div key={item.id} className="checkout-item">
              <input
                type="checkbox"
                checked={item.isChecked}
                onChange={() => handleCheckboxChange(item.id)}
              />
              <img src={item.image} alt={item.name} className="checkout-item-image" />
              <div className="checkout-item-info">
                <h4>{item.name}</h4>
                <p>Price: {item.price} x {item.quantity}</p>
              </div>
            </div>
          ))}
          <div className="checkout-total">
            <h3>Total: Rp{totalPrice.toLocaleString('id-ID')}</h3>
          </div>
          <button onClick={handleCheckout} className="checkout-btn">
            Complete Payment
          </button>
        </div>
      )}
    </div>
  );
}

export default Checkout;