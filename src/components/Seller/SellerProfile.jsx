import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import SellerNavbar from "./SellerNavbar";
import SellerFooter from "./SellerFooter";
import SellerSideBar from "./SellerSideBar"; // Ensure this import matches your file structure

const SellerInfo = () => {
    return (
        <div className="min-h-screen mx-auto p-6 bg-white shadow-lg rounded-lg w-full">
            <div className="flex items-center space-x-6 mb-6 w-full">
                <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-gray-700 text-2xl">A</span>{" "}
                    {/* Placeholder for profile image */}
                </div>
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">
                        Seller Name
                    </h1>
                    <p className="text-gray-600">Seller ID: 12345</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">
                        Contact Information
                    </h2>
                    <p className="text-gray-700">Email: seller@example.com</p>
                    <p className="text-gray-700">Phone: (123) 456-7890</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">
                        Business Information
                    </h2>
                    <p className="text-gray-700">Business Name: ABC Corp</p>
                    <p className="text-gray-700">
                        Address: 123 Main St, City, Country
                    </p>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">
                        Account Details
                    </h2>
                    <p className="text-gray-700">
                        Account Created: January 1, 2020
                    </p>
                    <p className="text-gray-700">Last Login: March 15, 2023</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">
                        Other Information
                    </h2>
                    <p className="text-gray-700">
                        Additional details can go here.
                    </p>
                </div>
            </div>
        </div>
    );
};

const SellerProfile = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const toggleCollapse = () => setIsCollapsed(!isCollapsed);

    const location = useLocation();
    const locationState = location.state || {};
    const { sellerID: locationSellerId, name: locationName } = locationState;

    useEffect(() => {
        if (locationSellerId && locationName) {
            localStorage.setItem("sellerID", locationSellerId);
            localStorage.setItem("name", locationName);
        }
    }, [locationSellerId, locationName]);

    const sellerID = localStorage.getItem("sellerID") || "Unknown";
    const name = localStorage.getItem("name") || "Seller";

    console.log("SellerProfile received:", { sellerID, name }); // Debugging line

    return (
        <>
            <SellerNavbar />
            <div className="flex">
                <SellerSideBar
                    isCollapsed={isCollapsed}
                    toggleCollapse={toggleCollapse}
                />
                <div className="flex-1 flex flex-col min-h-screen bg-gray-100 p-8">
                    <SellerInfo />
                </div>
            </div>
            <SellerFooter />
        </>
    );
};

export default SellerProfile;
