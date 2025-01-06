import React from 'react';

const SellerFooter = () => {
  return (
    <footer className="bg-[#4DA1A9] p-4 text-center text-white mt-auto border-t-4 border-white shadow-lg">
      <div className="container mx-auto">
        <p className="text-lg font-semibold">&copy; 2025 Budget Tracker. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition duration-300">
            <i className="fab fa-discord text-2xl"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition duration-300">
            <i className="fab fa-twitter text-2xl"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition duration-300">
            <i className="fab fa-facebook text-2xl"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default SellerFooter;