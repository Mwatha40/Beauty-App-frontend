import React from 'react';
import { Link } from 'react-router-dom';
import AccountDropdown from '../pages/AccountDropdown';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">BeautyShop</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/new-bestsellers">New & Bestsellers</Link></li>
        <li><Link to="/makeup">Makeup</Link></li>
        <li><Link to="/skincare">Skincare</Link></li>
        <li><Link to="/haircare">Haircare</Link></li>
        <li><Link to="/hair">Hair</Link></li>
        <li><Link to="/fragrances">Fragrances</Link></li>
        <li><Link to="/brands">Brands</Link></li>
        <li><Link to="/newsletter">Newsletter</Link></li>
        <li><Link to="/accessories">Accessories</Link></li>
        <li><Link to="/clearance-sale">Clearance Sale</Link></li>
    <AccountDropdown />
      </ul>
    </nav>
  );
};

export default Navbar;
