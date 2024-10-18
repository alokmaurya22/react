import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="sticky top-0 w-full bg-[#131726]/85 backdrop-blur-md z-20 shadow-lg">
            <div className="flex justify-between items-center px-6 py-4">
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
                <div className="sticky top-0 flex flex-col items-center space-y-4 bg-[#131726]/20 h-screen text-white text-center md:hidden backdrop-blur-md z-30">
                    <a href="#goals" className="text-lg">Our Goals</a>
                    <a href="#features" className="text-lg">Features</a>
                    <a href="#journey" className="text-lg">Your Journey</a>
                    <button className="bg-white text-black px-6 py-2 rounded font-semibold transition duration-300 hover:bg-gray-300">
                        Login
                    </button>
                    <button className="bg-orange-500 text-white px-6 py-2 rounded font-semibold transition duration-300 hover:bg-orange-600">
                        Sign Up
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
