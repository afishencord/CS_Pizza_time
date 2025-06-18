import React, { useState } from 'react';

export default function Checkout({ cart, onCancel }) {
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');
  const [zip, setZip] = useState('');
  const [success, setSuccess] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  const handlePay = () => {
    if (name && cardNumber && cvv && zip) {
      setSuccess(true);
    }
  };

  return (
    <div className="checkout-form" style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>Review Your Order</h2>
      {cart.map((item, i) => (
        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', margin: '4px 0' }}>
          <span>{item.name}</span>
          <span>${item.price.toFixed(2)}</span>
        </div>
      ))}
      <h3>Total: ${total}</h3>

      <h2>Payment Info</h2>
      {success && (
        <div style={{ backgroundColor: 'lightgreen', padding: '8px', marginBottom: '12px', textAlign: 'center' }}>
          Payment successful
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <input
          type="text"
          placeholder="Name on card"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Card Number"
          value={cardNumber}
          onChange={e => setCardNumber(e.target.value)}
        />
        <input
          type="text"
          placeholder="CVV"
          value={cvv}
          onChange={e => setCvv(e.target.value)}
        />
        <input
          type="text"
          placeholder="Billing Zip code"
          value={zip}
          onChange={e => setZip(e.target.value)}
        />
      </div>

      <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'space-between' }}>
        <button
          onClick={handlePay}
          disabled={success}
          style={{
            backgroundColor: 'green',
            color: 'white',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Pay Now
        </button>
        <button
          onClick={onCancel}
          style={{
            backgroundColor: 'white',
            color: 'black',
            border: '1px solid #ccc',
            padding: '8px 16px',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}