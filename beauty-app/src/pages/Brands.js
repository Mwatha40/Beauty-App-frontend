import React, { useState, useEffect } from 'react';
import './Brands.css'; 

const API_URL = 'http://127.0.0.1:5000'; // Ensure this matches your backend URL

const Brands = () => {
  const [activeTab, setActiveTab] = useState('Popular');
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  const renderContent = () => {
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    switch (activeTab) {
      case 'Popular':
      case 'Luxury':
      case 'Affordable':
      case 'New Arrivals':
        return (
          <div className="brands-grid">
            {brands.map(brand => (
              <div key={brand.id} className="brand-item">
                <img src={brand.logo} alt={brand.name} className="brand-logo" />
                <h3 className="brand-name">{brand.name}</h3>
                <button className="btn view-brand-products">View Products</button>
              </div>
            ))}
          </div>
        );
      default:
        return <div>Select an option to see the brands.</div>;
    }
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
      </div>
    </div>
  );
};

export default Brands;
