import React from 'react';

const HeroSection = () => {
    return (
        <section className="bg-[#131726] h-[845px] flex flex-col justify-center items-center text-center relative">
            <div className="max-w-[736px] mx-auto mt-[-70px] relative z-10">
                {/* Title */}
                <h1 className="text-[55px] leading-[58px] font-extrabold text-white">
                    Become a Coding Hero,<span className="text-[#ff7700]"><br />Shape India’s Tech Future</span>
                </h1>

                {/* Subtitle */}
                <p className="text-lg text-gray-300 mt-6 leading-[28px] text-xl font-medium">
                    Join India’s most active coding community. Share knowledge, win prizes,
                    and build your tech network - all for free!
                </p>

                {/* Button with animation */}
                <button className="mt-8 bg-[#ff7700] text-white text-lg font-bold py-2.5 px-6 rounded-full transition-transform duration-400 transform hover:scale-105 hover:bg-orange-600 hover:py-3 hover:px-6">
                    Sign Up Now
                </button>

                {/* Prize Info */}
                <p className="mt-8 text-gray-400 text-lg">
                    Win Monthly Prizes
                </p>
                <p className="text-[28px] leading-[36px] font-bold text-[#ff7700]">
                    ₹5000 Minimum First Prize
                </p>
            </div>

            {/* Elliptical Background Glow (Oval on x-axis) */}
            <div className="absolute top-[40%] left-[50%] w-[1000px] h-[200px] bg-[#ff7700] blur-[150px] opacity-50 -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-[200px]"></div>
        </section>




    );
};

export default HeroSection;
