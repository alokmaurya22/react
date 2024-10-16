import React from 'react';

const GoalSection = () => {
    return (
        <section className="py-12 bg-dark text-white">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Our Goal</h2>
                <p className="text-lg mb-8">
                    Build an ecosystem where Coding Heroes promote tech and share knowledge.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gray-800 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-blue-400">Build an Ecosystem</h3>
                        <p className="text-gray-300 mt-4">Create a thriving community...</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-green-400">No Sales Pressure</h3>
                        <p className="text-gray-300 mt-4">Share your knowledge freely...</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-red-400">Beyond College Walls</h3>
                        <p className="text-gray-300 mt-4">Expand your influence and share...</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GoalSection;
