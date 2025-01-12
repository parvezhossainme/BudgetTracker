import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CustomerSideBar from "./CustomerSideBar";

const CustomerHome = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const toggleCollapse = () => setIsCollapsed(!isCollapsed);

    const location = useLocation();
    const locationState = location.state || {};
    const { customerID: locationcustomerID, name: locationcustomerName } = locationState;

    useEffect(() => {
        if (locationcustomerID && locationcustomerName) {
            localStorage.setItem("customerID", locationcustomerID);
            localStorage.setItem("customerName", locationcustomerName);
        }
    }, [locationcustomerID, locationcustomerName]);

    const customerID = localStorage.getItem("customerID") || "Unknown";
    const customerName = localStorage.getItem("customerName") || "Customer";

    return (
        <>
            <div className="flex">
                <CustomerSideBar
                    isCollapsed={isCollapsed}
                    toggleCollapse={toggleCollapse}
                    customerID={customerID}
                    name={customerName}
                />
                <div className="flex-1 flex flex-col min-h-screen bg-gradient-to-r from-blue-100 to-blue-200 p-8">
                    <div className="p-6 bg-white shadow-lg rounded-lg transform transition duration-500">
                        <h1 className="text-4xl font-extrabold mb-6 text-gray-800 animate-fadeInDown">
                            Welcome, {customerName}
                        </h1>
                        <p className="text-gray-600">Customer ID: {customerID}</p>
                    </div>
                    <CustomerHomeOffers />
                </div>
            </div>
        </>
    );
};

const CustomerHomeOffers = () => {
  return (
      <div className="p-8  min-h-screen">
          <div className="grid grid-cols-3 gap-8">
              {/* News & Updates Section */}
              <div className="col-span-2">
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">News & Updates</h2>
                  <div className="bg-gradient-to-r from-pink-500 to-red-500 rounded-lg h-48 flex items-center justify-center shadow-xl transform transition-transform hover:scale-105 hover:shadow-2xl">
                      <span className="text-white text-3xl font-bold animate-pulse">Image Here</span>
                  </div>
              </div>
              {/* Sponsor Section */}
              <div className="flex items-center justify-center mt-8 w-full">
                  <div className="bg-white rounded-lg p-8 flex items-center w-full justify-center flex-col shadow-xl transform transition-transform hover:scale-105 hover:shadow-2xl">
                      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full w-20 h-20 flex items-center justify-center animate-bounce">
                          <span className="text-white text-3xl font-bold">$</span>
                      </div>
                      <p className="text-xl font-bold mt-4 text-gray-700">SPONSOR</p>
                  </div>
              </div>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-gray-800">Special Offers & Discount</h2>
          <div className="grid grid-cols-3 gap-4">
              {["Offer 1", "Offer 2", "Offer 3"].map((offer, index) => (
                  <div
                      key={index}
                      className={`bg-gradient-to-r ${
                          index % 2 === 0 ? "from-blue-500 to-teal-500" : "from-yellow-500 to-orange-500"
                      } rounded-lg h-48 flex items-center justify-center shadow-xl transform transition-transform hover:scale-105 hover:shadow-2xl`}
                  >
                      <span className={`text-white text-3xl font-bold`}>{offer}</span>
                  </div>
              ))}
          </div>
      </div>
  );
};

export default CustomerHome;
