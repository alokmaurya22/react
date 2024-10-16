import React from 'react';

const GoalSection = () => {
    return (
        <section className="py-20 bg-[#131726] text-white">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6 text-white">Our <span className="text-[#ff7700]">Goal</span></h2>
                <p className="max-w-[736px] mx-auto relative z-10 text-xl mb-12 text-gray-300 font-medium">
                    Build an ecosystem where Coding Heroes promote tech with like-minded people, without the sales pressure. Share your knowledge beyond college walls.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-8 rounded-lg transition-transform duration-300 transform hover:scale-105">
                        <div className="flex justify-center mb-4">
                            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                                <i className="fas fa-code text-purple-600 text-xl"></i>
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-white">Build an Ecosystem</h3>
                        <p className="text-gray-300 mt-4">Create a thriving community of Coding Heroes who promote tech with like-minded individuals from colleges across India.</p>
                    </div>
                    <div className="bg-gradient-to-r from-green-500 to-teal-600 p-8 rounded-lg transition-transform duration-300 transform hover:scale-105">
                        <div className="flex justify-center mb-4">
                            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                                <i className="fas fa-users text-green-600 text-xl"></i>
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-white">No Sales Pressure</h3>
                        <p className="text-gray-300 mt-4">Foster genuine connections and knowledge sharing without the burden of sales tactics or commercial interests.</p>
                    </div>
                    <div className="bg-gradient-to-r from-red-500 to-pink-600 p-8 rounded-lg transition-transform duration-300 transform hover:scale-105">
                        <div className="flex justify-center mb-4">
                            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                                <i className="fas fa-share-alt text-red-600 text-xl"></i>
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-white">Beyond College Walls</h3>
                        <p className="text-gray-300 mt-4">Extend your influence and share your expertise with a broader tech community, transcending institutional boundaries.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GoalSection;
