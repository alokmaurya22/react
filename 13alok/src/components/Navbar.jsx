import React from "react";

const Navbar = () => {
    return (
        <nav className="flex justify-center items-center py-4 bg-[#0a0a23] text-white">
            {/* Left Section: CV */}
            <div className="absolute left-8 text-xl font-bold"> {/* Keeps CV fixed on the left */}
                CV
            </div>

            {/* Center Section: Navbar */}
            <div className="flex justify-between items-center space-x-8 text-lg font-medium">
                <span className="text-2xl font-bold">/</span> {/* Separator */}
                <a
                    href="#work"
                    className="hover:text-orange-500 transition duration-300"
                >
                    WORK
                </a>
                <a
                    href="#projects"
                    className="hover:text-orange-500 transition duration-300"
                >
                    PROJECT
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
