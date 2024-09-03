import React from 'react';
import PropTypes from 'prop-types';

const CartItem = ({ item, removeFromCart }) => {
  if (!item) {
    return null; // Or some fallback UI
  }

  return (
    <li>
      <span>{item.name} x {item.quantity}</span>
      <span>${item.price * item.quantity}</span>
      <button onClick={() => removeFromCart(item.id)}>Remove</button>
    </li>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.number,
    id: PropTypes.string,
  }),
  removeFromCart: PropTypes.func.isRequired,
};

export default CartItem;
