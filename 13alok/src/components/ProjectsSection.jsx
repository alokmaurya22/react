import React from "react";

const projects = [
    { title: "CollabCode", description: "Real-time code editor", stack: "MongoDB, React, Node.js", link: "#" },
    { title: "OpenPen", description: "Secure blogging platform", stack: "MongoDB, Express, React", link: "#" },
    { title: "ShopHere", description: "E-commerce website", stack: "Bootstrap, React", link: "#" },
    { title: "News Lelo", description: "Dynamic news platform", stack: "Bootstrap, PHP, MySQL", link: "#" },
    { title: "TicTacToe", description: "Simple Tic-Tac-Toe game", stack: "React, JavaScript", link: "#" },
    { title: "Weather App", description: "Weather App with OpenWeatherMap", stack: "JavaScript, CSS, HTML", link: "#" }
];

const ProjectsSection = () => {
    return (
        <section id="projects" className="py-16 bg-[#131726] px-8">
            <h2 className="text-4xl font-bold text-center text-white">Code: Projects</h2>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
                {projects.map((project, index) => (
                    <div key={index} className="p-6 bg-[#202537] rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold text-[#63f3ac]">{project.title}</h3>
                        <p className="text-gray-400 mt-2">{project.description}</p>
                        <p className="text-gray-500 text-sm mt-2">Stack: {project.stack}</p>
                        <a
                            href={project.link}
                            className="block mt-4 text-[#63f3ac] hover:underline"
                            target="_blank"
                            rel="noreferrer"
                        >
                            View Project
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;
