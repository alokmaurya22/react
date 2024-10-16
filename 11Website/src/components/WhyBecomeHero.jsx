import React from 'react';

const WhyBecomeHero = () => {
    return (
        <section className="py-12 bg-black text-white">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Why Become a Hero</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gray-900 p-6 rounded-lg">
                        <h3 className="text-xl font-bold">Win Cash Prizes</h3>
                        <p className="mt-4">No worthless coupons...</p>
                    </div>
                    <div className="bg-gray-900 p-6 rounded-lg">
                        <h3 className="text-xl font-bold">No Fees</h3>
                        <p className="mt-4">Participate in challenges...</p>
                    </div>
                    <div className="bg-gray-900 p-6 rounded-lg">
                        <h3 className="text-xl font-bold">Help the Community Learn</h3>
                        <p className="mt-4">Share your knowledge...</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyBecomeHero;
