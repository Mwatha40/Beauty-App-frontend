import React, { useState, useEffect } from 'react';
import './Accessories.css'; 

const API_URL = 'http://127.0.0.1:5000'; // Ensure this matches your backend URL

const Accessories = () => {
  const [activeTab, setActiveTab] = useState('New Arrivals');
  const [accessories, setAccessories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAccessories = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`${API_URL}/products`); // Update to your accessories endpoint
        if (!response.ok) {
          const errorMessage = await response.text();
          throw new Error(`Failed to fetch accessories: ${errorMessage}`);
        }
        const data = await response.json();
        setAccessories(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAccessories();
  }, []);

  const renderContent = () => {
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    switch (activeTab) {
      case 'New Arrivals':
      case 'Best Sellers':
      case 'Discounted':
      case 'Featured':
        return (
          <div className="accessories-grid">
            {accessories.map(accessory => (
              <div key={accessory.id} className="accessory-item">
                <img src={accessory.image} alt={accessory.name} className="accessory-image" />
                <h3 className="accessory-name">{accessory.name}</h3>
                <button className="btn add-to-cart">Add to Cart</button>
                <button className="btn view-details">View Details</button>
              </div>
            ))}
          </div>
        );
      default:
        return <div>Select an option to see the accessories.</div>;
    }
  };

  return (
    <div className="accessories">
      <div className="sidebar">
        <ul>
          <li className={activeTab === 'New Arrivals' ? 'active' : ''} onClick={() => setActiveTab('New Arrivals')}>New Arrivals</li>
          <li className={activeTab === 'Best Sellers' ? 'active' : ''} onClick={() => setActiveTab('Best Sellers')}>Best Sellers</li>
          <li className={activeTab === 'Discounted' ? 'active' : ''} onClick={() => setActiveTab('Discounted')}>Discounted</li>
          <li className={activeTab === 'Featured' ? 'active' : ''} onClick={() => setActiveTab('Featured')}>Featured</li>
        </ul>
      </div>
      <div className="content">
        {renderContent()}
      </div>
    </div>
  );
};

export default Accessories;
