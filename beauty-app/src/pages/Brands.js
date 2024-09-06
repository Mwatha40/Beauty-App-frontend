import React, { useState, useEffect } from 'react';
import './Brands.css'; 

const API_URL = 'http://127.0.0.1:5000'; // Ensure this matches your backend URL

const Brands = () => {
  const [activeTab, setActiveTab] = useState('Popular');
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]); // Cart state
  const [selectedProduct, setSelectedProduct] = useState(null); // State to manage selected product
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  useEffect(() => {
    const fetchBrands = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`${API_URL}/products`); // Update to your brands endpoint
        if (!response.ok) {
          const errorMessage = await response.text();
          throw new Error(`Failed to fetch brands: ${errorMessage}`);
        }
        const data = await response.json();
        setBrands(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBrands();
  }, []);

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Function to remove a product from the cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Function to handle viewing a product (opens modal)
  const viewProduct = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true); // Show the modal
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null); // Clear selected product
  };

  const renderContent = () => {
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
      <div className="brands-grid">
        {brands.map((brand) => (
          <div key={brand.id} className="brand-item">
            <img src={brand.image} alt={brand.name} className="brand-logo" />
            <h3 className="brand-name">{brand.name}</h3>
            <button className="btn view-brand-products" onClick={() => viewProduct(brand)}>View Product</button> {/* View Product button */}
            <button className="btn add-to-cart" onClick={() => addToCart(brand)}>Add to Cart</button>
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
    <div className="brands">
      <div className="sidebar">
        <ul>
          <li className={activeTab === 'Popular' ? 'active' : ''} onClick={() => setActiveTab('Popular')}>Popular</li>
          <li className={activeTab === 'Luxury' ? 'active' : ''} onClick={() => setActiveTab('Luxury')}>Luxury</li>
          <li className={activeTab === 'Affordable' ? 'active' : ''} onClick={() => setActiveTab('Affordable')}>Affordable</li>
          <li className={activeTab === 'New Arrivals' ? 'active' : ''} onClick={() => setActiveTab('New Arrivals')}>New Arrivals</li>
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

export default Brands;
