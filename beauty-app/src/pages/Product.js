import React from 'react';
import ProductCard from '../components/ProductCard';

const ProductPage = ({ products, addToCart }) => {
  return (
    <div>
      <h2>Products</h2>
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
