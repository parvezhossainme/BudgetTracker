import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SellerNavbar from "./SellerNavbar";
import SellerFooter from "./SellerFooter";
import SellerSideBar from "./SellerSideBar";

const SellerAbout = () => {
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

    console.log("SellerAbout received:", { sellerId, name }); // Debugging line

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
                        <h2 className="text-2xl font-bold mb-4 text-center">About MD Parvez Hossain</h2>
                        <div className="space-y-4">
                            <div className="bg-gray-100 p-4 rounded-lg">
                                <h3 className="text-xl font-semibold mb-2">Profile</h3>
                                <p className="text-gray-700">MD Parvez Hossain is a dedicated and experienced seller with a passion for providing high-quality products and excellent customer service. With years of experience in the industry, Parvez has built a reputation for reliability and trustworthiness.</p>
                            </div>
                            <div className="bg-gray-100 p-4 rounded-lg">
                                <h3 className="text-xl font-semibold mb-2">Experience</h3>
                                <p className="text-gray-700">Parvez has over 10 years of experience in the e-commerce industry, specializing in electronics, clothing, and home appliances. He has successfully managed multiple online stores and consistently achieved high customer satisfaction ratings.</p>
                            </div>
                            <div className="bg-gray-100 p-4 rounded-lg">
                                <h3 className="text-xl font-semibold mb-2">Achievements</h3>
                                <ul className="list-disc list-inside text-gray-700">
                                    <li>Awarded "Top Seller of the Year" for three consecutive years.</li>
                                    <li>Maintained a 4.9-star rating across all platforms.</li>
                                    <li>Successfully launched and scaled multiple product lines.</li>
                                </ul>
                            </div>
                            <div className="bg-gray-100 p-4 rounded-lg">
                                <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
                                <p className="text-gray-700"><strong>Email:</strong> parvez@example.com</p>
                                <p className="text-gray-700"><strong>Phone:</strong> +880 1234 567890</p>
                                <p className="text-gray-700"><strong>Address:</strong> 123 Main Street, Dhaka, Bangladesh</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SellerFooter />
        </>
    );
};

export default SellerAbout;