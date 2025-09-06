import React, { useState } from 'react';
import ProductList from './components/ProductList';

const App = () => {
  // TODO: Define initial product data
  const [products, setProducts] = useState([
  { id: 1, name: 'Laptop', price: '$999', inStock: true },
  { id: 2, name: 'Phone', price: '$699', inStock: false },
  { id: 3, name: 'Tablet', price: '$499', inStock: true },
]);

  // TODO: Implement state to manage filtering
  const [filter, setFilter] = useState("all");

  // TODO: Implement logic to filter products based on availability
  const filteredProducts = products.filter(product => {
    if (filter === "inStock") return product.inStock; // Filters inStock products
    if (filter === "outOfStock") return !product.inStock; // Filters outOfStock products
    return true; // Gets all the products
  });

  // Remove product by ID
  const handleRemove = (id) => {
  setProducts(prev => prev.filter(product => product.id !== id));
  };

  return (
    <div>
      <h1>Product Dashboard</h1>
      
      {/* TODO: Add buttons to allow filtering by availability */}
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("inStock")}>In Stock</button>
      <button onClick={() => setFilter("outOfStock")}>Out of Stock</button>

      {/* TODO: Render the ProductList component and pass filtered products */}
      <ProductList products={filteredProducts} onRemove={handleRemove} />
      
    </div>
  );
};

export default App;