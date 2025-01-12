import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SellerNavbar from "./SellerNavbar";
import SellerFooter from "./SellerFooter";
import SellerSideBar from "./SellerSideBar";

const SellerSetDiscounts = () => {
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

    console.log("SellerSetDiscounts received:", { sellerID, name }); // Debugging line

    const [productCategory, setProductCategory] = useState('');
    const [productId, setProductId] = useState('');
    const [discount, setDiscount] = useState('');

    const handleSetDiscount = () => {
        // Logic to set discount for the product
        console.log(`Setting discount for Product ID: ${productId}, Category: ${productCategory}, Discount: ${discount}%`);
    };

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
                        <h2 className="text-2xl font-bold mb-4 text-center">Set Discounts</h2>
                        {/* Set discounts content will go here */}
                        <div className="space-y-4">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Product Category</label>
                                <select
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    value={productCategory}
                                    onChange={(e) => setProductCategory(e.target.value)}
                                >
                                    <option value="">Select Category</option>
                                    <option value="Electronics">Electronics</option>
                                    <option value="Clothing">Clothing</option>
                                    <option value="Home Appliances">Home Appliances</option>
                                    {/* Add more categories as needed */}
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Product ID</label>
                                <input
                                    type="text"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    value={productId}
                                    onChange={(e) => setProductId(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Discount (%)</label>
                                <input
                                    type="number"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    value={discount}
                                    onChange={(e) => setDiscount(e.target.value)}
                                />
                            </div>
                            <div className="flex justify-between">
                                <button
                                    type="button"
                                    className="bg-red-500 text-white py-2 px-4 rounded-lg"
                                    onClick={() => {
                                        setProductCategory('');
                                        setProductId('');
                                        setDiscount('');
                                    }}
                                >
                                    CANCEL
                                </button>
                                <button
                                    type="button"
                                    className="bg-green-500 text-white py-2 px-4 rounded-lg"
                                    onClick={handleSetDiscount}
                                >
                                    SET DISCOUNT
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SellerFooter />
        </>
    );
};

export default SellerSetDiscounts;