import React from "react";

const ContactSection = () => {
    return (
        <section id="contact" className="py-16 bg-[#202537] px-8 text-center">
            <h2 className="text-4xl font-bold text-white">Code: Contact</h2>
            <form className="mt-6 flex flex-col space-y-4">
                <input
                    type="text"
                    placeholder="Name"
                    className="p-3 bg-[#131726] rounded-lg text-white"
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="p-3 bg-[#131726] rounded-lg text-white"
                />
                <textarea
                    placeholder="Message"
                    className="p-3 bg-[#131726] rounded-lg text-white"
                    rows="4"
                ></textarea>
                <button className="px-6 py-3 bg-[#63f3ac] text-black rounded-lg font-semibold hover:bg-[#52c593]">
                    Submit
                </button>
            </form>
        </section>
    );
};

export default ContactSection;
