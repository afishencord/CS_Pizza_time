import React from 'react';

export default function Cart({ cart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.map((item, i) => (
        <div key={i} className="cart-item">
          <span>{item.name}</span>
          <span>${item.price.toFixed(2)}</span>
        </div>
      ))}
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
}