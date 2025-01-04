import React from 'react';
import { useNavigate } from 'react-router-dom';

const CustomerNavbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Perform any logout logic here, such as clearing authentication tokens
        navigate('/');
    };

    return (
        <header className="bg-white shadow-md py-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="logo">
                    <a href="/">
                        <img src="/images/logo.png" alt="logo" className="h-12" />
                    </a>
                </div>
                <div className="search-bar hidden lg:flex items-center bg-gray-100 rounded-lg px-4 py-2">
                    <select className="bg-transparent border-none text-gray-600 focus:outline-none">
                        <option>All Categories</option>
                        <option>Groceries</option>
                        <option>Drinks</option>
                        <option>Chocolates</option>
                    </select>
                    <input
                        type="text"
                        className="bg-transparent border-none ml-4 focus:outline-none w-full"
                        placeholder="Search for products"
                    />
                </div>
                <button onClick={handleLogout} className="text-red-600 hover:underline">Log Out</button>
            </div>
        </header>
    );
};

export default CustomerNavbar;