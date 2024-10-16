import React from 'react';

const Hero = () => {
    return (
        <section className="bg-gradient-to-b from-dark via-dark to-black h-screen flex flex-col justify-center items-center text-center">
            <h1 className="text-5xl font-bold text-white">
                Become a Coding Hero, <br /> Shape India's Tech Future
            </h1>
            <p className="text-xl text-gray-300 mt-4">
                Join India's most active coding community and win prizes!
            </p>
            <button className="mt-8 bg-orange-500 text-white px-6 py-3 rounded-full">
                Sign Up Now
            </button>
            <p className="text-lg text-gray-400 mt-4">₹5000 Minimum First Prize</p>
        </section>
    );
};

export default Hero;
