import React from 'react';

const WhyBecomeHero = () => {
    return (
        <section className="py-16 bg-black text-white">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-4">
                    Why Become a <span className="text-orange-500">Hero</span>
                </h2>
                <p className="text-lg mb-12">
                    Join the most active coding community in India and unleash your potential
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-gray-800 p-6 rounded-lg">
                        <h3 className="text-xl font-bold mb-2">Win Cash Prizes</h3>
                        <p className="text-gray-400">
                            No worthless coupons, just real cash rewards for your skills
                        </p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg">
                        <h3 className="text-xl font-bold mb-2">No Fees</h3>
                        <p className="text-gray-400">
                            Participate in challenges and learn without any financial burden
                        </p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg">
                        <h3 className="text-xl font-bold mb-2">Help Community Learn</h3>
                        <p className="text-gray-400">
                            Share your knowledge and contribute to the growth of others
                        </p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg">
                        <h3 className="text-xl font-bold mb-2">Build Your Network</h3>
                        <p className="text-gray-400">
                            Connect with like-minded individuals and grow your professional circle
                        </p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg">
                        <h3 className="text-xl font-bold mb-2">Join India's Best</h3>
                        <p className="text-gray-400">
                            Be part of the most active and vibrant coding community in the country
                        </p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg">
                        <h3 className="text-xl font-bold mb-2">Share Your Expertise</h3>
                        <p className="text-gray-400">
                            Discuss web3, AI, Git, Python, JavaScript, HTML, and more
                        </p>
                    </div>
                </div>
                <div className="mt-12">
                    <button className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-full">
                        Join the Coding Hero Program
                    </button>
                </div>
            </div>
        </section>
    );
};

export default WhyBecomeHero;
