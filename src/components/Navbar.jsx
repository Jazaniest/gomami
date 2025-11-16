import React, { useState } from 'react'
import { ShoppingCart, Search } from 'lucide-react';

const Navbar = ({ cartCount }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  return (
    <nav className="bg-blue-500 text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-white text-blue-500 rounded-full p-1.5 sm:p-2">
              <ShoppingCart size={20} className="sm:w-6 sm:h-6" />
            </div>
            <span className="text-xl sm:text-2xl font-bold">GoMami</span>
          </div>
          
          {/* Desktop Search */}
          <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Cari produk, makanan, minuman, dan lainnya..."
                className="w-full px-4 py-2 rounded-full text-gray-800 pr-10"
              />
              <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            <a href="#" className="hover:text-blue-200">Home</a>
            <a href="#" className="hover:text-blue-200">Kategori</a>
            <a href="#" className="hover:text-blue-200">Tentang Kami</a>
            <a href="#" className="hover:text-blue-200">Kontak</a>
            <div className="relative">
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartCount}
                </span>
              )}
            </div>
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center space-x-3">
            <button onClick={() => setMobileSearchOpen(!mobileSearchOpen)}>
              <Search size={24} />
            </button>
            <div className="relative">
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartCount}
                </span>
              )}
            </div>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <div className="space-y-1.5">
                <div className="w-6 h-0.5 bg-white"></div>
                <div className="w-6 h-0.5 bg-white"></div>
                <div className="w-6 h-0.5 bg-white"></div>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        {mobileSearchOpen && (
          <div className="mt-3 lg:hidden">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Cari produk..."
                className="w-full px-4 py-2 rounded-full text-gray-800 pr-10"
              />
              <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="mt-3 lg:hidden bg-blue-600 rounded-lg p-4 space-y-3">
            <a href="#" className="block hover:text-blue-200">Home</a>
            <a href="#" className="block hover:text-blue-200">Kategori</a>
            <a href="#" className="block hover:text-blue-200">Tentang Kami</a>
            <a href="#" className="block hover:text-blue-200">Kontak</a>
          </div>
        )}
      </div>
    </nav>
  );
};



export default Navbar