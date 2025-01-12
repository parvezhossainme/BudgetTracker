import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomerSideBar from './CustomerSideBar';

const CustomerProfile = () => {
    const navigate = useNavigate();
    const [isCollapsed, setIsCollapsed] = useState(false);
    const toggleCollapse = () => setIsCollapsed(!isCollapsed);

    const [name, setName] = useState('');
    const [customerID, setCustomerId] = useState('');

    useEffect(() => {
        const storedName = localStorage.getItem('name');
        const storedCustomerId = localStorage.getItem('customerID');
        setName(storedName || 'Customer');
        setCustomerId(storedCustomerId || 'Unknown');
    }, []);

    const handleEditClick = () => {
        navigate("/customer-edit-profile");
    };

    return (
        <div className="flex min-h-screen">
            <CustomerSideBar
                isCollapsed={isCollapsed}
                toggleCollapse={toggleCollapse}
            />
            <div className="flex-1 p-6 bg-gray-100 w-full">
                <div className="min-h-screen mx-auto p-6 bg-white shadow-lg rounded-lg">
                    <div className="flex items-center justify-between mb-6">
                        <h1 className="text-3xl font-bold text-gray-900">Customer Profile</h1>
                        <button onClick={handleEditClick} className="text-gray-600 hover:text-gray-900 transition duration-300">
                            <i className="fas fa-edit text-2xl"></i>
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
                            <p className="text-gray-700"><strong>Name:</strong> {name}</p>
                            <p className="text-gray-700"><strong>Customer ID:</strong> {customerID}</p>
                            <p className="text-gray-700"><strong>Gender:</strong> Male</p>
                            <p className="text-gray-700"><strong>Date of Birth:</strong> January 1, 1990</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                            <p className="text-gray-700"><strong>Email:</strong> johndoe@example.com</p>
                            <p className="text-gray-700"><strong>Phone:</strong> +880 1234 567890</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold mb-4">Address</h2>
                            <p className="text-gray-700"><strong>Street:</strong> 123 Main Street</p>
                            <p className="text-gray-700"><strong>City:</strong> Dhaka</p>
                            <p className="text-gray-700"><strong>Country:</strong> Bangladesh</p>
                            <p className="text-gray-700"><strong>Postal Code:</strong> 1000</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold mb-4">Other Information</h2>
                            <p className="text-gray-700"><strong>Membership:</strong> Premium</p>
                            <p className="text-gray-700"><strong>Joined:</strong> January 1, 2020</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerProfile;







// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import CustomerSideBar from './CustomerSideBar';

// const CustomerProfile = () => {
//     const navigate = useNavigate();
//     const [isCollapsed, setIsCollapsed] = useState(false);
//     const toggleCollapse = () => setIsCollapsed(!isCollapsed);

//     const handleEditClick = () => {
//         navigate("/customer-edit-profile");
//     };

//     return (
//         <div className="flex min-h-screen">
//             <CustomerSideBar
//                 isCollapsed={isCollapsed}
//                 toggleCollapse={toggleCollapse}
//             />
//             <div className="flex-1 p-6 bg-gray-100">
//                 <div className="min-h-screen mx-auto p-6 bg-white shadow-lg rounded-lg w-full">
//                     <div className="flex items-center justify-between mb-6">
//                         <h1 className="text-3xl font-bold text-gray-900">Customer Profile</h1>
//                         <button onClick={handleEditClick} className="text-gray-600 hover:text-gray-900 transition duration-300">
//                             <i className="fas fa-edit text-2xl"></i>
//                         </button>
//                     </div>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                         <div className="bg-gray-100 p-6 rounded-lg shadow-md">
//                             <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
//                             <p className="text-gray-700"><strong>Name:</strong> John Doe</p>
//                             <p className="text-gray-700"><strong>Gender:</strong> Male</p>
//                             <p className="text-gray-700"><strong>Date of Birth:</strong> January 1, 1990</p>
//                         </div>
//                         <div className="bg-gray-100 p-6 rounded-lg shadow-md">
//                             <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
//                             <p className="text-gray-700"><strong>Email:</strong> johndoe@example.com</p>
//                             <p className="text-gray-700"><strong>Phone:</strong> +880 1234 567890</p>
//                         </div>
//                         <div className="bg-gray-100 p-6 rounded-lg shadow-md">
//                             <h2 className="text-xl font-semibold mb-4">Address</h2>
//                             <p className="text-gray-700"><strong>Street:</strong> 123 Main Street</p>
//                             <p className="text-gray-700"><strong>City:</strong> Dhaka</p>
//                             <p className="text-gray-700"><strong>Country:</strong> Bangladesh</p>
//                             <p className="text-gray-700"><strong>Postal Code:</strong> 1000</p>
//                         </div>
//                         <div className="bg-gray-100 p-6 rounded-lg shadow-md">
//                             <h2 className="text-xl font-semibold mb-4">Other Information</h2>
//                             <p className="text-gray-700"><strong>Membership:</strong> Premium</p>
//                             <p className="text-gray-700"><strong>Joined:</strong> January 1, 2020</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CustomerProfile;