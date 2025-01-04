import React from 'react';

const Modal = ({ message, onClose, onConfirm }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg">
                <p>{message}</p>
                <div className="mt-4 flex justify-end space-x-2">
                    <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded">Close</button>
                    <button onClick={onConfirm} className="bg-blue-600 text-white px-4 py-2 rounded">Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;