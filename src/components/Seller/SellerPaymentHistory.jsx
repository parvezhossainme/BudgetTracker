import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SellerNavbar from "./SellerNavbar";
import SellerFooter from "./SellerFooter";
import SellerSideBar from "./SellerSideBar";

const SellerPaymentHistory = () => {
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

    console.log("SellerPaymentHistory received:", { sellerId, name }); // Debugging line

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
                        <h2 className="text-2xl font-bold mb-4 text-center">Payment History</h2>
                        {/* Payment history content will go here */}
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white">
                                <thead>
                                    <tr>
                                        <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">Payment ID</th>
                                        <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">Customer Name</th>
                                        <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">Amount (Taka)</th>
                                        <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">Payment Date</th>
                                        <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Payment history rows will go here */}
                                    <tr>
                                        <td className="py-2 px-4 border-b border-gray-200">12345</td>
                                        <td className="py-2 px-4 border-b border-gray-200">Roza Roza</td>
                                        <td className="py-2 px-4 border-b border-gray-200">2000 Taka</td>
                                        <td className="py-2 px-4 border-b border-gray-200">2025-01-01</td>
                                        <td className="py-2 px-4 border-b border-gray-200">Completed</td>
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

export default SellerPaymentHistory;