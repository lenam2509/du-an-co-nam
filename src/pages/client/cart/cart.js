import React from 'react';
import './cart.css'

function CartItem({ item, onRemove }) {
  return (
    <div className="cart-item">
      <div className="item-details">
        <h3 className="item-name">{item.name}</h3>
        <p className="item-price">{item.price}</p>
      </div>
      <button className="remove-button" onClick={onRemove}>
        X
      </button>
    </div>
  );
}

function Cart({ items, onRemove }) {
  return (
    <div className="cart">
      <h2 className="header">Giỏ Hàng</h2>
      <div className="item-list">
        {items.map((item) => (
          <CartItem key={item.id} item={item} onRemove={() => onRemove(item.id)} />
        ))}
      </div>
    </div>
  );
}

export default Cart;
