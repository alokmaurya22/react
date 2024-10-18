import React from "react";
import { FaTrophy, FaUsers, FaLightbulb, FaHandshake, FaRocket, FaDollarSign } from "react-icons/fa";

const powers = [
    { title: "Win Cash Prizes", icon: <FaDollarSign className="text-yellow-400 text-3xl" />, description: "No worthless coupons, just real cash rewards for your skills" },
    { title: "No Fees", icon: <FaTrophy className="text-blue-500 text-3xl" />, description: "Participate in challenges and learn without any financial burden" },
    { title: "Help Community Learn", icon: <FaLightbulb className="text-green-400 text-3xl" />, description: "Share your knowledge and contribute to the growth of others" },
    { title: "Build Your Network", icon: <FaUsers className="text-purple-500 text-3xl" />, description: "Connect with like-minded individuals and grow your professional circle" },
    { title: "Join India's Best", icon: <FaRocket className="text-red-500 text-3xl" />, description: "Be part of the most active and vibrant coding community in the country" },
    { title: "Share Your Expertise", icon: <FaHandshake className="text-orange-500 text-3xl" />, description: "Discuss web3, AI, Git, Python, JavaScript, HTML, and more" }
];

const WhyBecomeHero = () => {
    return (
        <section id="features" className="py-20 bg-[#030712] text-white px-4 sm:px-8 md:px-12">
            <div className="text-center mb-8">
                <h2 className="text-4xl sm-text-6xl font-bold mb-4">
                    Why Become a <span className="text-orange-500">Hero</span>
                </h2>
                <p className="text-center text-base sm:text-lg text-gray-400 max-w-xl mx-auto mb-6">
                    Join the most active coding community in India and unleash your potential
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {powers.map((power, index) => (
                    <div
                        key={index}
                        className="bg-[#131726] p-4 sm:p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 w-full sm:w-auto"
                        style={{ border: '1px solid hsl(0, 0%, 15.3%)', transition: 'all 0.3s ease' }}
                    >
                        <div className="mb-4 w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-gray-800 transition-transform transform hover:rotate-360 duration-1000">
                            {power.icon}
                        </div>
                        <h3 className="text-lg sm:text-xl font-semibold mb-2">{power.title}</h3>
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
