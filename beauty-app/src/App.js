import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CartItem from './components/CartItem';
import CartPage from './components/CartPage';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
//import ProductCard from './components/ProductCard';
//import Header from './components/Header';

// Import page components
import Home from './pages/Home';
//import NewBestsellers from './pages/NewBestsellers';
import AccountDropdown from './pages/AccountDropdown';
import CheckoutPage from './pages/Checkout';
import Makeup from './pages/Makeup';
import Skincare from './pages/Skincare';
import Haircare from './pages/Haircare';
import Hair from './pages/Hair';
import Fragrances from './pages/Fragrances';
import Brands from './pages/Brands';
import Newsletter from './pages/Newsletter';
import Accessories from './pages/Accessories';
//import ClearanceSale from './pages/ClearanceSale';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Register from './pages/Register';
import ProductPage from './pages/Product'; // This could be your Home page or a new one


function App() {
  const [cartItems, setCartItems] = useState([]);

  const products = [
    { id: 1, name: 'Lipstick', price: 19.99 },
    { id: 2, name: 'Foundation', price: 39.99 },
    { id: 3, name: 'Mascara', price: 24.99 },
  ];

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  return (
    <Router>
      <div>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/makeup" element={<Makeup />} />
          <Route path="/skincare" element={<Skincare />} />
          <Route path="/haircare" element={<Haircare />} />
          <Route path="/hair" element={<Hair />} />
          <Route path="/fragrances" element={<Fragrances />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Register />} />
          <Route path='/cart' element={<CartItem />}/>
          <Route path="/accountdropdown" element={<AccountDropdown />} />

          {/* Cart-related routes */}
          <Route path="/products" element={<ProductPage products={products} addToCart={addToCart} />} />
          <Route path="/cart" element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart} />} />
          <Route path="/checkout" element={<CheckoutPage cartItems={cartItems} />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
