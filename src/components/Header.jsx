import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    // Close dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownVisible(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header className="bg-purple-200 text-black shadow-lg">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <h1 className="text-xl font-bold">BUDGET TRACKER</h1>
                <nav className="flex items-center space-x-4">
                    <Link to="/" className="hover:underline text-sm">HOME</Link>
                    <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-gray-700">
                        <i className="fab fa-discord text-xl"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-700">
                        <i className="fab fa-twitter text-xl"></i>
                    </a>
                </nav>
                <div className="flex ml-auto space-x-2">
                    <div className="relative" ref={dropdownRef}>
                        <button onClick={toggleDropdown} className="border border-black px-4 py-1 rounded">Sign In</button>
                        {dropdownVisible && (
                            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg">
                                <Link to="/signin-customer" className="block px-4 py-2 text-black hover:bg-gray-200">Sign In as Customer</Link>
                                <Link to="/signin-seller" className="block px-4 py-2 text-black hover:bg-gray-200">Sign In as Seller</Link>
                                <Link to="/signin-parvez" className="block px-4 py-2 text-black hover:bg-gray-200">Sign In as Parvez</Link>
                            </div>
                        )}
                    </div>
                    <button className="bg-green-700 text-white px-4 py-1 rounded">Join Now</button>
                </div>
            </div>
        </header>
    );
};

export default Header;