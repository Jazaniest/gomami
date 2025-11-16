import React from 'react';

const ProductCard = ({ product, onClick }) => {
  return (
    <div
      onClick={() => onClick(product)}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer"
    >
      <div className="relative h-48">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <span className="absolute top-2 right-2 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
          Terbaru
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 mb-2">{product.name}</h3>
        <div className="flex items-center justify-between mb-2">
          <div>
            <div className="text-lg font-bold text-gray-800">
              Rp {product.price.toLocaleString()}
            </div>
            <div className="text-sm text-gray-400 line-through">
              Rp {product.originalPrice.toLocaleString()}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-yellow-400">★</span>
            <span className="ml-1 text-sm text-gray-600">
              {product.rating} ({product.reviews})
            </span>
          </div>
          <button className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm hover:bg-blue-600">
            Terbaru
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard