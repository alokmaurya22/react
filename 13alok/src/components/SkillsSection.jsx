import React from "react";

const skills = [
    "JavaScript", "React", "MongoDB", "Node.js", "Express", "Firebase",
    "Framer Motion", "Redux Toolkit", "Python", "Java", "Bash", "Git"
];

const SkillsSection = () => {
    return (
        <section id="skills" className="py-16 bg-[#131726] text-center">
            <h2 className="text-4xl font-bold text-white">Code: Skills</h2>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
                {skills.map((skill, index) => (
                    <span key={index} className="px-4 py-2 bg-[#202537] text-white rounded-full shadow-md">
                        {skill}
                    </span>
                ))}
            </div>
        </section>
    );
};

export default SkillsSection;
