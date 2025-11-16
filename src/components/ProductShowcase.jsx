import React, { useState } from 'react';
import { products } from '../utils/productsData';
import ProductCard from './ProductCard';
import ProductDetail from './ProductDetail';

const ProductsShowcase = ({ category }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const filteredProducts = category === 'Semua'
    ? products
    : products.filter(p => p.category === category);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">Produk Terbaru</h2>
          <div className="h-1 w-24 bg-blue-500 mt-2"></div>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-800">Produk Terpouler</h2>
          <div className="h-1 w-24 bg-blue-500 mt-2"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={setSelectedProduct}
          />
        ))}
      </div>

      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default ProductsShowcase