import React, { useState } from 'react';
import CustomerSideBar from './CustomerSideBar';

const CustomerShop = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const toggleCollapse = () => setIsCollapsed(!isCollapsed);

    return (
        <div className="flex min-h-screen">
            <CustomerSideBar
                isCollapsed={isCollapsed}
                toggleCollapse={toggleCollapse}
            />
            <div className="flex-1 p-6">
                <CShopHome />
            </div>
        </div>
    );
};

export default CustomerShop;

const CShopHome = () => {
    const [areaDropdownVisible, setAreaDropdownVisible] = useState(false);
    const [selectedArea, setSelectedArea] = useState("Select Your Location");

    const toggleAreaDropdown = () => {
        setAreaDropdownVisible(!areaDropdownVisible);
    };

    const selectArea = (area) => {
        setSelectedArea(area);
        setAreaDropdownVisible(false);
    };

    const areas = ["SayeedNagar", "Basundhara", "Gulshan-1"];

    return (
        <div className="min-h-screen mx-auto p-6 bg-white shadow-lg rounded-lg w-full">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-4xl font-extrabold text-gray-800">Shop</h1>
                <div className="relative">
                    <button
                        onClick={toggleAreaDropdown}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                    >
                        {selectedArea}
                    </button>
                    {areaDropdownVisible && (
                        <ul className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
                            {areas.map((area) => (
                                <li key={area} 
                                    onClick={() => selectArea(area)}
                                    className="px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white cursor-pointer transition duration-300">
                                    {area}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 p-8 rounded-lg">
    {['Hanged Up', 'UniMart', 'Amazon'].map((shop, index) => (
        <a key={index} href={`https://www.${shop.toLowerCase().replace(/\s/g, '')}.com`} 
            className="flex flex-col items-center justify-center w-80 h-52 bg-gradient-to-r from-orange-200 via-indigo-300 to-green-200 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <span className="text-xl font-semibold text-gray-800">{shop}</span>
        </a>
    ))}
</div>

        </div>
    );
};
