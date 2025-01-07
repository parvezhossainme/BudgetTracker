import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SellerNavbar from "./SellerNavbar";
import SellerFooter from "./SellerFooter";
import SellerSideBar from "./SellerSideBar";

const SellerOrderHistory = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const toggleCollapse = () => setIsCollapsed(!isCollapsed);

    const location = useLocation();
    const locationState = location.state || {};
    const { sellerId: locationSellerId, name: locationName } = locationState;

    useEffect(() => {
        if (locationSellerId && locationName) {
            localStorage.setItem("sellerId", locationSellerId);
            localStorage.setItem("name", locationName);
        }
    }, [locationSellerId, locationName]);

    const sellerId = localStorage.getItem("sellerId") || "Unknown";
    const name = localStorage.getItem("name") || "Seller";

    console.log("SellerOrderHistory received:", { sellerId, name }); // Debugging line

    return (
        <>
            <SellerNavbar />
            <div className="flex">
                <SellerSideBar
                    isCollapsed={isCollapsed}
                    toggleCollapse={toggleCollapse}
                />
                <div className="flex-1 flex flex-col min-h-screen bg-gray-100 p-8">
                    <div className="bg-white shadow-md rounded-lg p-6 w-full">
                        <h2 className="text-2xl font-bold mb-4 text-center">Order History</h2>
                        {/* Order history content will go here */}
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white">
                                <thead>
                                    <tr>
                                        <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">Order ID</th>
                                        <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">Customer Name</th>
                                        <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">Product</th>
                                        <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">Quantity</th>
                                        <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">Total Price</th>
                                        <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">Order Date</th>
                                        <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Order rows will go here */}
                                    <tr>
                                        <td className="py-2 px-4 border-b border-gray-200">12345</td>
                                        <td className="py-2 px-4 border-b border-gray-200">Parvez Hossain</td>
                                        <td className="py-2 px-4 border-b border-gray-200">Product 1</td>
                                        <td className="py-2 px-4 border-b border-gray-200">2</td>
                                        <td className="py-2 px-4 border-b border-gray-200">200 taka</td>
                                        <td className="py-2 px-4 border-b border-gray-200">2025-01-01</td>
                                        <td className="py-2 px-4 border-b border-gray-200">Delivered</td>
                                    </tr>
                                    {/* Add more rows as needed */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <SellerFooter />
        </>
    );
};

export default SellerOrderHistory;