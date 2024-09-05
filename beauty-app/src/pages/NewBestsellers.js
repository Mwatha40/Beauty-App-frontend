import React, { useState, useEffect } from 'react';
import './NewBestsellers.css'; 
import MyProductCard from '../components/MyProductCard';

const API_URL = 'http://127.0.0.1:5000'; // Ensure this matches your backend URL

const NewBestsellers = () => {
  const [activeTab, setActiveTab] = useState('New');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`${API_URL}/products`); // Corrected string interpolation
        if (!response.ok) {
          const errorMessage = await response.text();
          throw new Error(`Failed to fetch products: ${errorMessage}`); // Proper string formatting
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

  const filterProducts = () => {
    if (activeTab === 'New') {
      // Filter for new products if your API provides such a field
      return products.filter(product => product.isNew); 
    }
    if (activeTab === 'Bestsellers') {
      // Filter for bestselling products if your API provides such a field
      return products.filter(product => product.isBestseller);
    }
    return [];
  };

  const renderContent = () => {
    if (loading) return <div className="loading">Loading...</div>;
    if (error) return <div className="error">Error: {error}</div>;

    const filteredProducts = filterProducts();

    return (
      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <MyProductCard 
              key={product.id}
              image={product.image}
              name={product.name}
              id={product.id}
            />
          ))
        ) : (
          <div>No products available.</div>
        )}
      </div>
    );
  };

  return (
    <div className="new-bestsellers">
      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'New' ? 'active' : ''}`} // Corrected string interpolation for className
          onClick={() => setActiveTab('New')}
        >
          New
        </button>
        <button 
          className={`tab ${activeTab === 'Bestsellers' ? 'active' : ''}`} // Corrected string interpolation for className
          onClick={() => setActiveTab('Bestsellers')}
        >
          Bestsellers
        </button>
      </div>
      <div className="content">
        {renderContent()}
      </div>
    </div>
  );
};

export default NewBestsellers;
