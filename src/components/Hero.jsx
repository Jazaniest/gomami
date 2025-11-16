import React from "react";

const Hero = () => {
  return (
    <div className="bg-linear-to-r from-orange-50 to-orange-100">
      <div className="container mx-auto px-4 py-6 sm:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-12 text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
              DISKON 50% UNTUK<br />PEMBELIAN PERTAMA!
            </h1>
            <button className="bg-blue-900 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:bg-blue-800 transition text-sm sm:text-base">
              BELANJA SEKARANG
            </button>
          </div>
          <div className="w-full md:w-1/2 h-48 sm:h-64 md:h-auto">
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