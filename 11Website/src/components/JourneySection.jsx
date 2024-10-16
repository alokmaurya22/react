import React from 'react';

const JourneySection = () => {
    return (
        <section className="py-12 bg-dark text-white">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Your 7-Step Journey</h2>
                <div className="space-y-4">
                    <div className="bg-purple-600 p-4 rounded-lg">Step 1: Anyone Can Apply</div>
                    <div className="bg-blue-600 p-4 rounded-lg">Step 2: Wait for Open Intake</div>
                    <div className="bg-green-600 p-4 rounded-lg">Step 3: Submit Application</div>
                    <div className="bg-yellow-600 p-4 rounded-lg">Step 4: Create Events</div>
                    <div className="bg-red-600 p-4 rounded-lg">Step 5: Voting System</div>
                    <div className="bg-pink-600 p-4 rounded-lg">Step 6: Win Prizes</div>
                    <div className="bg-teal-600 p-4 rounded-lg">Step 7: Fresh Start</div>
                </div>
            </div>
        </section>
    );
};

export default JourneySection;
