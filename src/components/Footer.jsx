import React from 'react';
import { ShoppingCart, Facebook, Instagram, Github, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white mt-12">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-white text-blue-900 rounded-full p-2">
                <ShoppingCart size={24} />
              </div>
              <span className="text-2xl font-bold">GoMami</span>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              Toko belanja online yang menyediakan aneka lisan
              mie/snack/roti/minuman/dessert dan oleh-oleh khas sedari daerah hingga
              mancanegara.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Informasi</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-200 hover:text-white">Karir</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white">Kebijakan Privasi</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white">Syarat & Ketentuan</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Kontak Kami</h3>
            <p className="text-blue-200 text-sm mb-2">
              Gelora II Blk.J9/62 6 Krt nius 17 10 0122
            </p>
            <p className="text-blue-200 text-sm mb-4">
              Tlponid +1 202 958 1820 808
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-white">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white">
                <Github size={24} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer