import React, { useState } from 'react';
import QuantityPicker from './QuantityPicker';
import './Product.css'; 

const Product = ({ product }) => {
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  
  // Handle both data structures: name/imageUrl and title/image
  const productData = product || {
    id: 99,
    title: 'Placeholder Product Name',
    name: 'Placeholder Product Name',
    price: 0.00,
    imageUrl: 'https://via.placeholder.com/400x400?text=No+Data',
    image: 'placeholder.png'
  };

  // Get title (prefer title, fallback to name)
  const productTitle = productData.title || productData.name || 'Product';
  
  // Get image URL (handle both imageUrl and image paths)
  const imageUrl = productData.imageUrl 
    ? productData.imageUrl 
    : productData.image 
      ? `/images/${productData.image}` 
      : 'https://via.placeholder.com/400x400?text=No+Image';

  const handleQuantityChange = (newQuantity) => {
    setSelectedQuantity(newQuantity);
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img 
          src={imageUrl} 
          alt={productTitle} 
          className="product-image"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/400x400?text=Image+Not+Found';
          }}
        />
      </div>
      <h3 className="product-title">{productTitle}</h3>
      <div className="product-details">
        <p className="product-price">${productData.price.toFixed(2)}</p>
        
        <div className="product-quantity-selector">
          <QuantityPicker 
            initialQuantity={selectedQuantity}
            onQuantityChange={handleQuantityChange}
          />
        </div>
        <button 
          className="add-to-cart-btn"
          onClick={() => alert(`Added ${selectedQuantity} of ${productTitle} to cart`)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;