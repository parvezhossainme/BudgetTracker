import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SellerNavbar from "./SellerNavbar";
import SellerFooter from "./SellerFooter";
import SellerSideBar from "./SellerSideBar";

const SellerSettings = () => {
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

    console.log("SellerSettings received:", { sellerId, name }); // Debugging line

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
                        <h2 className="text-2xl font-bold mb-4 text-center">Settings</h2>
                        {/* Settings content will go here */}
                        <div className="space-y-4">
                            <div className="bg-gray-100 p-4 rounded-lg">
                                <h3 className="text-xl font-semibold mb-2">Account Settings</h3>
                                <p className="text-gray-700">Manage your account settings and set e-mail preferences.</p>
                                <button className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-lg">Edit Account Settings</button>
                            </div>
                            <div className="bg-gray-100 p-4 rounded-lg">
                                <h3 className="text-xl font-semibold mb-2">Privacy Settings</h3>
                                <p className="text-gray-700">Control your privacy settings and manage your data.</p>
                                <button className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-lg">Edit Privacy Settings</button>
                            </div>
                            <div className="bg-gray-100 p-4 rounded-lg">
                                <h3 className="text-xl font-semibold mb-2">Notification Settings</h3>
                                <p className="text-gray-700">Set your notification preferences and alerts.</p>
                                <button className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-lg">Edit Notification Settings</button>
                            </div>
                            <div className="bg-gray-100 p-4 rounded-lg">
                                <h3 className="text-xl font-semibold mb-2">Security Settings</h3>
                                <p className="text-gray-700">Update your security settings and change your password.</p>
                                <button className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-lg">Edit Security Settings</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SellerFooter />
        </>
    );
};

export default SellerSettings;