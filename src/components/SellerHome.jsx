import React from 'react';
import { useLocation } from 'react-router-dom';

const SellerHome = () => {
    const location = useLocation();
    console.log('Location state:', location.state); // Debugging line
    const { name, sellerId } = location.state || { name: 'Seller', sellerId: 'Unknown' }; // Default values if not provided

    return (
        <div>
            <div className="h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-3xl font-bold">Hello, {name}! Welcome to Seller Home</h1>
                    <p className="text-xl mt-4">Your Seller ID is: {sellerId}</p>
                </div>
            </div>
        </div>
    );
};

export default SellerHome;