import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import ProductsShowcase from '../components/ProductShowcase';
import Footer from '../components/Footer';

const Dashboard = () => {
    //eslint-disable-next-line
  const [cartCount, setCartCount] = useState(1);
  const [activeCategory, setActiveCategory] = useState('Semua');

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar cartCount={cartCount} />
      <Hero />
      <Categories 
        onCategorySelect={setActiveCategory}
        activeCategory={activeCategory}
      />
      <ProductsShowcase category={activeCategory} />
      <Footer />
    </div>
  );
};

export default Dashboard;