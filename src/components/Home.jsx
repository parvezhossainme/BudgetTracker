import React from 'react';

const Home = () => {
  return (
    <div className="bg-[#F6F4F0] min-h-screen p-6 font-sans">
      {/* Search Bar */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search for Product..."
          className="w-3/4 p-4 border rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-lg"
        />
        <button className="p-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-r-full hover:from-blue-600 hover:to-blue-800">
          🔍
        </button>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Special Offers & Discounts */}
        <div className="col-span-2">
          <h2 className="text-2xl font-bold mb-6">Special Offers & Discounts</h2>
          <div className="flex space-x-6">
            <div className="w-1/3 h-48 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg hover:scale-105 transform transition-all duration-300 overflow-hidden shadow-lg">
              {/* Image Placeholder */}
            </div>
            <div className="w-1/3 h-48 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg hover:scale-105 transform transition-all duration-300 overflow-hidden shadow-lg">
              {/* Image Placeholder */}
            </div>
            <div className="w-1/3 h-48 bg-gradient-to-r from-orange-400 to-red-500 rounded-lg hover:scale-105 transform transition-all duration-300 overflow-hidden shadow-lg">
              {/* Image Placeholder */}
            </div>
          </div>
        </div>

        {/* News & Updates */}
        <div>
          <h2 className="text-2xl font-bold mb-6">News & Updates</h2>
          <div className="w-full h-48 bg-gradient-to-r from-yellow-300 to-orange-500 rounded-lg hover:scale-105 transform transition-all duration-300 overflow-hidden shadow-lg">
            {/* Image Placeholder */}
          </div>
        </div>
      </div>

      {/* Product Category */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-6">Product Category</h2>
        <div className="flex space-x-8">
          {['Fast Food', 'Chinese', 'Vegetable', 'T-shirts'].map((category, index) => (
            <div key={index} className="text-center">
              <div className="w-24 h-24 mx-auto bg-gradient-to-r from-indigo-400 to-cyan-500 rounded-lg hover:scale-110 transform transition-all duration-300 overflow-hidden shadow-lg">
                {/* Image Placeholder */}
              </div>
              <p className="mt-4 text-lg font-medium">{category}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Shops */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-6">Shops</h2>
        <div className="flex space-x-8">
          {Array(4).fill().map((_, index) => (
            <div
              key={index}
              className="w-1/5 h-24 bg-gradient-to-r from-pink-400 to-purple-500 rounded-lg hover:scale-105 transform transition-all duration-300 overflow-hidden shadow-lg"
            >
              {/* Image Placeholder */}
            </div>
          ))}
        </div>
      </div>

      {/* Free Delivery */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-6">Free Delivery</h2>
        <div className="flex space-x-8">
          {Array(4).fill().map((_, index) => (
            <div
              key={index}
              className="w-1/4 h-24 bg-gradient-to-r from-teal-400 to-lime-500 rounded-lg hover:scale-105 transform transition-all duration-300 overflow-hidden shadow-lg"
            >
              {/* Image Placeholder */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
