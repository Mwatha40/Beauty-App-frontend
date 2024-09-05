import React from 'react';
import PropTypes from 'prop-types';

const CartItem = ({ item, removeFromCart }) => {
  console.log('CartItem props:', item); // Add this line to log the item props

  if (!item || !item.product) {
    return <p>Product information not available</p>;
  }

  return (
    <li>
      <h2>{item.product.name}</h2>
      <p>Price: ${item.product.price}</p>
      <p>Quantity: {item.quantity}</p>
      <button onClick={() => removeFromCart(item.id)}>Remove from cart</button>
    </li>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    product: PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }).isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default CartItem;