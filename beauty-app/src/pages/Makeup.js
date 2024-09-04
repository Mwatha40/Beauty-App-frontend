import React, { useState } from 'react';
import './Makeup.css';

const products = [
  { id: 1, name: 'Lipstick', image: 'https://i.pinimg.com/originals/4b/77/82/4b7782f4b7d1a980c0a2a3a1472b0949.png' },
  { id: 2, name: 'Foundation', image: 'https://i.pinimg.com/originals/e8/6f/d7/e86fd7d5c89b72ada65192e3b19b6bae.jpg' },
  { id: 3, name: 'Mascara', image: 'https://i.pinimg.com/originals/3e/f1/25/3ef125eec700b1ed0cec61260b42423b.jpg' },
  { id: 4, name: 'Eyeliner', image: 'https://i.pinimg.com/originals/fe/68/a9/fe68a9b264227ba59a82528c14927ad4.jpg' },
  { id: 5, name: 'Blush', image: 'https://i.pinimg.com/1200x/5c/01/31/5c0131820e7900de971faa78fb5b69ce.jpg' },
  { id: 6, name: 'Eyeshadow', image: 'https://i.pinimg.com/1200x/0d/cd/a7/0dcda734733745dd95aa50e6e913c698.jpg' },
  { id: 7, name: 'Concealer', image: 'https://i.pinimg.com/1200x/b2/9c/a8/b29ca8746764104d5b9d934f4ad7d1a6.jpg' },
  { id: 8, name: 'Primer', image: 'https://i.pinimg.com/1200x/86/db/35/86db35da738e961eb2f2d94925c7ffcb.jpg' },
  { id: 9, name: 'Lipstick', image: 'https://i.pinimg.com/1200x/bb/31/3d/bb313d0d089f17922b888155c5c97436.jpg' },
  { id: 10, name: 'Foundation', image: 'https://i.pinimg.com/originals/0d/e2/6f/0de26faffb3ce96b11a0259ae53a9bee.jpg' },
  { id: 11, name: 'Mascara', image: 'https://i.pinimg.com/originals/5b/d5/13/5bd5133b177a98a55a24065cabd21d27.jpg' },
  { id: 12, name: 'Eyeliner', image: 'https://i.pinimg.com/1200x/c0/82/54/c08254bf6cb5830cdf3cb5c75f44a871.jpg' },
  { id: 13, name: 'Blush', image: 'https://i.pinimg.com/originals/da/ed/5d/daed5d03c90174125068b4c386c82241.jpg' },
  { id: 14, name: 'Eyeshadow', image: 'https://i.pinimg.com/originals/44/d1/ac/44d1ac0cb719ed3edad213205c2fa14c.jpg' },
  { id: 15, name: 'Concealer', image: 'https://i.pinimg.com/1200x/2c/63/ed/2c63ed7d351bd820729990cfb262cf2e.jpg' },
  { id: 16, name: 'Primer', image: 'https://i.pinimg.com/originals/88/f6/2a/88f62acabfc438fd6fa9242ede5f134b.jpg' },
  { id: 17, name: 'Lipstick', image: 'https://i.pinimg.com/originals/c7/e6/46/c7e64643f5ce79e07b425381a5d046b2.jpg' },
  { id: 18, name: 'Foundation', image: 'https://i.pinimg.com/1200x/17/98/d3/1798d3bbd45de34e4ee0b419530120e7.jpg' },

];

const Makeup = () => {
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

export default Makeup