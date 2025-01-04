import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginPic from '../assets/login_pic1.jpg';
import Modal from '../myModals/Modal';

const SignInSeller = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [name, setName] = useState('');
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
                if (!res.ok) {
                    setMessage(data.error || 'Login failed');
                    setShowModal(true);
                    return;
                }
                setMessage(`Login as ${data.role} success`);
                setName(data.name); // Assuming the server returns the user's name
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
        setShowModal(false);
        navigate('/seller-home', { state: { name } });
    };/* eslint-disable no-unused-vars */
    import React, { useState } from 'react';
    import loginPic from '../assets/login_pic1.jpg';
    import Modal from '../myModals/Modal';
    
    import { useNavigate } from 'react-router-dom';
    
    
    const SignInSeller = () => {
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [message, setMessage] = useState('');
        const [showModal, setShowModal] = useState(false);
    
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
                    if (!res.ok) {
                        setMessage(data.error || 'Login failed');
                        setShowModal(true);
                        return;
                    }
                    setMessage(`Login as ${data.role} success`);
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
            setShowModal(false);
            navigate('/seller-home');
        };
    
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-white">
                <div className="flex items-center space-x-8">
                    <img src={loginPic} alt="Sign In Illustration" className="w-1/2" />
                    <div className="w-1/3">
                        <h2 className="text-2xl font-bold mb-4">Welcome back Seller!</h2>
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
    
    export default SignInSeller;
    

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white">
            <div className="flex items-center space-x-8">
                <img src={loginPic} alt="Sign In Illustration" className="w-1/2" />
                <div className="w-1/3">
                    <h2 className="text-2xl font-bold mb-4">Welcome back Seller!</h2>
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

export default SignInSeller;