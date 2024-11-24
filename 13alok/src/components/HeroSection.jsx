import React from "react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import "./heroSection.css"; // Make sure the CSS file is imported

const HeroSection = () => {
    return (
        <section className="relative flex flex-col lg:flex-row items-center justify-between min-h-screen bg-[#0a0a23] text-white px-10 overflow-hidden">
            <div className="wrapper">
                {/* Bubbles with Dot Inside */}
                <div className="bubble">
                    <div className="dot"></div>
                </div>
                <div className="bubble">
                    <div className="dot"></div>
                </div>
                <div className="bubble">
                    <div className="dot"></div>
                </div>
                <div className="bubble">
                    <div className="dot"></div>
                </div>
                <div className="bubble">
                    <div className="dot"></div>
                </div>
                <div className="bubble">
                    <div className="dot"></div>
                </div>
                <div className="bubble">
                    <div className="dot"></div>
                </div>
                <div className="bubble">
                    <div className="dot"></div>
                </div>
                <div className="bubble">
                    <div className="dot"></div>
                </div>
                <div className="bubble">
                    <div className="dot"></div>
                </div><div className="bubble">
                    <div className="dot"></div>
                </div>
                <div className="bubble">
                    <div className="dot"></div>
                </div>
                <div className="bubble">
                    <div className="dot"></div>
                </div>
                <div className="bubble">
                    <div className="dot"></div>
                </div>
                <div className="bubble">
                    <div className="dot"></div>
                </div>
                <div className="bubble">
                    <div className="dot"></div>
                </div>
                <div className="bubble">
                    <div className="dot"></div>
                </div>
                <div className="bubble">
                    <div className="dot"></div>
                </div>
                <div className="bubble">
                    <div className="dot"></div>
                </div>
            </div>

            {/* Left Side: Text Content */}
            <div className="lg:w-1/2 space-y-4 z-10 text-center lg:text-left lg:pl-40">
                <h1 className="text-5xl md:text-6xl font-extrabold text-blue-400">ALOK Maurya</h1>
                <p className="text-2xl font-semibold">
                    Full Stack Wizard.<br /> Freelancer.
                </p>
                <p className="text-xl">
                    Converts{" "}
                    <span className="text-green-400 font-bold">air</span> into{" "}
                    <span className="text-purple-400 font-bold">code</span>
                </p>

                {/* Social Icons */}
                <div className="flex justify-center lg:justify-start space-x-6 text-3xl mt-4">
                    <a href="#linkedin" className="hover:scale-125 transition duration-300" target="_blank" rel="noopener noreferrer" style={{ color: "#fdbd6e" }}>
                        <FaLinkedin />
                    </a>
                    <a href="#twitter" className="hover:scale-125 transition duration-300" target="_blank" rel="noopener noreferrer" style={{ color: "#fdbd6e" }}>
                        <FaTwitter />
                    </a>
                    <a href="#github" className="hover:scale-125 transition duration-300" target="_blank" rel="noopener noreferrer" style={{ color: "#fdbd6e" }}>
                        <FaGithub />
                    </a>
                </div>

                {/* NPX Button */}
                <div className="mt-6">
                    <button className="bg-transparent border-2 border-white px-6 py-2 rounded-full text-lg font-medium hover:bg-white hover:text-black transition duration-300">
                        npx alokmaurya22
                    </button>
                </div>
            </div>

            {/* Right Side: Profile Placeholder */}
            <div className="lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0 lg:pr-40">
                <div className="w-60 h-60 bg-black rounded-lg border-[10px] border-[#00f0ff] transform hover:scale-105 hover:rotate-3d transition-all duration-300 shadow-2xl">
                    {/* Profile Image */}
                    <img src="https://github.com/alokmaurya22.png" alt="Profile" className="w-full h-full object-cover rounded-lg" />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
