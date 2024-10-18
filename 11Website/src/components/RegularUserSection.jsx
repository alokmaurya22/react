import React from "react";
import { FaChalkboardTeacher, FaCouch, FaTicketAlt, FaThumbsUp } from "react-icons/fa";

const RegularUserSection = () => {
    const benefits = [
        {
            icon: <FaChalkboardTeacher className="text-orange-400 text-2xl sm:text-3xl" />,
            title: 'Attend and learn any topic',
            description: 'Expand your knowledge with diverse coding subjects',
            badge: 'Free',
        },
        {
            icon: <FaCouch className="text-orange-400 text-2xl sm:text-3xl" />,
            title: 'Meet like-minded people',
            description: 'Connect with peers from the comfort of your sofa',
            badge: 'Free',
        },
        {
            icon: <FaTicketAlt className="text-orange-400 text-2xl sm:text-3xl" />,
            title: 'All events are free to join',
            description: 'No cost barrier to your learning journey',
            badge: 'Free',
        },
        {
            icon: <FaThumbsUp className="text-orange-400 text-2xl sm:text-3xl" />,
            title: 'Use your VOTE as super power',
            description: 'Appreciate the best event creators with your vote',
            badge: 'Free',
        },
    ];

    return (
        <section className="text-white py-16 bg-[#030712] px-4 sm:px-8 md:px-12">
            <div className="text-center mb-12">
                <h2 className="text-4xl sm-text-6xl font-bold mb-4 text-orange-400">What's there for regular users</h2>
                <p className="text-center text-base sm:text-lg text-gray-400 max-w-xl mx-auto mb-6">
                    Join the Coding Hero program and unlock these amazing benefits
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-y-4 max-w-7xl mx-auto">
                {benefits.map((benefit, index) => (
                    <div
                        key={index}
                        className="bg-[#131726] p-4 sm:p-6 rounded-lg shadow-lg flex items-center justify-between transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/50 hover:ring-4 hover:ring-orange-500/30 mx-auto" // Added mx-2 for margin on mobile
                        style={{ border: '1px solid hsl(0, 0%, 15.3%)', transition: 'all 0.3s ease', width: '90%' }}
                    >
                        <div className="flex items-center">
                            <span className="mr-2">{benefit.icon}</span>
                            <div>
                                <h3 className="text-base sm:text-lg font-semibold">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-400 text-sm sm:text-base">
                                    {benefit.description}
                                </p>
                            </div>
                        </div>
                        <div className="bg-orange-500 text-white rounded-full px-2 py-1 text-xs sm:text-sm cursor-pointer hover:bg-orange-600 transition-colors">
                            {benefit.badge}
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <h3 className="text-xl sm:text-2xl font-bold">Ready to become a Coding <span className="text-orange-500">Hero?</span> </h3>
                <p className="text-gray-400 mt-4 text-base sm:text-lg">
                    Join thousands of students from across India and start your coding journey today!
                </p>
                <button className="mt-6 bg-orange-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-orange-600 hover:scale-105 transform transition-transform duration-300 font-bold">
                    Sign Up Now
                </button>
            </div>
        </section>
    );
};

export default RegularUserSection;
