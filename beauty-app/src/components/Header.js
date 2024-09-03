import React, { useState, useEffect } from 'react';
import './Header.css';
import CartPage from './CartPage'; // Assuming CartPage.js is in the same directory

const Header = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  // Fetch cart items from API or storage (replace with your logic)
  useEffect(() => {
    const sampleCartItems = [
      { id: 1, name: 'Item 1', price: 10, quantity: 2 },
      { id: 2, name: 'Item 2', price: 20, quantity: 1 },
    ];
    setCartItems(sampleCartItems);
  }, []);

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  const handleCartClick = () => {
    setShowCart(!showCart);
  };

  return (
    <header className="header">
      <div className="header-content">
        <nav>
          <ul>
            <li>
              <button>Home</button>
            </li>
            <li>
              <button>About</button>
            </li>
            <li>
              <button onClick={handleCartClick}>
                Cart ({cartItems.length})
              </button>
              {showCart && (
                <div className="cart-dropdown">
                  <CartPage cartItems={cartItems} removeFromCart={removeFromCart} />
                </div>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;