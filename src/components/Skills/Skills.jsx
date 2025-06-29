import React from "react";
import { SkillsInfo } from "../../constants";

const Skills = () => (
  <section
    id="skills"
    className="bg-white dark:bg-black text-black dark:text-white py-16 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 font-sans"
  >
    {/* Section Title */}
    <div className="text-center dark:text-white mb-12 sm:mb-16">
      <h2 className="text-2xl dark:text-white sm:text-3xl md:text-4xl text-gray-800">My Skills</h2>
      <div className="w-16 sm:w-24 h-1 bg-black dark:bg-white mx-auto mt-2"></div>
      <p className="text-xs dark:text-white sm:text-md md:text-md text-gray-500 dark:text-gray-400 mt-3 sm:mt-4 text-base sm:text-sm max-w-xl mx-auto px-2">
        A collection of my technical skills and expertise honed through various projects and experiences.
      </p>
    </div>

    {/* Big Cards Container */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-30">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="bg-gray-50 dark:bg-black p-5 sm:p-6 md:p-8 rounded-2xl shadow-md border border-gray-400 hover:shadow-lg transition duration-300"
        >
          {/* Mother Card Header */}
          <h3 className="text-xl text-center dark:bg-black text-black dark:text-white sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-3">{category.title}</h3>
          <div className="w-12 dark:bg-white bg-black sm:w-16 h-1 mb-3 sm:mb-4 mx-auto"></div>

          {/* Skill Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
            {category.skills?.map((skill) => (
              <div
                key={skill.name}
                className="bg-white dark:bg-black text-black dark:text-white border border-gray-300 text-center px-6 py-8 rounded-2xl shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-[1.02] w-full max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg mx-auto flex flex-col items-center justify-center "
              >
                <img
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  className="w-9 h-9 mb-3"
                />
                <h4 className="text-sm dark:bg-black text-black dark:text-white font-bold text-gray-800 mb-2">{skill.name}</h4>
                {skill.description && (
                  <p className=" dark:bg-black text-black dark:text-white text-[8px] text-gray-500 max-w-[220px]">
                    {skill.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
