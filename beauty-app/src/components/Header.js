import React, { useState, useEffect } from 'react';
import './Header.css';
import CartPage from './CartPage'; // Assuming CartPage.js is in the same directory

const API_URL = 'http://127.0.0.1:5000'; // Replace with your actual backend URL

const Header = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [error, setError] = useState(null);

  // Fetch cart items from the backend
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch(`${API_URL}/cart`);
        if (!response.ok) {
          throw new Error('Failed to fetch cart items');
        }
        const data = await response.json();
        setCartItems(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchCartItems();
  }, []);

  const removeFromCart = async (itemId) => {
    try {
      const response = await fetch(`${API_URL}/cart/${itemId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to remove item from cart');
      }

      setCartItems(cartItems.filter(item => item.id !== itemId));
    } catch (error) {
      setError(error.message);
    }
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
              <button onClick={handleCartClick}>
                Cart ({cartItems.length})
              </button>
              {showCart && (
                <div className="cart-dropdown">
                  <CartPage cartItems={cartItems} removeFromCart={removeFromCart} />
                  {error && <div className="error-message">{error}</div>}
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
