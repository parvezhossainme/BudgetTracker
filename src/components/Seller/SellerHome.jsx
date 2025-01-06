import React from "react";
import { useLocation } from "react-router-dom";

import SellerNavbar from "./SellerNavbar";
import SellerFooter from "./SellerFooter";

const Sell = () => {
  const location = useLocation();
  const { name, sellerId } = location.state || {
    name: "Seller",
    sellerId: "Unknown",
  };

  return (
    <div className="container mx-auto p-6 bg-white shadow rounded-lg">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold">Welcome, {name}</h2>
          <p className="text-gray-600">Seller ID: {sellerId}</p>
        </div>
        <div className="bg-green-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold">Total Sales</h2>
          <p className="text-gray-600">$5000</p>
        </div>
        <div className="bg-yellow-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold">Pending Orders</h2>
          <p className="text-gray-600">12</p>
        </div>
        <div className="bg-red-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold">Low Stock Products</h2>
          <p className="text-gray-600">5</p>
        </div>
        <div className="bg-purple-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold">Messages</h2>
          <p className="text-gray-600">3 New</p>
        </div>
        <div className="bg-teal-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold">Current Discounts</h2>
          <p className="text-gray-600">20% on selected items</p>
        </div>
      </div>
    </div>
  );
};

const ProductsLowStock = () => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h2 className="text-xl font-bold mb-4">Products (LOW STOCK)</h2>
    <ul className="space-y-2">
      <li>Product 1</li>
      <li>Product 2</li>
      <li>Product 3</li>
    </ul>
  </div>
);

const TopSellingProducts = () => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h2 className="text-xl font-bold mb-4">Top Selling Products</h2>
    <ul className="space-y-2">
      <li>Product A</li>
      <li>Product B</li>
      <li>Product C</li>
    </ul>
  </div>
);

const CurrentDiscounts = () => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h2 className="text-xl font-bold mb-4">Current Discounts</h2>
    <ul className="space-y-2">
      <li>Discount 1: 10% off</li>
      <li>Discount 2: 15% off</li>
      <li>Discount 3: 20% off</li>
    </ul>
  </div>
);

const NotificationsAlerts = () => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h2 className="text-xl font-bold mb-4">Notifications & Alerts</h2>
    <ul className="space-y-2">
      <li>Mst. Ayesha has sent urgent messages!</li>
      <li>Customer XYZ gives a review on Product ABC.</li>
    </ul>
  </div>
);

const SellerHome = () => {
  const location = useLocation();
  console.log("Location state:", location.state); // Debugging line
  const { name, sellerId } = location.state || {
    name: "Seller",
    sellerId: "Unknown",
  }; // Default values if not provided

  return (
    <>
      <SellerNavbar />
      <div className="flex flex-col min-h-screen bg-gray-100 p-8">
        <Sell />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <div className="space-y-8">
            <ProductsLowStock />
            <CurrentDiscounts />
          </div>
          <div className="space-y-8">
            <TopSellingProducts />
          </div>
        </div>
        <div className="space-y-8 mt-8">
            <NotificationsAlerts />
        </div>
      </div>
      <SellerFooter />
    </>
  );
};
export default SellerHome;
