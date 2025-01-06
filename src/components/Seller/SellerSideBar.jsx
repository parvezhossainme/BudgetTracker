// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const SellerSideBar = ({ isCollapsed, toggleCollapse}) => {
//     const navigate = useNavigate();

//     const handleDashboardClick = () => {
//         navigate("/seller-home");
//     };
//     const handleLogout = () => {
//         navigate('/');
//     };

//     const sideBtn = "flex items-center space-x-2 px-4 py-2 hover:bg-white hover:text-gray-800 px-4 py-2 rounded cursor-pointer w-full";

//     return (
//         <div
//             className={`bg-[#2E5077] text-white ${
//                 isCollapsed ? "w-20" : "w-52"
//             } min-h-screen p-4 space-y-8 transition-all duration-300 flex flex-col items-center`}>
//             <button
//                 onClick={toggleCollapse}
//                 className="text-white mb-4 flex items-center justify-center">
//                 <i
//                     className={`fas ${
//                         isCollapsed ? "fa-chevron-right" : "fa-chevron-left"
//                     } text-2xl`}></i>
//             </button>
//             <ul
//                 className={`space-y-7 flex flex-col ${
//                     isCollapsed ? "items-center justify-center" : "items-start"
//                 }`}>
//                 <li
//                     className={sideBtn}
//                     onClick={handleDashboardClick}>
//                     <i className="fas fa-home text-xl"></i>
//                     {!isCollapsed && <span>Dashboard</span>}
//                 </li>
//                 <li className={sideBtn}>
//                     <i className="fas fa-box text-xl"></i>
//                     {!isCollapsed && <span>Products</span>}
//                 </li>
//                 <li className={sideBtn}>
//                     <i className="fas fa-shopping-cart text-xl"></i>
//                     {!isCollapsed && <span>Orders</span>}
//                 </li>
//                 <li className={sideBtn}>
//                     <i className="fas fa-money-bill-wave text-xl"></i>
//                     {!isCollapsed && <span>Payments</span>}
//                 </li>
//                 <li className={sideBtn}>
//                     <i className="fas fa-envelope text-xl"></i>
//                     {!isCollapsed && <span>Messages</span>}
//                 </li>
//                 <li className={sideBtn}>
//                     <i className="fas fa-cog text-xl"></i>
//                     {!isCollapsed && <span>Settings</span>}
//                 </li>
//                 <li className={sideBtn}>
//                     <i className="fas fa-percentage text-xl"></i>
//                     {!isCollapsed && <span>Set Discounts</span>}
//                 </li>
//             </ul>
//             <div className="mt-auto" onClick={handleLogout}>
//                 <button className="flex items-center space-x-2 px-4 py-2 bg-gray-700 rounded text-white hover:bg-gray-600">
//                     <i className="fas fa-sign-out-alt text-xl"></i>
//                     {!isCollapsed && <span>Logout</span>}
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default SellerSideBar;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SellerSideBar = ({ isCollapsed, toggleCollapse }) => {
    const navigate = useNavigate();
    const [showProductOptions, setShowProductOptions] = useState(false);

    const handleDashboardClick = () => {
        navigate("/seller-home");
    };

    const handleProductsClick = () => {
        setShowProductOptions(!showProductOptions);
    };

    const handleAddProductClick = () => {
        navigate("/seller-add-product");
    };

    const handleModifyProductClick = () => {
        navigate("/modify-product");
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
                <li className={sideBtn}>
                    <i className="fas fa-shopping-cart text-xl"></i>
                    {!isCollapsed && <span>Orders</span>}
                </li>
                <li className={sideBtn}>
                    <i className="fas fa-money-bill-wave text-xl"></i>
                    {!isCollapsed && <span>Payments</span>}
                </li>
                <li className={sideBtn}>
                    <i className="fas fa-envelope text-xl"></i>
                    {!isCollapsed && <span>Messages</span>}
                </li>
                <li className={sideBtn}>
                    <i className="fas fa-cog text-xl"></i>
                    {!isCollapsed && <span>Settings</span>}
                </li>
                <li className={sideBtn}>
                    <i className="fas fa-percentage text-xl"></i>
                    {!isCollapsed && <span>Set Discounts</span>}
                </li>
            </ul>
            <div className="mt-auto">
                <button className="flex items-center space-x-2 px-4 py-2 bg-gray-700 rounded text-white hover:bg-gray-600 w-full">
                    <i className="fas fa-sign-out-alt text-xl"></i>
                    {!isCollapsed && <span>Logout</span>}
                </button>
            </div>
            {showProductOptions && (
                <div className="absolute top-32 left-full w-48 gap-y-0 bg-gray-800 bg-opacity-90 flex flex-col items-center justify-center z-50">
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
        </div>
    );
};

export default SellerSideBar;
