import React from 'react';

const CheckoutPage = ({ cartItems }) => {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Checkout</h2>
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
      <button onClick={() => alert('Purchase Complete!')}>Purchase</button>
    </div>
  );
};

export default CheckoutPage;
