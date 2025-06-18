import React from 'react';

export default function Cart({ cart, onRemove }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.length === 0 && <p>Your cart is empty.</p>}
      {cart.map((item, i) => (
        <div key={i} className="cart-item" style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
          <span style={{ flex: 1 }}>{item.name}</span>
          <span style={{ margin: '0 12px' }}>${item.price.toFixed(2)}</span>
          <button
            onClick={() => onRemove(i)}
            style={{
              backgroundColor: 'red',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              padding: '4px 8px',
              cursor: 'pointer'
            }}
          >
            Remove
          </button>
        </div>
      ))}
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
}