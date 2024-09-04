import React, { useState } from 'react';
import './Makeup.css';

const products = [
  { id: 1, name: 'Hair-wigs', image: 'https://i.pinimg.com/originals/82/a2/16/82a21660fd914b217a9c72c0be287460.jpg' },
  { id: 2, name: 'Hair-weaves', image: 'https://i.pinimg.com/originals/f1/74/94/f1749424055cf98a2774ad0aa023746f.jpg' },
  { id: 3, name: 'Hair-wigs', image: 'https://i.pinimg.com/originals/db/8e/68/db8e6889a75dd0936ac1bfdb64cdeb27.jpg' },
  { id: 4, name: 'Hair-weaves', image: 'https://i.pinimg.com/1200x/b2/17/83/b21783830844fd74137c8af4e54bac3b.jpg' },
  { id: 5, name: 'Hair-wigs', image: 'https://i.pinimg.com/736x/8a/a3/5e/8aa35ee7a249c79b770767e519a0b5d0.jpg' },
  { id: 6, name: 'Hair-weaves', image: 'https://i.pinimg.com/originals/4f/36/d7/4f36d7a742e95948565cea5ae129c3bf.jpg' },
  { id: 7, name: 'Hair-wigs', image: 'https://i.pinimg.com/originals/1d/83/d9/1d83d95123b11554d31afecfa71aaa4d.jpg' },
  { id: 8, name: 'Hair-weaves', image: 'https://i.pinimg.com/originals/02/38/49/023849512bfcbfeb0f3fe483e4a6b51c.jpg' },
  { id: 9, name: 'Hair-wigs', image: 'https://i.pinimg.com/originals/27/74/1b/27741bf13398b09fb788c4adc7f26cef.jpg' },
];
;

const Accessories = () => {
  const [activeTab, setActiveTab] = useState('On Sale');

  const renderContent = () => {
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
    <div className="accessories">
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

export default Accessories;