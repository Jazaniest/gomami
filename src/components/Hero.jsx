import React from "react";

const Hero = () => {
  return (
    <div className="bg-linear-to-r from-orange-50 to-orange-100">
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="w-1/2 p-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              DISKON 50% UNTUK<br />PEMBELIAN PERTAMA!
            </h1>
            <button className="bg-blue-900 text-white px-8 py-3 rounded-full hover:bg-blue-800 transition">
              BELANJA SEKARANG
            </button>
          </div>
          <div className="w-1/2">
            <img
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600"
              alt="Hero"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero