/* eslint-disable no-unused-vars */
import React from 'react';
import loginPic from '../assets/login_pic1.jpg';

const SignIn = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white">
            <div className="flex items-center space-x-8">
                <img src={loginPic} alt="Sign In Illustration" className="w-1/2" />
                <div className="w-1/3">
                    <h2 className="text-2xl font-bold mb-4">Welcome back Customer!</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Email address</label>
                            <input
                                type="email"
                                className="w-full border-gray-300 rounded px-3 py-2"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Password</label>
                            <input
                                type="password"
                                className="w-full border-gray-300 rounded px-3 py-2"
                                placeholder="Enter your password"
                            />
                            <a href="/forgot-password" className="text-sm text-blue-500">Forgot password?</a>
                        </div>
                        <div>
                            <label className="inline-flex items-center">
                                <input type="checkbox" className="form-checkbox" />
                                <span className="ml-2">Remember for 30 days</span>
                            </label>
                        </div>
                        <button type="submit" className="w-full bg-green-700 text-white py-2 rounded">Login</button>
                    </form>
                    <div className="flex items-center my-4">
                        <hr className="w-full border-gray-300" />
                        <span className="mx-2 text-gray-500">or</span>
                        <hr className="w-full border-gray-300" />
                    </div>
                    <div className="flex justify-center space-x-4">
                        <button className="bg-gray-100 border border-gray-300 rounded px-4 py-2">
                            Sign in with Google
                        </button>
                        <button className="bg-gray-100 border border-gray-300 rounded px-4 py-2">
                            Sign in with Apple
                        </button>
                    </div>
                    <p className="text-center text-sm mt-4">
                        Don’t have an account? <a href="/signup" className="text-blue-500">Sign Up</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
