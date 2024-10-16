import React from 'react';

const Navbar = () => {
    return (
        <nav className="sticky top-0 flex justify-between items-center px-12 py-4 bg-[#131726]/85 backdrop-blur-md z-20 shadow-lg">
            <h1 className="text-2xl font-bold text-orange-500 ">
                Coding Hero
            </h1>
            <div className="space-x-6">
                <button className="bg-white text-black px-4 py-1.5 rounded font-semibold transition duration-300 hover:bg-gray-300">
                    Login
                </button>
                <button className="bg-orange-500 text-white px-4 py-1.5 rounded font-semibold transition duration-300 hover:bg-orange-600">
                    Sign Up
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
