import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="sticky top-0 w-full bg-[#131726]/85 backdrop-blur-md z-20 shadow-lg">
            <div className="flex justify-between items-center px-6 sm:px-8 md:px-20 py-4">
                <h1 className="text-2xl font-bold text-orange-500">Coding Hero</h1>
                {/* PC View Buttons */}
                <div className="hidden md:flex space-x-6">
                    <button className="bg-white text-black px-4 py-1.5 rounded font-semibold transition duration-300 hover:bg-gray-300">
                        Login
                    </button>
                    <button className="bg-orange-500 text-white px-4 py-1.5 rounded font-semibold transition duration-300 hover:bg-orange-600">
                        Sign Up
                    </button>
                </div>
                {/* Hamburger Menu for Mobile */}
                <button onClick={toggleMenu} className="text-white text-2xl md:hidden">
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="sticky top-20px flex flex-col items-center space-y-4 bg-[#131726]/10 h-screen text-white text-center md:hidden backdrop-blur-lg z-30">
                    <a
                        href="#goals"
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-gray-700 duration-200 h-9 px-4 py-2 text-gray-100  hover:text-orange-500  transition-colors text-xl"
                    >
                        Our Goals
                    </a>
                    <a
                        href="#features"
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-gray-700 duration-200 h-9 px-4 py-2 text-gray-100 hover:text-orange-500  transition-colors text-xl"
                    >
                        Features
                    </a>
                    <a
                        href="#journey"
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-gray-700 duration-200 h-9 px-4 py-2 text-gray-100 hover:text-orange-500 transition-colors text-xl"
                    >
                        Your Journey
                    </a>
                    <button className="bg-white text-black px-6 py-2 rounded font-semibold hover:scale-105 transition duration-300 hover:bg-gray-300">
                        Login
                    </button>
                    <button className="bg-orange-500 text-white px-6 py-2 rounded font-semibold hover:scale-105 transition duration-300 hover:bg-orange-600">
                        Sign Up
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
