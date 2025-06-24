import React, { useState } from "react";
import { projects } from "../../constants";
import { ExternalLink } from "lucide-react";
import { Info } from "lucide-react";
import toast from "react-hot-toast";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  const handleViewAllClick = () => {
    toast.custom((t) => (
      <div
        className={`flex items-start gap-3 p-4 rounded-xl shadow-md border border-blue-200 bg-blue-50 text-blue-700 max-w-md w-full ${
          t.visible ? "animate-enter" : "animate-leave"
        }`}
      >
        <button
          onClick={() => toast.dismiss(t.id)}
          className="text-blue-500 hover:text-blue-700 focus:outline-none text-xl"
        >
          ×
        </button>
        <div className="flex items-center gap-2">
          <div className="bg-blue-100 text-blue-600 rounded-full p-2">
            <Info className="w-5 h-5" />
          </div>
          <span className="text-sm font-medium text-blue-700">More projects to come</span>
        </div>

      </div>
    ));
  };

  return (
    <section
      id="projects"
      className="bg-white py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans"
    >
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-black">My Projects</h2>
        <div className="w-32 h-1 bg-black mx-auto mt-4"></div>
        <p className="text-gray-500 mt-4 text-lg max-w-xl mx-auto">
          A showcase of the projects I’ve worked on using modern tools and frameworks
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className=" bg-white rounded-xl shadow-md border border-gray-500 hover:shadow-lg transition-transform hover:-translate-y-1 duration-300 text-white"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-38 object-cover rounded-t-xl border-b border-gray-500"
            />

            <div className="p-6 flex flex-col h-full justify-between">
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-sm text-white px-3 py-1 rounded-full border"
                      style={{
                        background: "black",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href="https://cocreatea.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 hover:bg-black text-white text-sm font-medium px-4 py-2 rounded-md transition"
                  style={{
                    background:
                      "linear-gradient(90deg,rgb(115, 55, 219),rgb(148, 42, 247))",
                  }}
                >
                  <ExternalLink className="w-4 h-4" />
                  Website
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Projects Button */}
      <div className="flex justify-center mt-10 ">
        <a
          href="#projects"
          onClick={handleViewAllClick}
          className="inline-block px-6 py-2 border border-gray-300 rounded-md text-sm text-black hover:shadow-md transition"
        >
          View All Projects
        </a>
      </div>
    </section>
  );
};

export default Work;
