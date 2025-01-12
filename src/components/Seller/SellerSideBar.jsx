import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const SellerSideBar = ({ isCollapsed, toggleCollapse }) => {
    const navigate = useNavigate();

    const productRef = useRef(null);
    const orderRef = useRef(null);
    const paymentRef = useRef(null);

    const handleDashboardClick = () => {
        navigate("/seller-home");
    };

    const [showProductOptions, setShowProductOptions] = useState(false);
    const handleProductsClick = () => {
        setShowProductOptions(!showProductOptions);
        setShowOrderOptions(false);
        setShowPaymentOptions(false);
    };
    const handleAddProductClick = () => {
        navigate("/seller-add-product");
    };
    const handleModifyProductClick = () => {
        navigate("/seller-modify-product");
    };

    const [showOrderOptions, setShowOrderOptions] = useState(false);
    const handleOrdersClick = () => {
        setShowOrderOptions(!showOrderOptions);
        setShowProductOptions(false);
        setShowPaymentOptions(false);
    };
    const handlePendingOrderClick = () => {
        navigate("/seller-pending-orders");
    };
    const handleOrdersHistoryClick = () => {
        navigate("/seller-order-history");
    };

    const [showPaymentOptions, setShowPaymentOptions] = useState(false);
    const handlePaymentsClick = () => {
        setShowPaymentOptions(!showPaymentOptions);
        setShowProductOptions(false);
        setShowOrderOptions(false);
    };
    const handleDuePaymentsClick = () => {
        navigate("/seller-due-payments");
    };
    const handlePaymentsHistoryClick = () => {
        navigate("/seller-payments-history");
    };

    const handleMessagesClick = () => {
        navigate("/seller-messages");
    };

    const handleSettingsClick = () => {
        navigate("/seller-settings");
    };

    const handleSetDiscountsClick = () => {
        navigate("/seller-set-discounts");
    };

    const handleClickOutside = (event) => {
        if (productRef.current && !productRef.current.contains(event.target)) {
            setShowProductOptions(false);
        }
        if (orderRef.current && !orderRef.current.contains(event.target)) {
            setShowOrderOptions(false);
        }
        if (paymentRef.current && !paymentRef.current.contains(event.target)) {
            setShowPaymentOptions(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("sellerID");
        localStorage.removeItem("sellerName");
        navigate("/");
    };

    const sideBtn =
        "flex items-center space-x-2 px-4 py-2 hover:bg-white hover:text-gray-800 rounded cursor-pointer w-full";

    return (
        <div
            className={`relative bg-[#2E5077] text-white ${
                isCollapsed ? "w-20" : "w-52"
            } min-h-screen p-4 space-y-8 transition-all duration-300 flex flex-col items-center`}>
            <button
                onClick={toggleCollapse}
                className="text-white mb-4 flex items-center justify-center">
                <i
                    className={`fas ${
                        isCollapsed ? "fa-chevron-right" : "fa-chevron-left"
                    } text-2xl`}></i>
            </button>
            <ul
                className={`space-y-7 flex flex-col ${
                    isCollapsed ? "items-center justify-center" : "items-start"
                }`}>
                <li className={sideBtn} onClick={handleDashboardClick}>
                    <i className="fas fa-home text-xl"></i>
                    {!isCollapsed && <span>Dashboard</span>}
                </li>
                <li className={sideBtn} onClick={handleProductsClick}>
                    <i className="fas fa-box text-xl"></i>
                    {!isCollapsed && <span>Products</span>}
                </li>
                <li className={sideBtn} onClick={handleOrdersClick}>
                    <i className="fas fa-shopping-cart text-xl"></i>
                    {!isCollapsed && <span>Orders</span>}
                </li>
                <li className={sideBtn} onClick={handlePaymentsClick}>
                    <i className="fas fa-money-bill-wave text-xl"></i>
                    {!isCollapsed && <span>Payments</span>}
                </li>
                <li className={sideBtn} onClick={handleMessagesClick}>
                    <i className="fas fa-envelope text-xl"></i>
                    {!isCollapsed && <span>Messages</span>}
                </li>
                <li className={sideBtn} onClick={handleSettingsClick}>
                    <i className="fas fa-cog text-xl"></i>
                    {!isCollapsed && <span>Settings</span>}
                </li>
                <li className={sideBtn} onClick={handleSetDiscountsClick}>
                    <i className="fas fa-percentage text-xl"></i>
                    {!isCollapsed && <span>Set Discounts</span>}
                </li>
            </ul>
            <div className="mt-auto">
                <button
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-700 rounded text-white hover:bg-gray-600 w-full"
                    onClick={handleLogout}>
                    <i className="fas fa-sign-out-alt text-xl"></i>
                    {!isCollapsed && <span>Logout</span>}
                </button>
            </div>
            {showProductOptions && (
                <div
                    ref={productRef}
                    className="absolute top-32 left-full w-48 gap-y-0 bg-gray-800 bg-opacity-90 flex flex-col items-center justify-center z-50 ml-0.5 rounded-full">
                    <button
                        className="flex items-center space-x-2 px-4 py-2 bg-gray-700 rounded text-white hover:bg-gray-600 w-full "
                        onClick={handleAddProductClick}>
                        <i className="fas fa-plus text-xl"></i>
                        <span>Add Product</span>
                    </button>
                    <button
                        className="flex items-center space-x-2 px-4 py-2 bg-gray-700 rounded text-white hover:bg-gray-600 w-full"
                        onClick={handleModifyProductClick}>
                        <i className="fas fa-edit text-xl"></i>
                        <span>Modify Product</span>
                    </button>
                </div>
            )}

            {showOrderOptions && (
                <div
                    ref={orderRef}
                    className="absolute top-48 left-full w-48 gap-y-0 bg-gray-800 bg-opacity-90 flex flex-col items-center justify-center z-50 ml-0.5 rounded-full">
                    <button
                        className="flex items-center space-x-2 px-4 py-2 bg-gray-700 rounded text-white hover:bg-gray-600 w-full "
                        onClick={handlePendingOrderClick}>
                        <i className="fas fa-plus text-xl"></i>
                        <span> Pending Orders </span>
                    </button>
                    <button
                        className="flex items-center space-x-2 px-4 py-2 bg-gray-700 rounded text-white hover:bg-gray-600 w-full"
                        onClick={handleOrdersHistoryClick}>
                        <i className="fas fa-edit text-xl"></i>
                        <span> Orders History </span>
                    </button>
                </div>
            )}

            {showPaymentOptions && (
                <div
                    ref={paymentRef}
                    className="absolute top-64 ml-0.5 left-full w-48  gap-y-0 bg-gray-800 bg-opacity-90 flex flex-col items-center justify-center z-50 rounded-full">
                    <button
                        className="flex items-center space-x-2 px-4 py-2 bg-gray-700 rounded text-white hover:bg-gray-600 w-full "
                        onClick={handleDuePaymentsClick}>
                        <i className="fas fa-plus text-xl"></i>
                        <span> Due Payments </span>
                    </button>
                    <button
                        className="flex items-center space-x-2 px-4 py-2 bg-gray-700 rounded text-white hover:bg-gray-600 w-full"
                        onClick={handlePaymentsHistoryClick}>
                        <i className="fas fa-edit text-xl"></i>
                        <span> Payments History </span>
                    </button>
                </div>
            )}
        </div>
    );
};

export default SellerSideBar;
