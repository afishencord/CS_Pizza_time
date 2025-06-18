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

  useEffect(() => {
    axios.get('http://localhost:5000/api/menu')
         .then(res => setMenu(res.data));
  }, []);

  const addToCart = item => setCart(prev => [...prev, item]);
  const removeFromCart = index => setCart(prev => prev.filter((_, i) => i !== index));

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
      <Checkout cart={cart} />
    </div>
  );
}
export default App;