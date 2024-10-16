import React from 'react';

const GoalSection = () => {
    return (
        <section id="goals" className="py-20 bg-[#131726] text-white px-4 sm:px-8 md:px-12">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl sm-text-6xl font-bold mb-4">Our <span className="text-[#ff7700]">Goal</span></h2>
                <p className="text-center text-base sm:text-lg text-gray-400 max-w-xl mx-auto mb-6">
                    Build an ecosystem where Coding Heroes promote tech with like-minded people, without the sales pressure. Share your knowledge beyond college walls.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-6 rounded-lg transition-transform duration-300 transform hover:scale-105">
                        <div className="flex justify-center mb-4">
                            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                                <i className="fas fa-code text-purple-600 text-xl"></i>
                            </div>
                        </div>
                        <h3 className="text-lg font-bold text-white">Build an Ecosystem</h3>
                        <p className="text-gray-300 mt-3">Create a thriving community of Coding Heroes who promote tech with like-minded individuals from colleges across India.</p>
                    </div>
                    <div className="bg-gradient-to-r from-green-500 to-teal-600 p-6 rounded-lg transition-transform duration-300 transform hover:scale-105">
                        <div className="flex justify-center mb-4">
                            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                                <i className="fas fa-users text-green-600 text-xl"></i>
                            </div>
                        </div>
                        <h3 className="text-lg font-bold text-white">No Sales Pressure</h3>
                        <p className="text-gray-300 mt-3">Foster genuine connections and knowledge sharing without the burden of sales tactics or commercial interests.</p>
                    </div>
                    <div className="bg-gradient-to-r from-red-500 to-pink-600 p-6 rounded-lg transition-transform duration-300 transform hover:scale-105">
                        <div className="flex justify-center mb-4">
                            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                                <i className="fas fa-share-alt text-red-600 text-xl"></i>
                            </div>
                        </div>
                        <h3 className="text-lg font-bold text-white">Beyond College Walls</h3>
                        <p className="text-gray-300 mt-3">Extend your influence and share your expertise with a broader tech community, transcending institutional boundaries.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GoalSection;
