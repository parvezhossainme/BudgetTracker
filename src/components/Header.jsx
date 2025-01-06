import React, { useState, useRef, useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Header = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const dropdownRef = useRef(null);

    const navigate = useNavigate();
    const [isJoining, setIsJoining] = useState(false);
    const handleJoinNow = () => {
        setIsJoining(true);
        navigate("/signup");
    };

    const location = useLocation();
    const isSignUpPage = location.pathname.startsWith("/signup");

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setDropdownVisible(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <header className="bg-[#79D7BE] text-black shadow-lg">
            <div className="container mx-auto px-6 py-5 flex justify-between items-center space-x-4">
                <h1 className="text-2xl font-bold tracking-wide ml-20 ">
                    BUDGET TRACKER                   
                </h1>
                <nav className="flex items-center space-x-6">
                    <Link
                        to="/"
                        className="hover:text-white text-xl transition-all duration-300">
                        HOME
                    </Link>
                </nav>

                <div className="flex ml-auto space-x-6 items-center">
                    <div className="space-x-4">
                        <a
                            href="https://discord.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black hover:text-white transition-all duration-300">
                            <i className="fab fa-discord text-xl"></i>
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black hover:text-white transition-all duration-300">
                            <i className="fab fa-twitter text-xl"></i>
                        </a>
                    </div>
                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={toggleDropdown}
                            className="bg-white text-black px-4 py-2 rounded-full hover:bg-[#66C1A9] hover:ring-2 hover:ring-[#66C1A9] transition-all duration-300">
                            Sign In
                        </button>
                        {dropdownVisible && (
                            <div className="absolute right-0 mt-3 w-56 bg-white border border-gray-300 rounded-lg shadow-lg">
                                <Link
                                    to="/signin-customer"
                                    className="block px-4 py-2 text-black hover:bg-gray-200 transition-all duration-300">
                                    Sign In as Customer
                                </Link>
                                <Link
                                    to="/signin-seller"
                                    className="block px-4 py-2 text-black hover:bg-gray-200 transition-all duration-300">
                                    Sign In as Seller
                                </Link>
                                <Link
                                    to="/signin-parvez"
                                    className="block px-4 py-2 text-black hover:bg-gray-200 transition-all duration-300">
                                    Sign In as Parvez
                                </Link>
                            </div>
                        )}
                    </div>
                    <button
                        onClick={handleJoinNow}
                        className={`px-6 py-2 rounded-full text-white transition-all duration-300 ${
                            isSignUpPage
                                ? "bg-[#66C1A9] hover:bg-[#55A895]"
                                : "bg-[#5CA89E] hover:bg-[#4E9B91]"
                        }`}>
                        {isSignUpPage ? "Account Sign Up Ongoing" : "Join Now"}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
