import React from 'react';

export default function Menu({ items, onAdd, onCustomize }) {
  return (
    <div className="menu">
      {items.map(item => (
        <div key={item.id} className="card">
          <img src={`/images/${item.image}`} alt={item.name} />
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p>${item.price.toFixed(2)}</p>
          {item.options ? (
            <button onClick={() => onCustomize(item)}>Customize</button>
          ) : (
            <button onClick={() => onAdd(item)}>Add to Cart</button>
          )}
        </div>
      ))}
    </div>
  );
}