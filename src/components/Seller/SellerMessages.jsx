import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SellerNavbar from "./SellerNavbar";
import SellerFooter from "./SellerFooter";
import SellerSideBar from "./SellerSideBar";

const SellerMessages = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const toggleCollapse = () => setIsCollapsed(!isCollapsed);

    const location = useLocation();
    const locationState = location.state || {};
    const { sellerID: locationSellerId, name: locationName } = locationState;

    useEffect(() => {
        if (locationSellerId && locationName) {
            localStorage.setItem("sellerID", locationSellerId);
            localStorage.setItem("name", locationName);
        }
    }, [locationSellerId, locationName]);

    const sellerID = localStorage.getItem("sellerID") || "Unknown";
    const name = localStorage.getItem("name") || "Seller";

    console.log("SellerMessages received:", { sellerID, name }); // Debugging line

    const [selectedConversation, setSelectedConversation] = useState(null);
    const [conversations, setConversations] = useState([
        { id: 1, name: "Parvez Hossain", lastMessage: "প্রোডাক্ট তোর বাপে পাঠাবে?" },
        { id: 2, name: "Adnan Hossain", lastMessage: "প্রাইস কহ!" },
        // Add more conversations here
    ]);

    const handleConversationClick = (conversation) => {
        setSelectedConversation(conversation);
    };

    return (
        <>
            <SellerNavbar />
            <div className="flex">
                <SellerSideBar
                    isCollapsed={isCollapsed}
                    toggleCollapse={toggleCollapse}
                />
                <div className="flex-1 flex flex-col min-h-screen bg-gray-100 p-8">
                    <div className="flex flex-row h-full bg-white shadow-md rounded-lg overflow-hidden">
                        {/* Sidebar for conversations */}
                        <div className="w-1/3 border-r border-gray-200">
                            <div className="p-4 border-b border-gray-200">
                                <h2 className="text-xl font-bold">Conversations</h2>
                            </div>
                            <div className="overflow-y-auto h-full">
                                {conversations.map((conversation) => (
                                    <div
                                        key={conversation.id}
                                        className={`p-4 cursor-pointer hover:bg-gray-100 ${selectedConversation?.id === conversation.id ? "bg-gray-100" : ""}`}
                                        onClick={() => handleConversationClick(conversation)}
                                    >
                                        <h3 className="text-lg font-semibold">{conversation.name}</h3>
                                        <p className="text-gray-600">{conversation.lastMessage}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Main chat area */}
                        <div className="flex-1 flex flex-col">
                            {selectedConversation ? (
                                <>
                                    {/* Chat header */}
                                    <div className="p-4 border-b border-gray-200">
                                        <h2 className="text-xl font-bold">{selectedConversation.name}</h2>
                                    </div>

                                    {/* Chat messages */}
                                    <div className="flex-1 p-4 overflow-y-auto">
                                        {/* Messages will go here */}
                                        <div className="mb-4">
                                            <div className="bg-gray-200 p-3 rounded-lg max-w-xs">
                                                <p>গরু লাগবে? আছে নাকি?</p>
                                            </div>
                                            <span className="text-xs text-gray-500">10:00 AM</span>
                                        </div>
                                        <div className="mb-4 text-right">
                                            <div className="bg-blue-500 text-white p-3 rounded-lg max-w-xs ml-auto">
                                                <p>পিংক কালার চলবে?</p>
                                            </div>
                                            <span className="text-xs text-gray-500">10:02 AM</span>
                                        </div>
                                        {/* Add more messages here */}
                                    </div>

                                    {/* Chat input */}
                                    <div className="p-4 border-t border-gray-200">
                                        <input
                                            type="text"
                                            className="w-full p-2 border rounded-lg"
                                            placeholder="Type a message..."
                                        />
                                    </div>
                                </>
                            ) : (
                                <div className="flex-1 flex items-center justify-center">
                                    <p className="text-gray-600">Select a conversation to start chatting</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <SellerFooter />
        </>
    );
};

export default SellerMessages;

// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import SellerNavbar from "./SellerNavbar";
// import SellerFooter from "./SellerFooter";
// import SellerSideBar from "./SellerSideBar";

// const SellerMessages = () => {
//     const [isCollapsed, setIsCollapsed] = useState(false);
//     const toggleCollapse = () => setIsCollapsed(!isCollapsed);

//     const location = useLocation();
//     const locationState = location.state || {};
//     const { sellerID: locationSellerId, name: locationName } = locationState;

//     useEffect(() => {
//         if (locationSellerId && locationName) {
//             localStorage.setItem("sellerID", locationSellerId);
//             localStorage.setItem("name", locationName);
//         }
//     }, [locationSellerId, locationName]);

//     const sellerID = localStorage.getItem("sellerID") || "Unknown";
//     const name = localStorage.getItem("name") || "Seller";

//     console.log("SellerMessages received:", { sellerID, name }); // Debugging line

//     return (
//         <>
//             <SellerNavbar />
//             <div className="flex">
//                 <SellerSideBar
//                     isCollapsed={isCollapsed}
//                     toggleCollapse={toggleCollapse}
//                 />
//                 <div className="flex-1 flex flex-col min-h-screen bg-gray-100 p-8">
//                     <div className="bg-white shadow-md rounded-lg p-6 w-full">
//                         <h2 className="text-2xl font-bold mb-4 text-center">Messages</h2>
//                         {/* Messages content will go here */}
//                         <div className="overflow-x-auto">
//                             <table className="min-w-full bg-white">
//                                 <thead>
//                                     <tr>
//                                         <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">Message ID</th>
//                                         <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">Sender</th>
//                                         <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">Subject</th>
//                                         <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">Date</th>
//                                         <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">Actions</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {/* Message rows will go here */}
//                                     <tr>
//                                         <td className="py-2 px-4 border-b border-gray-200">12345</td>
//                                         <td className="py-2 px-4 border-b border-gray-200">John Doe</td>
//                                         <td className="py-2 px-4 border-b border-gray-200">Inquiry about Product</td>
//                                         <td className="py-2 px-4 border-b border-gray-200">2025-01-01</td>
//                                         <td className="py-2 px-4 border-b border-gray-200">
//                                             <button className="bg-blue-500 text-white py-1 px-3 rounded-lg">View</button>
//                                             <button className="bg-red-500 text-white py-1 px-3 rounded-lg ml-2">Delete</button>
//                                         </td>
//                                     </tr>
//                                     {/* Add more rows as needed */}
//                                 </tbody>
//                             </table>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <SellerFooter />
//         </>
//     );
// };

// export default SellerMessages;