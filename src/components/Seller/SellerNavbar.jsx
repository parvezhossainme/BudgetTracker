import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SellerNavbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Perform any logout logic here, such as clearing authentication tokens
        navigate('/');
    };

    return (
        <nav className="bg-green-500 text-white p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-6">
                    <h1 className="text-xl font-bold">Budget Tracker</h1>
                    <div className="flex space-x-4">
                        <Link to="/seller-home" className="hover:underline">Home</Link>
                        <Link to="/seller-profile" className="hover:underline">Profile</Link>
                        <Link to="/seller-products" className="hover:underline">Products</Link>
                        <Link to="/seller-orders" className="hover:underline">Orders</Link>
                        <Link to="/about" className="hover:underline">About</Link>
                        <Link to="/contact" className="hover:underline">Contact</Link>
                    </div>
                </div>
                <button 
                    onClick={handleLogout} 
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-2 rounded">
                    Log Out
                </button>
            </div>
        </nav>
    );
};

export default SellerNavbar;
