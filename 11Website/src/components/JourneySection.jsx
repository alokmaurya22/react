import React from 'react';
import { FaCheckCircle, FaCalendarAlt, FaVideo, FaUsers, FaStar, FaTrophy, FaArrowCircleRight } from 'react-icons/fa';

const JourneySection = () => {
    const steps = [
        {
            step: "Step 1: Anyone Can Apply",
            description: "Open to all college students in India, regardless of your coding experience.",
            color: "bg-purple-600",
            icon: <FaCheckCircle />,
            iconBg: "bg-purple-600",
        },
        {
            step: "Step 2: Wait for Open Intake",
            description: "Keep an eye out for our application periods throughout the year.",
            color: "bg-blue-600",
            icon: <FaCalendarAlt />,
            iconBg: "bg-blue-600",
        },
        {
            step: "Step 3: Submit Your Application",
            description: "Create a video showcasing why you're the best fit and how you'll contribute to the community.",
            color: "bg-green-600",
            icon: <FaVideo />,
            iconBg: "bg-green-600",
        },
        {
            step: "Step 4: Create and Host Events",
            description: "Once accepted, start organizing coding events and invite users to participate.",
            color: "bg-yellow-600",
            icon: <FaUsers />,
            iconBg: "bg-yellow-600",
        },
        {
            step: "Step 5: Voting System",
            description: "Users can attend events and vote for their favorite each month.",
            color: "bg-pink-600",
            icon: <FaStar />,
            iconBg: "bg-pink-600",
        },
        {
            step: "Step 6: Win Monthly Prizes",
            description: "The highest-voted event host wins the pool prize each month.",
            color: "bg-red-600",
            icon: <FaTrophy />,
            iconBg: "bg-red-600",
        },
        {
            step: "Step 7: Fresh Start Every Month",
            description: "The competition resets monthly, giving everyone a chance to shine.",
            color: "bg-indigo-600",
            icon: <FaArrowCircleRight />,
            iconBg: "bg-indigo-600",
        },
    ];

    return (
        <section className="py-10 bg-[#131726] text-white">
            <h2 className="text-center text-4xl font-bold text-orange-400">Your 7-Step Journey to Becoming a Coding Hero</h2>
            <div className="mt-8 max-w-7xl mx-auto space-y-6">
                {steps.map((step, index) => (
                    <div key={index} className="flex items-center space-x-4">
                        {/* Icon in Circle with smaller size and shifted up */}
                        <div className={`w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full ${step.iconBg} text-white text-2xl relative`} style={{ marginTop: '-55px' }}>
                            {step.icon}
                        </div>
                        {/* Step Description Bar */}
                        <div className={`flex-1 p-6 rounded-xl ${step.color}`}>
                            <h3 className="text-white text-2xl font-semibold">{step.step}</h3>
                            <p className="text-white text-lg">{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default JourneySection;
