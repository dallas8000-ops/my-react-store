import React, { useState } from 'react';
import QuantityPicker from './QuantityPicker';
import './Product.css'; 

const Product = ({ product }) => {
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  
  const productData = product || {
    id: 99,
    name: 'Placeholder Product Name',
    price: 0.00,
    imageUrl: 'https://via.placeholder.com/400x400?text=No+Data'
  };

  const handleQuantityChange = (newQuantity) => {
    setSelectedQuantity(newQuantity);
  };

  return (
    <div className="product-card">
      <h3 className="product-name">{productData.name}</h3>
      <div className="product-image-container">
        <img 
          src={productData.imageUrl} 
          alt={productData.name} 
          className="product-image"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/400x400?text=Image+Not+Found';
          }}
        />
      </div>
      <div className="product-details">
        <p className="product-price">Price: <strong>${productData.price.toFixed(2)}</strong></p>
        
        <div className="product-quantity-selector">
          <QuantityPicker 
            initialQuantity={selectedQuantity}
            onQuantityChange={handleQuantityChange}
          />
        </div>
        <button 
          className="add-to-cart-btn"
          onClick={() => alert(`Added ${selectedQuantity} of ${productData.name} to cart`)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;