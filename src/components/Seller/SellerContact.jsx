import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SellerNavbar from "./SellerNavbar";
import SellerFooter from "./SellerFooter";
import SellerSideBar from "./SellerSideBar";

const SellerContact = () => {
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

    console.log("SellerContact received:", { sellerId, name }); // Debugging line

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
                        <h2 className="text-2xl font-bold mb-4 text-center">Contact Information</h2>
                        {/* Contact information content will go here */}
                        <div className="space-y-4">
                            <div className="bg-gray-100 p-4 rounded-lg">
                                <h3 className="text-xl font-semibold mb-2">Contact 1</h3>
                                <p className="text-gray-700">Name: MD Parvez Hossain</p>
                                <p className="text-gray-700">Phone: +880 1234 567890</p>
                                <p className="text-gray-700">Email: parvez@example.com</p>
                                <p className="text-gray-700">Address: 123 Main Street, Dhaka, Bangladesh</p>
                            </div>
                            <div className="bg-gray-100 p-4 rounded-lg">
                                <h3 className="text-xl font-semibold mb-2">Contact 2</h3>
                                <p className="text-gray-700">Name: Ayesha Rahman</p>
                                <p className="text-gray-700">Phone: +880 9876 543210</p>
                                <p className="text-gray-700">Email: ayesha@example.com</p>
                                <p className="text-gray-700">Address: 456 Elm Street, Dhaka, Bangladesh</p>
                            </div>
                            {/* Add more contacts as needed */}
                        </div>
                    </div>
                </div>
            </div>
            <SellerFooter />
        </>
    );
};

export default SellerContact;