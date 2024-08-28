import React, { useState } from 'react';
import './Makeup.css'; 

const Brands= () => {
  const [activeTab, setActiveTab] = useState('On Sale');

  const renderContent = () => {
    switch (activeTab) {
      case 'On Sale':
        return <div>Showing products on sale...</div>;
      case 'By Brand':
        return <div>Showing products by brand...</div>;
      case 'By Category':
        return <div>Showing products by category...</div>;
      case 'By Type':
        return <div>Showing products by type...</div>;
      case 'By Collection':
        return <div>Showing products by collection...</div>;
      case 'By Concern':
        return <div>Showing products by concern...</div>;
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

