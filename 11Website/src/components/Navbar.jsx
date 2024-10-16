import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-dark text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">Coding Hero</h1>
                <div className="space-x-4">
                    <button className="px-4 py-2 text-white">Login</button>
                    <button className="px-4 py-2 bg-orange-500 rounded-lg">Sign Up</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
