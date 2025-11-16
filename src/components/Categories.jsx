import React from 'react';

const Categories = ({ onCategorySelect, activeCategory }) => {
  const categories = [
    { name: 'Makanan', icon: '🍜' },
    { name: 'Minuman', icon: '🥤' },
    { name: 'Snack', icon: '🍕' },
    { name: 'Dessert', icon: '🧁' }
  ];

  return (
    <div className="container mx-auto px-4 py-6 sm:py-8">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6">
        {categories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => onCategorySelect(cat.name)}
            className={`bg-white rounded-xl shadow-md p-4 sm:p-6 hover:shadow-lg transition text-center ${
              activeCategory === cat.name ? 'ring-2 ring-blue-500' : ''
            }`}
          >
            <div className="text-3xl sm:text-4xl mb-2">{cat.icon}</div>
            <div className="font-semibold text-gray-700 text-sm sm:text-base">{cat.name}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories