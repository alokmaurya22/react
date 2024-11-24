import React from "react";

const WorkSection = () => {
    return (
        <section id="work" className="py-16 bg-[#202537] px-8">
            <h2 className="text-4xl font-bold text-center text-white">Code: Work</h2>
            <div className="mt-8 bg-[#131726] p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-[#63f3ac]">Weknow Technology</h3>
                <p className="text-gray-400 text-sm">Oct 2023 - Mar 2024</p>
                <ul className="mt-4 text-gray-300 list-disc list-inside">
                    <li>Designed and implemented an answer reevaluation module reducing paperwork by 80%.</li>
                    <li>Optimized backend, reducing response time by 100ms and enhancing scalability.</li>
                    <li>Created an admin dashboard for tender management, reducing manual workload by 30%.</li>
                </ul>
            </div>
        </section>
    );
};

export default WorkSection;
