import React, { useState } from 'react';
import axios from 'axios';

export default function Checkout({ cart }) {
  const [status, setStatus] = useState(null);
  const handlePay = () => {
    axios.post('http://localhost:5000/api/orders', {
      cart,
      payment: { cardNumber: '**** **** **** 1234' }
    }).then(res => setStatus(res.data.success ? 'Paid' : 'Error'));
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <button onClick={handlePay}>Mock Pay</button>
      {status && <p>{status}</p>}
    </div>
  );
}