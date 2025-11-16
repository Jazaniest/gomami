import { ShoppingCart, Search } from 'lucide-react';

const Navbar = ({ cartCount }) => {
  return (
    <nav className="bg-blue-500 text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-white text-blue-500 rounded-full p-2">
              <ShoppingCart size={24} />
            </div>
            <span className="text-2xl font-bold">GoMami</span>
          </div>
          
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Cari produk, makanan, minuman, dan lainnya..."
                className="w-full px-4 py-2 rounded-full text-gray-800 pr-10"
              />
              <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
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
        </div>
      </div>
    </nav>
  );
};


export default Navbar