import React from "react";
import { FaChalkboardTeacher, FaCouch, FaTicketAlt, FaThumbsUp } from "react-icons/fa";

const RegularUserSection = () => {
    const benefits = [
        {
            icon: <FaChalkboardTeacher className="text-orange-400 text-3xl" />, // Teacher icon
            title: 'Attend and learn any topic',
            description: 'Expand your knowledge with diverse coding subjects',
            badge: 'Free',
        },
        {
            icon: <FaCouch className="text-orange-400 text-3xl" />, // Couch icon
            title: 'Meet like-minded people',
            description: 'Connect with peers from the comfort of your sofa',
            badge: 'Free',
        },
        {
            icon: <FaTicketAlt className="text-orange-400 text-3xl" />, // Ticket icon
            title: 'All events are free to join',
            description: 'No cost barrier to your learning journey',
            badge: 'Free',
        },
        {
            icon: <FaThumbsUp className="text-orange-400 text-3xl" />, // Thumbs Up icon
            title: 'Use your VOTE as super power',
            description: 'Appreciate the best event creators with your vote',
            badge: 'Free',
        },
    ];

    return (
        <section className="text-white py-16 bg-[#030712]">
            <div className="text-center mb-12">
                <h2 className="text-6xl font-bold">What's there for regular users</h2>
                <p className="text-gray-400 mt-4 ">
                    Join the Coding Hero program and unlock these amazing benefits
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-y-4 max-w-7xl mx-auto"> {/* Adjusted gap for x-axis */}
                {benefits.map((benefit, index) => (
                    <div
                        key={index}
                        className="bg-[#131726] p-6 rounded-lg shadow-lg flex items-center justify-between transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/50 hover:ring-4 hover:ring-orange-500/30"
                        style={{ border: '1px solid hsl(0, 0%, 15.3%)', transition: 'all 0.3s ease', width: '90%' }} /* Custom border color */
                    >
                        <div className="flex items-center">
                            <span className="mr-2">{benefit.icon}</span>
                            <div>
                                <h3 className="text-lg font-semibold">{benefit.title}</h3>
                                <p className="text-gray-400">{benefit.description}</p>
                            </div>
                        </div>
                        <div className="bg-orange-500 text-white rounded-full px-3 py-1 text-sm cursor-pointer hover:bg-orange-600 transition-colors">
                            {benefit.badge}
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <h3 className="text-2xl font-bold">Ready to become a Coding Hero?</h3>
                <p className="text-gray-400 mt-4">
                    Join thousands of students from across India and start your coding journey today!
                </p>
                <button className="mt-6 bg-orange-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-orange-600 hover:scale-105 transform transition-transform duration-300">
                    Sign Up Now
                </button>
            </div>
        </section>
    );
};

export default RegularUserSection;
