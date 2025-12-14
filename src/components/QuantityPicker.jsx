import React, { useState } from 'react';

const QuantityPicker = ({ initialQuantity = 1, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleDecrease = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      if (onQuantityChange) onQuantityChange(newQuantity);
    }
  };

  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    if (onQuantityChange) onQuantityChange(newQuantity);
  };

  return (
    <div className="flex items-center gap-3 p-4">
      <button 
        onClick={handleDecrease} 
        disabled={quantity === 1}
        className="w-10 h-10 rounded-lg bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed font-bold text-lg transition-colors"
      >
        -
      </button>
      <span className="text-xl font-semibold min-w-[2rem] text-center">{quantity}</span>
      <button 
        onClick={handleIncrease}
        className="w-10 h-10 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg transition-colors"
      >
        +
      </button>
    </div>
  );
};

export default QuantityPicker;