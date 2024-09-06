import React, { useState, useEffect } from 'react';
import './Fragrances.css'; 

const API_URL = 'http://127.0.0.1:5000';

const Hair = () => {
  const [activeTab, setActiveTab] = useState('On Sale');
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]); // State for cart
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null); // State to manage selected product
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`${API_URL}/products`);
        if (!response.ok) {
          const errorMessage = await response.text();
          throw new Error(`Failed to fetch products: ${errorMessage}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Add a product to the cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Remove a product from the cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Handle opening the modal to view the product
  const viewProduct = (product) => {
    setSelectedProduct(product); // Set the selected product
    setIsModalOpen(true); // Open the modal
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
    setSelectedProduct(null); // Clear the selected product
  };

  const renderContent = () => {
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <button className="btn add-to-cart" onClick={() => addToCart(product)}>Add to Cart</button>
            <button className="btn view-product" onClick={() => viewProduct(product)}>View Product</button> {/* View Product button */}
          </div>
        ))}
      </div>
    );
  };

  const renderCart = () => (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name}
              <button className="btn remove-from-cart" onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  // Modal to show the selected product details
  const renderModal = () => {
    if (!selectedProduct) return null; // If no product is selected, return null

    return (
      <div className={`modal ${isModalOpen ? 'open' : ''}`} onClick={closeModal}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <span className="close" onClick={closeModal}>&times;</span>
          <img src={selectedProduct.image} alt={selectedProduct.name} className="modal-product-image" />
          <h3>{selectedProduct.name}</h3>
          <p>Price: $4.00 USD</p> {/* Hardcoded price */}
        </div>
      </div>
    );
  };

  return (
    <div className="hair">
      <div className="sidebar">
        <ul>
          <li className={activeTab === 'On Sale' ? 'active' : ''} onClick={() => setActiveTab('On Sale')}>On Sale</li>
          <li className={activeTab === 'By Brand' ? 'active' : ''} onClick={() => setActiveTab('By Brand')}>By Brand</li>
          <li className={activeTab === 'By Category' ? 'active' : ''} onClick={() => setActiveTab('By Category')}>By Category</li>
          <li className={activeTab === 'By Type' ? 'active' : ''} onClick={() => setActiveTab('By Type')}>By Type</li>
          <li className={activeTab === 'By Collection' ? 'active' : ''} onClick={() => setActiveTab('By Collection')}>By Collection</li>
          <li className={activeTab === 'By Concern' ? 'active' : ''} onClick={() => setActiveTab('By Concern')}>By Concern</li>
        </ul>
      </div>
      <div className="content">
        {renderContent()}
        {renderCart()} {/* Renders the cart */}
        {isModalOpen && renderModal()} {/* Renders the modal if it is open */}
      </div>
    </div>
  );
};

export default Hair;
