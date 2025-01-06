import React from 'react';

const Home = () => {
  return (
    <div className="bg-[#F6F4F0] min-h-screen p-6">
      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search for Product......."
          className="w-3/4 p-2 border rounded-l"
        />
        <button className="p-2 bg-white border border-l-0 rounded-r">
          🔍
        </button>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Special Offers & Discounts */}
        <div className="col-span-2">
          <h2 className="text-lg font-bold mb-4">Special Offers & Discount</h2>
          <div className="flex space-x-4">
            <div className="w-1/3 h-40 bg-slate-300 rounded-lg"></div>
            <div className="w-1/3 h-40 bg-slate-300 rounded-lg"></div>
            <div className="w-1/3 h-40 bg-slate-300 rounded-lg"></div>
          </div>
        </div>

        {/* News & Updates */}
        <div>
          <h2 className="text-lg font-bold mb-4">News & Updates</h2>
          <div className="w-full h-40 bg-slate-300 rounded-lg"></div>
        </div>
      </div>

      {/* Product Category */}
      <div className="mt-8">
        <h2 className="text-lg font-bold mb-4">Product Category</h2>
        <div className="flex space-x-4">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto bg-slate-300 rounded-lg"></div>
            <p className="mt-2">Fast Food</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 mx-auto bg-slate-300 rounded-lg"></div>
            <p className="mt-2">Chinese</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 mx-auto bg-slate-300 rounded-lg"></div>
            <p className="mt-2">Vegetable</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 mx-auto bg-slate-300 rounded-lg"></div>
            <p className="mt-2">T-shirts</p>
          </div>
        </div>
      </div>

      {/* Shops */}
      <div className="mt-8">
        <h2 className="text-lg font-bold mb-4">Shops</h2>
        <div className="flex space-x-4">
          <div className="w-1/5 h-20 bg-slate-300 rounded-lg"></div>
          <div className="w-1/5 h-20 bg-slate-300 rounded-lg"></div>
          <div className="w-1/5 h-20 bg-slate-300 rounded-lg"></div>
          <div className="w-1/5 h-20 bg-slate-300 rounded-lg"></div>
        </div>
      </div>

      {/* Free Delivery */}
      <div className="mt-8">
        <h2 className="text-lg font-bold mb-4">Free Delivery</h2>
        <div className="flex space-x-4">
          <div className="w-1/4 h-20 bg-slate-300 rounded-lg"></div>
          <div className="w-1/4 h-20 bg-slate-300 rounded-lg"></div>
          <div className="w-1/4 h-20 bg-slate-300 rounded-lg"></div>
          <div className="w-1/4 h-20 bg-slate-300 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
