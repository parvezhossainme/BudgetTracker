import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginPic from "../../assets/loginPage/login_pic1.jpg";
import Modal from "../../myModals/Modal.jsx";

const SignInSeller = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [sellerName, setSellerName] = useState(""); // State for name
    const [sellerID, setSellerID] = useState(""); // State for sellerID
    const [shopID, setShopID] = useState(""); // State for shopID
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:8081/seller-login", {
            // Updated endpoint for seller login
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        })
            .then(async (res) => {
                const data = await res.json();
                console.log("Backend response:", data); // Debugging line

                if (!res.ok || !data.success) {
                    setMessage(data.message || "Login failed");
                    setShowModal(true);
                    return;
                }

                setMessage(`Login success. Welcome, ${data.sellerName}!`);
                setSellerName(data.sellerName); // Set seller's name
                setSellerID(data.sellerID); // Set seller ID
                setShopID(data.shopID); // Set shop ID

                console.log("Seller Name:", data.sellerName); // Debugging line
                console.log("Seller ID:", data.sellerID); // Debugging line
                console.log("Shop ID:", data.shopID); // Debugging line

                // Store in localStorage
                localStorage.setItem("sellerName", data.sellerName);
                localStorage.setItem("sellerID", data.sellerID);
                localStorage.setItem("shopID", data.shopID);

                setShowModal(true);
            })
            .catch((err) => {
                console.error("Fetch error:", err);
                setMessage("An error occurred");
                setShowModal(true);
            });
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const confirmModal = () => {
        console.log("Navigating to SellerHome with:", { sellerID, sellerName, shopID });
        setShowModal(false);
        navigate("/seller-home", { state: { sellerID, sellerName, shopID } });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white">
            <div className="flex items-center space-x-8">
                <img
                    src={loginPic}
                    alt="Sign In Illustration"
                    className="w-1/2"
                />
                <div className="w-1/3">
                    <h2 className="text-2xl font-bold mb-4">
                        Welcome back Seller!
                    </h2>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Email address
                            </label>
                            <input
                                type="email"
                                className="w-full border-gray-300 rounded px-3 py-2"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Password
                            </label>
                            <input
                                type="password"
                                className="w-full border-gray-300 rounded px-3 py-2"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded">
                            Sign In
                        </button>
                    </form>
                    {showModal && (
                        <Modal
                            message={message}
                            onClose={closeModal}
                            onConfirm={confirmModal}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default SignInSeller;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import loginPic from "../../assets/loginPage/login_pic1.jpg";
// import Modal from "../../myModals/Modal.jsx";

// const SignInSeller = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [message, setMessage] = useState("");
//     const [showModal, setShowModal] = useState(false);
//     const [sellerName , setsellerName ] = useState(""); // State for name
//     const [sellerID, setSellerID] = useState(""); // State for sellerID
//     const [shopID, setShopID] = useState(""); // State for shopID
//     const navigate = useNavigate();
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         fetch("http://localhost:8081/seller-login", {
//             // Updated endpoint for seller login
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ email, password }),
//         })
//             .then(async (res) => {
//                 const data = await res.json();
//                 console.log("Backend response:", data); // Debugging line

//                 if (!res.ok || !data.success) {
//                     setMessage(data.message || "Login failed");
//                     setShowModal(true);
//                     return;
//                 }

//                 setMessage(`Login success. Welcome, ${data.sellerName}!`);
//                 setsellerName(data.sellerName); // Set seller's name
//                 setSellerID(data.sellerID); // Set seller ID
//                 setShopID(data.shopID); // Set shop ID

//                 console.log("Seller Name:", data.sellerName); // Debugging line
//                 console.log("Seller ID:", data.sellerID); // Debugging line
//                 console.log("Shop ID:", data.shopID); // Debugging line

//                 setShowModal(true);
//             })
//             .catch((err) => {
//                 console.error("Fetch error:", err);
//                 setMessage("An error occurred");
//                 setShowModal(true);
//             });
//     };

//     const closeModal = () => {
//         setShowModal(false);
//     };

//     const confirmModal = () => {
//         console.log("Navigating to SellerHome with:", {sellerID: sellerID,sellerName : sellerName,shopID: shopID });
//         setShowModal(false);
//         navigate("/seller-home", { state: { sellerID,sellerName,shopID } });
//     };

//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen bg-white">
//             <div className="flex items-center space-x-8">
//                 <img
//                     src={loginPic}
//                     alt="Sign In Illustration"
//                     className="w-1/2"
//                 />
//                 <div className="w-1/3">
//                     <h2 className="text-2xl font-bold mb-4">
//                         Welcome back Seller!
//                     </h2>
//                     <form className="space-y-4" onSubmit={handleSubmit}>
//                         <div>
//                             <label className="block text-sm font-medium mb-1">
//                                 Email address
//                             </label>
//                             <input
//                                 type="email"
//                                 className="w-full border-gray-300 rounded px-3 py-2"
//                                 placeholder="Enter your email"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                             />
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium mb-1">
//                                 Password
//                             </label>
//                             <input
//                                 type="password"
//                                 className="w-full border-gray-300 rounded px-3 py-2"
//                                 placeholder="Enter your password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                             />
//                         </div>
//                         <button
//                             type="submit"
//                             className="w-full bg-blue-600 text-white py-2 rounded">
//                             Sign In
//                         </button>
//                     </form>
//                     {showModal && (
//                         <Modal
//                             message={message}
//                             onClose={closeModal}
//                             onConfirm={confirmModal}
//                         />
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SignInSeller;
