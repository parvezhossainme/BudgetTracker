/* eslint-disable no-unused-vars */
import React from 'react';

const Home = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <main className="container mx-auto px-4 py-8">
                <section className="text-center">
                    <h2 className="text-4xl font-bold mb-4">Welcome to Budget Tracker</h2>
                    <p className="text-lg mb-8">Manage your finances efficiently and effectively.</p>
                    <button className="bg-green-700 text-white px-6 py-2 rounded">Get Started</button>
                </section>
                <section className="mt-12">
                    <h3 className="text-2xl font-bold mb-4">Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded shadow">
                            <h4 className="text-xl font-bold mb-2">Track Expenses</h4>
                            <p>Keep a record of all your expenses in one place.</p>
                        </div>
                        <div className="bg-white p-6 rounded shadow">
                            <h4 className="text-xl font-bold mb-2">Monitor Income</h4>
                            <p>Track your income sources and amounts.</p>
                        </div>
                        <div className="bg-white p-6 rounded shadow">
                            <h4 className="text-xl font-bold mb-2">Generate Reports</h4>
                            <p>Generate detailed financial reports.</p>
                        </div>
                    </div>
                </section>
            </main>
            
        </div>
    );
};

export default Home;