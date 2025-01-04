import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginPic from '../../assets/login_pic1.jpg';
import Modal from '../../myModals/Modal.jsx';

const SignInCustomer = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [name, setName] = useState(''); // State for name
    const [customerId, setCustomerId] = useState(''); // State for customerId
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:8081/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })
            .then(async res => {
                const data = await res.json();
                console.log('Backend response:', data); // Debugging line
                if (!res.ok) {
                    setMessage(data.error || 'Login failed');
                    setShowModal(true);
                    return;
                }
                setMessage(`Login as ${data.role} success`);
                setName(data.username); // Assuming the server returns the user's name
                setCustomerId(data.userID); // Assuming the server returns the customer ID

                console.log('Name:', data.username); // Debugging line
                console.log('Customer ID:', data.userID); // Debugging line

                setShowModal(true);
            })
            .catch(err => {
                console.error('Fetch error:', err);
                setMessage('An error occurred');
                setShowModal(true);
            });
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const confirmModal = () => {
        console.log('Navigating to CustomerHome with:', { name, customerId });
        setShowModal(false);
        navigate('/customer-home', { state: { name, customerId } });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white">
            <div className="flex items-center space-x-8">
                <img src={loginPic} alt="Sign In Illustration" className="w-1/2" />
                <div className="w-1/3">
                    <h2 className="text-2xl font-bold mb-4">Welcome back Customer!</h2>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm font-medium mb-1">Email address</label>
                            <input
                                type="email"
                                className="w-full border-gray-300 rounded px-3 py-2"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Password</label>
                            <input
                                type="password"
                                className="w-full border-gray-300 rounded px-3 py-2"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">Sign In</button>
                    </form>
                    {showModal && <Modal message={message} onClose={closeModal} onConfirm={confirmModal} />}
                </div>
            </div>
        </div>
    );
};

export default SignInCustomer;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import loginPic from '../../assets/login_pic1.jpg';
// import Modal from '../../myModals/Modal.jsx';

// const SignInCustomer = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [message, setMessage] = useState('');
//     const [showModal, setShowModal] = useState(false);
//     const [name, setName] = useState(''); // State for name
//     const [customerId, setCustomerId] = useState(''); // State for customerId
//     const navigate = useNavigate();

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         fetch('http://localhost:8081/login', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ email, password }),
//         })
//             .then(async res => {
//                 const data = await res.json();
//                 console.log('Backend response:', data); // Debugging line
//                 if (!res.ok) {
//                     setMessage(data.error || 'Login failed');
//                     setShowModal(true);
//                     return;
//                 }
//                 setMessage(`Login as ${data.role} success`);
//                 setName(data.name); // Assuming the server returns the user's name
//                 setCustomerId(data.customerId); // Assuming the server returns the customer ID

//                 console.log('Name:', data.name); // Debugging line
//                 console.log('Customer ID:', data.customerId); // Debugging line

//                 setShowModal(true);
//             })
//             .catch(err => {
//                 console.error('Fetch error:', err);
//                 setMessage('An error occurred');
//                 setShowModal(true);
//             });
//     };

//     const closeModal = () => {
//         setShowModal(false);
//     };

//     const confirmModal = () => {
//         console.log('Navigating to CustomerHome with:', { name, customerId });
//         setShowModal(false);
//         navigate('/customer-home', { state: { name, customerId } });
//     };

//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen bg-white">
//             <div className="flex items-center space-x-8">
//                 <img src={loginPic} alt="Sign In Illustration" className="w-1/2" />
//                 <div className="w-1/3">
//                     <h2 className="text-2xl font-bold mb-4">Welcome back Customer!</h2>
//                     <form className="space-y-4" onSubmit={handleSubmit}>
//                         <div>
//                             <label className="block text-sm font-medium mb-1">Email address</label>
//                             <input
//                                 type="email"
//                                 className="w-full border-gray-300 rounded px-3 py-2"
//                                 placeholder="Enter your email"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                             />
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium mb-1">Password</label>
//                             <input
//                                 type="password"
//                                 className="w-full border-gray-300 rounded px-3 py-2"
//                                 placeholder="Enter your password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                             />
//                         </div>
//                         <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">Sign In</button>
//                     </form>
//                     {showModal && <Modal message={message} onClose={closeModal} onConfirm={confirmModal} />}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SignInCustomer;