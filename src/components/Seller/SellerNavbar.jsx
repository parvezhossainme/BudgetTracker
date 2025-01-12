import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const SellerProfileHover = () => {
    return (
        <div className="absolute right-0 mt-2 w-64 bg-white border rounded-lg shadow-lg z-50">
            <div className="p-4 text-center">
                <img
                    src="/path/to/profile-image.jpg"
                    alt="Profile"
                    className="w-16 h-16 rounded-full mx-auto"
                />
                <p className="text-xl font-semibold">Username</p>
                <p className="text-gray-600">0178******4</p>
                <a href="#" className="text-red-500 hover:underline mt-2 block">
                    Click to Get Info
                </a>
            </div>
            <hr />
            <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Favourites
            </a>
            <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Location
            </a>
            <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Languages
            </a>
            <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Switch Account
            </a>
            <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Clear Cache
            </a>
            <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Clear History
            </a>
            <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Help
            </a>
        </div>
    );
};

const SellerNavbar = () => {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        const sellerID = localStorage.getItem("sellerID");
        const name = localStorage.getItem("name");
        console.log("Navigating to home with:", { sellerID, name }); // Debugging line
        navigate("/seller-home");
    };

    const [isProfileHover, setIsProfileHover] = useState(false);

    const handleProfileMouseDown = () => {
        setIsProfileHover(!isProfileHover);
    };

    const handleDocumentMouseDown = (event) => {
        if (!event.target.closest(".profile-menu")) {
            setIsProfileHover(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleDocumentMouseDown);
        return () => {
            document.removeEventListener("mousedown", handleDocumentMouseDown);
        };
    }, []);

    return (
        <nav className="bg-[#79D7BE] text-gray-800 p-4 shadow-lg border-b-4 border-gray-300">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-8">
                    <h1 className="text-2xl font-extrabold text-gray-900">
                        Budget Tracker
                    </h1>
                    <div className="flex space-x-6">
                        <Link
                            to="/seller-home"
                            onClick={handleHomeClick}
                            className="text-gray-800 hover:text-white transition duration-300 transform hover:scale-105 hover:underline decoration-wavy underline-offset-4">
                            Home
                        </Link>
                        {["Profile", "Riders", "About", "Contact"].map(
                            (item, index) => (
                                <Link
                                    key={index}
                                    to={`/seller-${item.toLowerCase()}`}
                                    className="text-gray-800 hover:text-white transition duration-300 transform hover:scale-105 hover:underline decoration-wavy underline-offset-4">
                                    {item}
                                </Link>
                            )
                        )}
                    </div>
                </div>
                <div
                    className="relative profile-menu"
                    onMouseDown={handleProfileMouseDown}>
                    <div className="text-gray-800 cursor-pointer">
                        <i className="fas fa-user-circle text-3xl"></i>
                    </div>
                    {isProfileHover && <SellerProfileHover />}
                </div>
            </div>
        </nav>
    );
};

export default SellerNavbar;