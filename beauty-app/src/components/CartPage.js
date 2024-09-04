import React from 'react';
import CartItem from './CartItem';

const CartPage = ({ cartItems, removeFromCart }) => {
  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cartItems.map(item => (
          <CartItem
            key={item.id}
            itemId={item.id}
            removeFromCart={removeFromCart}
          />
        ))}
      </ul>
      <p>
        Total: ${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
      </p>
    </div>
  );
};

export default CartPage;