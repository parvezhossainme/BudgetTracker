import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CustomerSideBar = ({ isCollapsed, toggleCollapse }) => {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate("/customer-home");
    };

    const handleProfileClick = () => {
        navigate("/customer-profile");
    };

    const handleShopClick = () => {
        navigate("/customer-shop");
    };

    const handleDueClick = () => {
        navigate("/customer-due");
    };

    const handleFavouriteShopsClick = () => {
        navigate("/customer-favourite-shops");
    };

    const handleLogout = () => {
        localStorage.removeItem("customerId");
        localStorage.removeItem("name");
        navigate('/');
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
                <li className={sideBtn} onClick={handleHomeClick}>
                    <i className="fas fa-home text-xl"></i>
                    {!isCollapsed && <span>Home</span>}
                </li>
                <li className={sideBtn} onClick={handleProfileClick}>
                    <i className="fas fa-user text-xl"></i>
                    {!isCollapsed && <span>Profile</span>}
                </li>
                <li className={sideBtn} onClick={handleShopClick}>
                    <i className="fas fa-store text-xl"></i>
                    {!isCollapsed && <span>Shop</span>}
                </li>
                <li className={sideBtn} onClick={handleDueClick}>
                    <i className="fas fa-money-bill-wave text-xl"></i>
                    {!isCollapsed && <span>Due</span>}
                </li>
                <li className={sideBtn} onClick={handleFavouriteShopsClick}>
                    <i className="fas fa-heart text-xl"></i>
                    {!isCollapsed && <span>Favourite Shops</span>}
                </li>
            </ul>
            <div className="mt-auto">
                <button className="flex items-center space-x-2 px-4 py-2 bg-gray-700 rounded text-white hover:bg-gray-600 w-full" onClick={handleLogout}>
                    <i className="fas fa-sign-out-alt text-xl"></i>
                    {!isCollapsed && <span>Logout</span>}
                </button>
            </div>
        </div>
    );
};

export default CustomerSideBar;