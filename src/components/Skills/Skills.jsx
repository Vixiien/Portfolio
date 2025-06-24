import React from "react";
import { SkillsInfo } from "../../constants";

const Skills = () => (
  <section
    id="skills"
    className="bg-white py-24 px-[5vw] md:px-[7vw] lg:px-[10vw] font-sans"
  >
    {/* Section Title */}
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">My Skills</h2>
      <div className="w-24 h-1 bg-black mx-auto mt-2"></div>
      <p className="text-gray-500 mt-4 text-lg max-w-xl mx-auto">
        A collection of my technical skills and expertise honed through various projects and experiences.
      </p>
    </div>

    {/* Skill Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {SkillsInfo.flatMap((category) =>
      category.skills?.map((skill) => (

          <div
            key={skill.name}
            className="bg-white text-center p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={skill.logo}
              alt={`${skill.name} logo`}
              className="w-12 h-12 mx-auto mb-4"
            />
            <h3 className="text-lg font-bold text-gray-900">{skill.name}</h3>
            <p className="text-sm text-gray-500 mt-2">{skill.description}</p>
          </div>
        ))
      )}
    </div>
  </section>
);

export default Skills;
