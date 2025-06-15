import React, { useState } from 'react';

export default function PizzaBuilder({ pizza, onAdd, onCancel }) {
  const [crust, setCrust] = useState(pizza.options.crust[0]);
  const [sauce, setSauce] = useState(pizza.options.sauce[0]);
  const [toppings, setToppings] = useState([]);

  const toggleTopping = t =>
    setToppings(ts => ts.includes(t) ? ts.filter(x => x !== t) : [...ts, t]);

  const handleAdd = () => {
    onAdd({
      ...pizza,
      selected: { crust, sauce, toppings },
      price: pizza.price + toppings.length * 1
    });
  };

  return (
    <div className="builder">
      <h2>Customize Your Pizza</h2>
      <label>
        Crust:
        <select value={crust} onChange={e => setCrust(e.target.value)}>
          {pizza.options.crust.map(c => <option key={c}>{c}</option>)}
        </select>
      </label>
      <label>
        Sauce:
        <select value={sauce} onChange={e => setSauce(e.target.value)}>
          {pizza.options.sauce.map(s => <option key={s}>{s}</option>)}
        </select>
      </label>
      <fieldset>
        <legend>Toppings ($1 each):</legend>
        {pizza.options.toppings.map(t => (
          <label key={t}>
            <input
              type="checkbox"
              checked={toppings.includes(t)}
              onChange={() => toggleTopping(t)}
            /> {t}
          </label>
        ))}
      </fieldset>
      <button onClick={handleAdd}>Add Pizza (${(pizza.price + toppings.length).toFixed(2)})</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
}