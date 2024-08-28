import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AccountDropdown.css';

const AccountDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="account-dropdown">
      <button className="account-button" onClick={toggleDropdown}>
        My Account
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <div className="account-options">
            <p>Sign in for a more personalized experience</p>
            <div className="auth-buttons">
              <Link to="/login" className="login-button">Log In</Link>
              <Link to="/register" className="create-account-button">Create Account</Link>
            </div>
          </div>
          <ul className="account-links">
            <li>
              <Link to="/orders">
                <span className="icon">📦</span> Orders
                <p>View and track online or pickup orders</p>
              </Link>
            </li>
            <li>
              <Link to="/favorites">
                <span className="icon">❤️</span> Favourites
                <p>View saved products</p>
              </Link>
            </li>
            <li>
              <Link to="/account-settings">
                <span className="icon">⚙️</span> Account Settings
                <p>Payment, contact info, addresses, password</p>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AccountDropdown;