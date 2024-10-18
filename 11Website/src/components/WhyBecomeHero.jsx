
import React from "react";
import { FaTrophy, FaUsers, FaNetworkWired, FaStar, FaGraduationCap, FaLightbulb } from "react-icons/fa";

const powers = [
    { title: "Win Cash Prizes", icon: <FaStar className="text-yellow-400 text-3xl" />, description: "No worthless coupons, just real cash rewards for your skills" },
    { title: "No Fees", icon: <FaStar className="text-yellow-400 text-3xl" />, description: "Participate in challenges and learn without any financial burden" },
    { title: "Help Community Learn", icon: <FaStar className="text-yellow-400 text-3xl" />, description: "Share your knowledge and contribute to the growth of others" },
    { title: "Build Your Network", icon: <FaStar className="text-yellow-400 text-3xl" />, description: "Connect with like-minded individuals and grow your professional circle" },
    { title: "Join India's Best", icon: <FaStar className="text-yellow-400 text-3xl" />, description: "Be part of the most active and vibrant coding community in the country" },
    { title: "Share Your Expertise", icon: <FaStar className="text-yellow-400 text-3xl" />, description: "Discuss web3, AI, Git, Python, JavaScript, HTML, and more" }

];

const WhyBecomeHero = () => {
    return (
        <section className="py-20 bg-[#030712] text-white">
            <div className="text-center mb-8">
                <h2 className="text-5xl font-bold mb-4">
                    Why Become a <span className="text-orange-500">Hero</span>
                </h2>
                <p className="text-xl font-bold mb-8">
                    Join the most active coding community in India and unleash your potential
                </p>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {powers.map((power, index) => (
                    <div
                        key={index}
                        className="bg-[#131726] p-6 rounded-xl shadow-lg text-center transition-transform transform hover:scale-105"
                        style={{ border: '1px solid hsl(0, 0%, 15.3%)', transition: 'all 0.3s ease' }} // Added border with custom color
                    >
                        <div
                            className="mb-4 w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-gray-800 transition-transform transform hover:rotate-360 duration-1000"
                        >
                            {power.icon}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{power.title}</h3>
                        <p className="text-gray-400">{power.description}</p>
                    </div>
                ))}
            </div>



            <div className="text-center mt-8">
                <button className="bg-orange-500 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-orange-600 hover:scale-105 transition-transform duration-300">
                    Join The Coding Hero Program
                </button>


            </div>
        </section>
    );
};

export default WhyBecomeHero;

/*

//OLD CODE

import React from 'react';

const WhyBecomeHero = () => {
    return (
        <section className="py-16 bg-[#030712] text-white">
            <div className="container mx-auto px-8 sm:px-32 lg:px-64 xl:px-[15rem] text-center">
                <h2 className="text-4xl font-bold mb-4">
                    Why Become a <span className="text-orange-500">Hero</span>
                </h2>
                <p className="text-xl font-bold mb-8">
                    Join the most active coding community in India and unleash your potential
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mx-auto"> {}
                {[
                    { title: "Win Cash Prizes", iconColor: "bg-purple-500", description: "No worthless coupons, just real cash rewards for your skills" },
                    { title: "No Fees", iconColor: "bg-blue-500", description: "Participate in challenges and learn without any financial burden" },
                    { title: "Help Community Learn", iconColor: "bg-green-500", description: "Share your knowledge and contribute to the growth of others" },
                    { title: "Build Your Network", iconColor: "bg-yellow-500", description: "Connect with like-minded individuals and grow your professional circle" },
                    { title: "Join India's Best", iconColor: "bg-pink-500", description: "Be part of the most active and vibrant coding community in the country" },
                    { title: "Share Your Expertise", iconColor: "bg-orange-500", description: "Discuss web3, AI, Git, Python, JavaScript, HTML, and more" }
                ].map((item, index) => (
                    <div key={index} className="bg-[#131726] p-6 rounded-xl hover:transform hover:scale-105 transition-transform h-[280px] w-[350px] flex flex-col items-center justify-start mx-auto">
                        <div className={`w-16 h-16 ${item.iconColor} rounded-full mb-4 flex items-center justify-center`}>
                            {}
                        </div>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-gray-400">{item.description}</p>
                    </div>
                ))}
            </div>
            <div className="mt-8">
                <button className="font-bold bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-full transition-transform hover:scale-105">
                    Join the Coding Hero Program
                </button>
            </div>
        </div>
    </section>
);
};

export default WhyBecomeHero;
*/