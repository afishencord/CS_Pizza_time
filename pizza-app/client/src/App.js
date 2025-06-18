import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Menu from './components/Menu';
import PizzaBuilder from './components/PizzaBuilder';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function App() {
  const [menu, setMenu] = useState([]);
  const [cart, setCart] = useState([]);
  const [customizing, setCustomizing] = useState(null);
  const [checkingOut, setCheckingOut] = useState(false);

  useEffect(() => {
    axios.get('/api/menu')
         .then(res => setMenu(res.data))
         .catch(console.error);
  }, []);

  const addToCart = item => setCart(prev => [...prev, item]);
  const removeFromCart = idx => setCart(prev => prev.filter((_, i) => i !== idx));

  if (checkingOut) {
    return (
      <Checkout
        cart={cart}
        onCancel={() => setCheckingOut(false)}
      />
    );
  }

  return (
    <div className="container">
      <h1>PizzaTime</h1>

      {!customizing && (
        <Menu
          items={menu}
          onAdd={addToCart}
          onCustomize={pizza => setCustomizing(pizza)}
        />
      )}

      {customizing && (
        <PizzaBuilder
          pizza={customizing}
          onAdd={item => { addToCart(item); setCustomizing(null); }}
          onCancel={() => setCustomizing(null)}
        />
      )}

      <Cart cart={cart} onRemove={removeFromCart} />

      {cart.length > 0 && (
        <button
          onClick={() => setCheckingOut(true)}
          style={{
            backgroundColor: 'green',
            color: 'white',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '4px',
            cursor: 'pointer',
            marginTop: '12px'
          }}
        >
          Checkout
        </button>
      )}
    </div>
  );
}

export default App;