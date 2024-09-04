import React, { useState } from 'react';
import './Makeup.css';

const products = [
  
  { id: 1, name: 'Conditioner', image: 'https://i.pinimg.com/1200x/c2/de/98/c2de98d25e100849c811df12ad2d7fc1.jpg' },
  { id: 2, name: 'Shampoo', image: 'https://i.pinimg.com/1200x/62/f8/13/62f8130cf0320593400001247cbc9a47.jpg' },
  { id: 3, name: 'Food hair', image: 'https://i.pinimg.com/1200x/c3/ef/cd/c3efcd707405cde40e26ae73dbef62bf.jpg' },
  { id: 4, name: 'Hair growth', image: 'https://i.pinimg.com/1200x/2d/53/41/2d53415df80e4c643262f56821676b9e.jpg' },
  { id: 5, name: 'Hair moisturizer', image: 'https://i.pinimg.com/1200x/98/7c/c9/987cc914b4f0f9aeaa58afaf0599d54d.jpg' },
  { id: 6, name: 'Hair strengthener', image: 'https://i.pinimg.com/1200x/e9/8e/c4/e98ec4c5fbb44e7646a90e6c570f473d.jpg' },
  { id: 7, name: 'Conditioner', image: 'https://i.pinimg.com/originals/9f/96/83/9f9683b9a0d934e7b4999605342b6d87.jpg' },
  { id: 8, name: 'Shampoo', image: 'https://i.pinimg.com/originals/ca/8e/34/ca8e349824abcd9cf50ee8a274ed6fab.jpg' },
  { id: 9, name: 'Food hair', image: 'https://i.pinimg.com/originals/79/fe/01/79fe01df17cda540f1930943fb81bbdd.jpg' },
  { id: 10, name: 'Hair growth', image: 'https://i.pinimg.com/1200x/6e/8b/3c/6e8b3cec45da145d15b3ab774109ba65.jpg' },
  { id: 11, name: 'Hair moisturizer', image: 'https://i.pinimg.com/originals/67/b9/bb/67b9bb91546d56a5a644cfef44b921d1.jpg' },
  { id: 12, name: 'Hair strengthener', image: 'https://i.pinimg.com/1200x/a1/58/68/a15868c9f8a460bd168cb518c3c781ae.jpg' },
  { id: 13, name: 'Conditioner', image: 'https://i.pinimg.com/originals/7d/29/b2/7d29b2523c0c5d85ddedad22585449a1.jpg' },
  { id: 14, name: 'Shampoo', image: 'https://i.pinimg.com/originals/f4/9d/6e/f49d6e7681fca75a6b41f93b7218ed9c.jpg' },
  { id: 15, name: 'Food hair', image: 'https://i.pinimg.com/originals/5f/15/97/5f1597685fdb6f0708e89682f2aa0aba.jpg' },
  { id: 16, name: 'Hair growth', image: 'https://i.pinimg.com/originals/a8/2e/2b/a82e2b00cc933a11e28eb3678d078a10.jpg' },
  { id: 17, name: 'Hair moisturizer', image: 'https://i.pinimg.com/1200x/21/67/b4/2167b4073b14ea8f947cc26db40fa3ef.jpg' },
  { id: 18, name: 'Hair strengthener', image: 'https://i.pinimg.com/originals/7a/65/26/7a65268f810c25224c925c14dd383158.jpg' },
  { id: 1, name: 'Hair-wigs', image: 'https://i.pinimg.com/originals/82/a2/16/82a21660fd914b217a9c72c0be287460.jpg' },
  { id: 2, name: 'Hair-weaves', image: 'https://i.pinimg.com/originals/f1/74/94/f1749424055cf98a2774ad0aa023746f.jpg' },
  { id: 3, name: 'Hair-wigs', image: 'https://i.pinimg.com/originals/db/8e/68/db8e6889a75dd0936ac1bfdb64cdeb27.jpg' },
  { id: 4, name: 'Hair-weaves', image: 'https://i.pinimg.com/1200x/b2/17/83/b21783830844fd74137c8af4e54bac3b.jpg' },
  { id: 11, name: 'Hair moisturizer', image: 'https://i.pinimg.com/originals/67/b9/bb/67b9bb91546d56a5a644cfef44b921d1.jpg' },
  { id: 12, name: 'Hair strengthener', image: 'https://i.pinimg.com/1200x/a1/58/68/a15868c9f8a460bd168cb518c3c781ae.jpg' },
  { id: 13, name: 'Conditioner', image: 'https://i.pinimg.com/originals/7d/29/b2/7d29b2523c0c5d85ddedad22585449a1.jpg' },
];

const NewBestsellers = () => {
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
    <div className="newbestsellers">
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

export default NewBestsellers;