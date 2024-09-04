import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const CartItem = ({ itemId, removeFromCart }) => {
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/cart/${itemId}`);
        setItem(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        console.error('Error fetching cart item:', error);
      }
    };

    fetchItem();
  }, [itemId]);

  const handleRemove = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/cart/${item.id}`);
      removeFromCart(item.id);
      setLoading(true); // set loading to true to re-fetch the cart items
    } catch (error) {
      setError(error.message);
      console.error('Error removing item from cart:', error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <li>
      <span>{item.name} x {item.quantity}</span>
      <span>${(item.price * item.quantity).toFixed(2)}</span>
      <button onClick={handleRemove}>Remove</button>
    </li>
  );
};

CartItem.propTypes = {
  itemId: PropTypes.string.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default CartItem;