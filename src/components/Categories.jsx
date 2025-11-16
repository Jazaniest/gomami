import React from 'react';

const Categories = ({ onCategorySelect, activeCategory }) => {
  const categories = [
    { name: 'Makanan', icon: '🍜' },
    { name: 'Minuman', icon: '🥤' },
    { name: 'Snack', icon: '🍕' },
    { name: 'Dessert', icon: '🧁' }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-4 gap-6">
        {categories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => onCategorySelect(cat.name)}
            className={`bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition text-center ${
              activeCategory === cat.name ? 'ring-2 ring-blue-500' : ''
            }`}
          >
            <div className="text-4xl mb-2">{cat.icon}</div>
            <div className="font-semibold text-gray-700">{cat.name}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories