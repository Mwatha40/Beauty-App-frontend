import React, { useState } from 'react';
import './Makeup.css';

const products = [
  
  { id: 1, name: 'Orchid', image: 'https://i.pinimg.com/originals/5b/55/09/5b55097372efbc0d29cb4978ecb93350.png' },
  { id: 2, name: 'Garniere', image: 'https://i.pinimg.com/originals/41/50/97/41509724d3b456fa2e45df35941040be.jpg' },
  { id: 3, name: 'Cosrx', image: 'https://i.pinimg.com/originals/70/9e/e0/709ee0d2083a507d428ff15fc14ceb87.png' },
  { id: 4, name: 'Cerave', image: 'https://i.pinimg.com/originals/01/df/ad/01dfadb784cdcd91ebb730d30592b481.png' },
  { id: 5, name: 'Black Opal', image: 'https://i.pinimg.com/originals/a5/33/69/a533694f1c357de0ad7fe4db66aa78ea.jpg' },
  { id: 6, name: 'Darlin', image: 'https://i.pinimg.com/originals/a1/2b/70/a12b7023525ee56a25550289582f2a0f.jpg' },
];

const Brands = () => {
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
    <div className="brands">
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

export default Brands;