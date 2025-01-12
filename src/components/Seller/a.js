import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SellerSideBar from "./SellerSideBar";
import SellerNavbar from "./SellerNavbar";

const SellerHome = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const toggleCollapse = () => setIsCollapsed(!isCollapsed);

    const location = useLocation();
    const locationState = location.state || {};
    const { sellerID: locationSellerID, name: locationSellerName, shopID: locationShopID } = locationState;

    useEffect(() => {
        if (locationSellerID && locationSellerName && locationShopID) {
            localStorage.setItem("sellerID", locationSellerID);
            localStorage.setItem("sellerName", locationSellerName);
            localStorage.setItem("shopID", locationShopID);
        }
    }, [locationSellerID, locationSellerName, locationShopID]);

    const sellerID = localStorage.getItem("sellerID") || "Unknown";
    const sellerName = localStorage.getItem("sellerName") || "Seller";
    const shopID = localStorage.getItem("shopID") || "Unknown";

    console.log("SellerHome received:", { sellerID, sellerName, shopID }); // Debugging line

    return (
        <>
            <SellerNavbar />
            <div className="flex">
                <SellerSideBar
                    isCollapsed={isCollapsed}
                    toggleCollapse={toggleCollapse}
                />
                <div className="flex-1 flex flex-col min-h-screen bg-gray-100 p-8">
                    <div className="p-6 bg-white shadow-lg rounded-lg transform transition duration-500">
                        <h1 className="text-4xl font-extrabold mb-6 text-gray-800 animate-fadeInDown">
                            Welcome, {sellerName}
                        </h1>
                        <p className="text-gray-600">Seller ID: {sellerID}</p>
                        <p className="text-gray-600">Shop ID: {shopID}</p>
                    </div>
                    <div className="mt-8">
                        <h2 className="text-2xl font-bold mb-4 text-gray-800">Dashboard</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="p-6 bg-white shadow-lg rounded-lg">
                                <h3 className="text-xl font-semibold mb-2">Total Sales</h3>
                                <p className="text-gray-600">BDT 1,200,000</p>
                            </div>
                            <div className="p-6 bg-white shadow-lg rounded-lg">
                                <h3 className="text-xl font-semibold mb-2">Pending Orders</h3>
                                <p className="text-gray-600">15 Orders</p>
                            </div>
                            <div className="p-6 bg-white shadow-lg rounded-lg">
                                <h3 className="text-xl font-semibold mb-2">Completed Orders</h3>
                                <p className="text-gray-600">120 Orders</p>
                            </div>
                            <div className="p-6 bg-white shadow-lg rounded-lg">
                                <h3 className="text-xl font-semibold mb-2">New Messages</h3>
                                <p className="text-gray-600">5 Messages</p>
                            </div>
                            <div className="p-6 bg-white shadow-lg rounded-lg">
                                <h3 className="text-xl font-semibold mb-2">Total Products</h3>
                                <p className="text-gray-600">50 Products</p>
                            </div>
                            <div className="p-6 bg-white shadow-lg rounded-lg">
                                <h3 className="text-xl font-semibold mb-2">Revenue</h3>
                                <p className="text-gray-600">BDT 2,500,000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SellerHome;