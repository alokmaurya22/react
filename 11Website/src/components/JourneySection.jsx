import React from 'react';
import { FaCheckCircle, FaCalendarAlt, FaVideo, FaUsers, FaStar, FaTrophy, FaArrowCircleRight } from 'react-icons/fa';

const JourneySection = () => {
    const steps = [
        {
            step: "Step 1: Anyone Can Apply",
            description: "Open to all college students in India, regardless of your coding experience.",
            color: "bg-purple-600",
            icon: <FaCheckCircle className="text-white text-xl" />,
            iconBg: "bg-purple-600",
        },
        {
            step: "Step 2: Wait for Open Intake",
            description: "Keep an eye out for our application periods throughout the year.",
            color: "bg-blue-600",
            icon: <FaCalendarAlt className="text-white text-xl" />,
            iconBg: "bg-blue-600",
        },
        {
            step: "Step 3: Submit Your Application",
            description: "Create a video showcasing why you're the best fit and how you'll contribute to the community.",
            color: "bg-green-600",
            icon: <FaVideo className="text-white text-xl" />,
            iconBg: "bg-green-600",
        },
        {
            step: "Step 4: Create and Host Events",
            description: "Once accepted, start organizing coding events and invite users to participate.",
            color: "bg-yellow-600",
            icon: <FaUsers className="text-white text-xl" />,
            iconBg: "bg-yellow-600",
        },
        {
            step: "Step 5: Voting System",
            description: "Users can attend events and vote for their favorite each month.",
            color: "bg-pink-600",
            icon: <FaStar className="text-white text-xl" />,
            iconBg: "bg-pink-600",
        },
        {
            step: "Step 6: Win Monthly Prizes",
            description: "The highest-voted event host wins the pool prize each month.",
            color: "bg-red-600",
            icon: <FaTrophy className="text-white text-xl" />,
            iconBg: "bg-red-600",
        },
        {
            step: "Step 7: Fresh Start Every Month",
            description: "The competition resets monthly, giving everyone a chance to shine.",
            color: "bg-indigo-600",
            icon: <FaArrowCircleRight className="text-white text-xl" />,
            iconBg: "bg-indigo-600",
        },
    ];

    return (
        <section id="journey" className="py-20 bg-[#131726] text-white px-4 sm:px-8 md:px-12">
            <h2 className="text-center text-3xl sm:text-4xl font-bold text-orange-400">
                Your 7-Step Journey to Becoming a Coding Hero
            </h2>
            <div className="mt-8 max-w-7xl mx-auto space-y-6">
                {steps.map((step, index) => (
                    <div key={index} className="flex items-center space-x-4">
                        {/* Icon in Circle */}
                        <div
                            className={`w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-full ${step.iconBg} text-white text-xl relative`}
                            style={{ marginTop: '-10px' }} // Adjust the vertical alignment
                        >
                            {step.icon}
                        </div>
                        {/* Step Description Bar */}
                        <div className={`flex-1 p-4 rounded-xl ${step.color} mx-4 sm:mx-0`} style={{ maxWidth: '90%' }}> {/* Increased margin to avoid touching sides */}
                            <h3 className="text-white text-lg sm:text-xl font-semibold ">
                                {step.step}
                            </h3>
                            <p className="text-white text-base sm:text-lg">{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default JourneySection;
