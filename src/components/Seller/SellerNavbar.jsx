import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SellerNavbar = () => {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        const sellerId = localStorage.getItem("sellerId");
        const name = localStorage.getItem("name");
        console.log("Navigating to home with:", { sellerId, name }); // Debugging line
        navigate("/seller-home");
    };

    // const handleLogout = () => {
    //     localStorage.removeItem("sellerId");
    //     localStorage.removeItem("name");
    //     navigate('/');
    // };

    return (
        <nav className="bg-[#79D7BE] text-gray-800 p-4 shadow-lg border-b-4 border-gray-300">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-8">
                    <h1 className="text-2xl font-extrabold text-gray-900">Budget Tracker</h1>
                    <div className="flex space-x-6">
                        <Link
                            to="/seller-home"
                            onClick={handleHomeClick}
                            className="text-gray-800 hover:text-white transition duration-300 transform hover:scale-105 hover:underline decoration-wavy underline-offset-4"
                        >
                            Home
                        </Link>
                        {['Profile', 'Riders', 'Orders', 'About', 'Contact'].map((item, index) => (
                            <Link
                                key={index}
                                to={`/seller-${item.toLowerCase()}`}
                                className="text-gray-800 hover:text-white transition duration-300 transform hover:scale-105 hover:underline decoration-wavy underline-offset-4"
                            >
                                {item}
                            </Link>
                        ))}
                    </div>
                </div>
                {/* <button
                    onClick={handleLogout}
                    className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg shadow-md transition duration-300 transform hover:scale-110 hover:shadow-xl"
                >
                    Logout
                </button> */}
            </div>
        </nav>
    );
};

export default SellerNavbar;