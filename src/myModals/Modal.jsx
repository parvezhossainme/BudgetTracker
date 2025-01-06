import React from 'react';

const Modal = ({ message, onClose, onConfirm }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300">
            <div className="bg-white p-8 rounded-lg shadow-xl ring-4 ring-blue-500 ring-opacity-50 transform transition-all scale-105 sm:scale-100 sm:max-w-2xl sm:p-10">
                <p className="text-lg font-medium text-gray-800">{message}</p>
                <div className="mt-6 flex justify-end space-x-4">
                    <button 
                        onClick={onClose} 
                        className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-transform transform hover:scale-105 focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                    >
                        Close
                    </button>
                    <button 
                        onClick={onConfirm} 
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-transform transform hover:scale-105 focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
                    >
                        Sign In
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
