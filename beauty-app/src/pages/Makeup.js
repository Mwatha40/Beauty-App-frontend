import React, { useState, useEffect } from 'react';
import './Makeup.css'; 

const API_URL = 'http://127.0.0.1:5000'; 

const Makeup = () => {
  const [activeTab, setActiveTab] = useState('On Sale');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`${API_URL}/products`); // Use backticks for template literal
        if (!response.ok) {
          const errorMessage = await response.text();
          throw new Error(`Failed to fetch products: ${errorMessage}`); // Error message properly quoted
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

  const renderContent = () => {
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    switch (activeTab) {
      case 'On Sale':
      case 'By Brand':
      case 'By Category':
      case 'By Type':
      case 'By Collection':
      case 'By Concern':
        return (
          <div className="products-grid">
            {products.map(product => (
              <div key={product.id} className="product-item">
                <img src={product.image} alt={product.name} className="product-image" />
                <h3 className="product-name">{product.name}</h3>
                <button className="btn add-to-cart">Add to Cart</button>
                <button className="btn view-product">View Product</button>
              </div>
            ))}
          </div>
        );
      default:
        return <div>Select an option to see the products.</div>;
    }
  };

  return (
    <div className="makeup">
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
      </div>
    </div>
  );
};

export default Makeup;
