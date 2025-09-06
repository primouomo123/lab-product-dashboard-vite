import React from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product, onRemove }) => {
  return (
    <div className={!product.inStock ? styles.outOfStockClass : styles.inStockClass}>
      <div className={!product.inStock ? "outOfStockClass" : "inStockClass"}>
      {/* TODO: Apply conditional class to <div> above for out-of-stock items */}
      
      {/* TODO: Display product name */}
      <h2>{product.name}</h2>

      {/* TODO: Display product price */}
      <p>Price: <strong>{product.price}</strong></p>

      {/* TODO: Show if the product is in stock or out of stock */}
      <p>{product.inStock ? "In Stock" : "Out of Stock"}</p>

      <button onClick={() => onRemove(product.id)}>Remove</button>
      
    </div>
    </div>
    
  );
};

export default ProductCard;
