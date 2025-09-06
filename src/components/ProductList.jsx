import React from 'react';
import ProductCard from './ProductCard';
import styles from '../styles/ProductList.module.css'

const ProductList = ({ products, onRemove }) => {
  // TODO: Check if the product list is empty and display a message if needed
  if (products.length === 0) {
    return <p>There are  no products available</p>
  }

  return (
    <div className={styles.productListContainer}>
      {/* TODO: Iterate over the products array and render a ProductCard for each product */}
      {products.map(product => (
        <ProductCard key={product.id} product={product} onRemove={onRemove}/>
      ))}
    </div>
  );
};

export default ProductList;
