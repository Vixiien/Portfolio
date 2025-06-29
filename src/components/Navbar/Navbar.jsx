import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { BsSun, BsMoon } from "react-icons/bs";

const Navbar = ({ theme, setTheme, activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const ThemeToggleButton = (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Dark Mode"
      className={`relative w-12 h-6 rounded-full flex items-center p-1 transition-colors duration-300 border ${
        theme === "dark"
          ? "bg-gray-700 border-gray-600"
          : "bg-gray-200 border-gray-300"
      }`}
    >
      <div
        className={`w-5 h-5 rounded-full bg-white shadow-md flex items-center justify-center transform transition-transform duration-300 ${
          theme === "dark" ? "translate-x-6" : ""
        }`}
      >
        {theme === "dark" ? (
          <BsMoon className="text-gray-800 text-xs" />
        ) : (
          <BsSun className="text-yellow-500 text-xs" />
        )}
      </div>
    </button>
  );

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        isScrolled ? "shadow-md" : ""
      } ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}
    >
      <div className="py-5 flex justify-between items-center">
        <div className="text-lg font-semibold cursor-pointer">
          <span className="text-[black] dark:text-purple-500">&lt;</span>
          <span>V</span>
          <span className="text-[black] dark:text-purple-500">/</span>
          <span>O</span>
          <span className="text-[black] dark:text-purple-500">&gt;</span>
        </div>

        <ul className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`ml-60 cursor-pointer hover:text-[#8245ec] ${
                activeSection === item.id ? "text-[#8245ec]" : ""
              }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center space-x-4">
          <div className="hidden md:block">{ThemeToggleButton}</div>

          <div className="md:hidden">
            {isOpen ? (
              <FiX
                className="text-3xl text-[black] dark:text-purple-500 cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            ) : (
              <FiMenu
                className="text-3xl text-[black] dark:text-purple-500 cursor-pointer"
                onClick={() => setIsOpen(true)}
              />
            )}
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className={`absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 rounded-lg shadow-lg md:hidden ${
            theme === "dark" ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          <ul className="flex flex-col items-center space-y-4 py-4">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-[#8245ec] ${
                  activeSection === item.id ? "text-[#8245ec]" : ""
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            <li>{ThemeToggleButton}</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
