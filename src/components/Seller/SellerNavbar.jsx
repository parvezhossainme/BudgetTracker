import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SellerNavbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Perform any logout logic here, such as clearing authentication tokens
        navigate('/');
    };

    return (
        <nav className="bg-purple-200 text-black shadow-lg p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">Seller Dashboard</h1>
                <div className="flex space-x-4">
                    <Link to="/seller-home" className="hover:underline">Home</Link>
                    <Link to="/seller-profile" className="hover:underline">Profile</Link>
                    <Link to="/seller-products" className="hover:underline">Products</Link>
                    <Link to="/seller-orders" className="hover:underline">Orders</Link>
                    <button onClick={handleLogout} className="hover:underline text-red-600">Log Out</button>
                </div>
            </div>
        </nav>
    );
};

export default SellerNavbar;