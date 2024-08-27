import React from 'react';
import CartItem from '../components/CartItem';

const CartPage = ({ cartItems, removeFromCart }) => {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
          ))}
          <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
};

export default CartPage;
