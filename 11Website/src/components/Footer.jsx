import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#030712] py-6">
            <div className="container mx-auto px-4 flex justify-between items-center text-sm text-gray-400">
                <div className="text-xl font-bold text-orange-500">Coding Hero</div>
                <div className="flex space-x-4">
                    <a href="#" className="hover:text-orange-500">Privacy Policy</a>
                    <a href="#" className="hover:text-orange-500">Terms of Service</a>
                    <a href="#" className="hover:text-orange-500">Contact Us</a>
                </div>
            </div>
            <div className="container mx-auto px-4 mt-4 text-center text-gray-500 text-xs">
                © 2023 Coding Hero. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
