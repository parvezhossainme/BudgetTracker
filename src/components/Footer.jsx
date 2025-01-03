/* eslint-disable no-unused-vars */
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-orange-300 text-white py-6">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <p className="text-sm">&copy; 2023 Budget Tracker. All rights reserved.</p>
                <div className="flex space-x-4">
                    <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition duration-300">
                        <i className="fab fa-discord text-xl"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition duration-300">
                        <i className="fab fa-twitter text-xl"></i>
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition duration-300">
                        <i className="fab fa-facebook text-xl"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;