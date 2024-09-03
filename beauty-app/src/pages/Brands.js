import React, { useState, useEffect } from 'react';
import './Makeup.css';

const API_URL = 'http://127.0.0.1:5000'; // Ensure this matches your backend URL

const Brands = () => {
  const [activeTab, setActiveTab] = useState('On Sale');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`${API_URL}/products?category=${encodeURIComponent(activeTab)}`);
        if (!response.ok) {
          throw new Error('Failed to fetch products');
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
  }, [activeTab]);

  const renderContent = () => {
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
      <div>
        <h2>{activeTab} Products</h2>
        {products.length > 0 ? (
          <ul>
            {products.map(product => (
              <li key={product.id}>{product.name}</li>
            ))}
          </ul>
        ) : (
          <div>No products found.</div>
        )}
      </div>
    );
  };

  return (
    <div className="brands">
      <div className="sidebar">
        <ul>
          <li 
            className={activeTab === 'On Sale' ? 'active' : ''} 
            onClick={() => setActiveTab('On Sale')}
            aria-selected={activeTab === 'On Sale'}
          >
            On Sale
          </li>
          <li 
            className={activeTab === 'By Brand' ? 'active' : ''} 
            onClick={() => setActiveTab('By Brand')}
            aria-selected={activeTab === 'By Brand'}
          >
            By Brand
          </li>
          <li 
            className={activeTab === 'By Category' ? 'active' : ''} 
            onClick={() => setActiveTab('By Category')}
            aria-selected={activeTab === 'By Category'}
          >
            By Category
          </li>
          <li 
            className={activeTab === 'By Type' ? 'active' : ''} 
            onClick={() => setActiveTab('By Type')}
            aria-selected={activeTab === 'By Type'}
          >
            By Type
          </li>
          <li 
            className={activeTab === 'By Collection' ? 'active' : ''} 
            onClick={() => setActiveTab('By Collection')}
            aria-selected={activeTab === 'By Collection'}
          >
            By Collection
          </li>
          <li 
            className={activeTab === 'By Concern' ? 'active' : ''} 
            onClick={() => setActiveTab('By Concern')}
            aria-selected={activeTab === 'By Concern'}
          >
            By Concern
          </li>
        </ul>
      </div>
      <div className="content">
        {renderContent()}
      </div>
    </div>
  );
};

export default Brands;
