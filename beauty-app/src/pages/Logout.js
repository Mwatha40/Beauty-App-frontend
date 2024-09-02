


import React from 'react';
import { logoutUser } from '../Api'; 

const LogoutButton = () => {
  const handleLogout = async () => {
    try {
      await logoutUser();
      window.location.href = '/login'; // Redirect to login page after logout
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <button onClick={handleLogout} className="logout-button">
      Logout
    </button>
  );
};

export default LogoutButton;
