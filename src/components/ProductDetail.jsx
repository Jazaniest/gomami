import React, { useState } from 'react';

const ProductDetail = ({ product, onClose }) => {
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 z-10"
          >
            ✕
          </button>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 sm:h-64 md:h-96 object-cover rounded-t-2xl"
          />
        </div>
        <div className="p-4 sm:p-6 md:p-8">
          <div className="flex flex-col sm:flex-row items-start justify-between mb-4 space-y-3 sm:space-y-0">
            <div className="w-full sm:w-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">{product.name}</h2>
              <div className="flex items-center space-x-2">
                <span className="text-yellow-400 text-lg sm:text-xl">★</span>
                <span className="text-base sm:text-lg text-gray-600">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
            </div>
            <div className="text-left sm:text-right w-full sm:w-auto">
              <div className="text-2xl sm:text-3xl font-bold text-gray-800">
                Rp {product.price.toLocaleString()}
              </div>
              <div className="text-base sm:text-lg text-gray-400 line-through">
                Rp {product.originalPrice.toLocaleString()}
              </div>
              <span className="inline-block bg-red-500 text-white px-3 py-1 rounded-full text-xs sm:text-sm mt-2">
                Hemat 50%
              </span>
            </div>
          </div>
          
          <div className="mb-4 sm:mb-6">
            <span className="inline-block bg-blue-100 text-blue-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm">
              {product.category}
            </span>
          </div>

          <div className="mb-4 sm:mb-6">
            <h3 className="font-semibold text-gray-800 mb-2 text-base sm:text-lg">Deskripsi Produk</h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{product.description}</p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mb-4 sm:mb-6">
            <span className="font-semibold text-gray-800 text-sm sm:text-base">Jumlah:</span>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="bg-gray-200 hover:bg-gray-300 w-10 h-10 rounded-full flex items-center justify-center font-bold"
              >
                −
              </button>
              <span className="text-lg sm:text-xl font-semibold w-12 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="bg-gray-200 hover:bg-gray-300 w-10 h-10 rounded-full flex items-center justify-center font-bold"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
            <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition">
              Tambah ke Keranjang
            </button>
            <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition">
              Beli Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail