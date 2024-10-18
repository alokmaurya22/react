import React from "react";
import { FaTrophy, FaUsers, FaNetworkWired, FaStar, FaGraduationCap, FaLightbulb } from "react-icons/fa";

const powers = [
    {
        title: "Earn Cash Prizes",
        description: "Compete and win exciting cash rewards",
        icon: <FaTrophy className="text-purple-400 text-3xl" />,
    },
    {
        title: "Build Community",
        description: "Create a network around your favorite tech",
        icon: <FaUsers className="text-blue-400 text-3xl" />,
    },
    {
        title: "Network",
        description: "Connect with fellow tech enthusiasts",
        icon: <FaNetworkWired className="text-green-400 text-3xl" />,
    },
    {
        title: "Gain Reputation",
        description: "Stand out as a community leader in tech",
        icon: <FaStar className="text-yellow-400 text-3xl" />,
    },
    {
        title: "True Tech Teaching",
        description: "Share knowledge without sales pitches",
        icon: <FaGraduationCap className="text-pink-400 text-3xl" />,
    },
    {
        title: "Leadership",
        description: "Develop your leadership skills",
        icon: <FaLightbulb className="text-cyan-400 text-3xl" />,
    },
];

const SuperPowerSection = () => {
    return (
        <section className="py-20 bg-gradient-to-l from-[#030712] to-[#131726] text-white">
            <div className="text-center mb-8">
                <button className="bg-gradient-to-r from-orange-400 to-pink-500 text-white py-2 px-6 rounded-full text-lg font-semibold hover:from-orange-500 hover:to-pink-600 hover:scale-105 transition-transform duration-300">
                    Become a Coding Hero
                </button>

            </div>

            <h2 className="text-center text-6xl font-bold bg-gradient-to-r from-orange-700 via-yellow-600 to-pink-700 text-transparent bg-clip-text mb-8">
                Super Power of Coding Heroes
            </h2>
            <p className="text-center text-lg text-gray-300 max-w-xl mx-auto mb-8 font-bold">
                Join the Coding Hero program and unlock a world of opportunities. Open to all college students across India.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {powers.map((power, index) => (
                    <div
                        key={index}
                        className="bg-[#131726] p-8 rounded-xl shadow-lg transition-transform transform hover:scale-105"
                        style={{ border: '1px solid hsl(0, 0%, 15.3%)' }} // Applied the custom border
                    >
                        <div className="flex items-center mb-4">
                            <div className="mr-4 transition-transform duration-300 ease-in-out transform hover:rotate-[360deg]">
                                {power.icon}
                            </div>
                            <h3 className="text-xl font-semibold">{power.title}</h3>
                        </div>
                        <p className="text-gray-400">{power.description}</p>
                    </div>
                ))}
            </div>







            <div className="text-center mt-8">
                <button className="bg-gradient-to-r from-orange-400 to-pink-500 text-white py-2 px-6 rounded-full text-lg font-semibold hover:from-orange-500 hover:to-pink-600 hover:scale-105 transition-transform duration-300">
                    Join Now
                </button>


            </div>
        </section>
    );
};

export default SuperPowerSection;
