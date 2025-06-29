import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";
import { Toaster } from "react-hot-toast";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.body.classList.add("bg-black", "text-white");
      document.body.classList.remove("bg-white", "text-black");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.add("bg-white", "text-black");
      document.body.classList.remove("bg-black", "text-white");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        let visibleSections = entries.filter((entry) => entry.isIntersecting);
        if (visibleSections.length > 0) {
          const topSection = visibleSections.reduce((prev, curr) =>
            prev.intersectionRatio > curr.intersectionRatio ? prev : curr
          );
          setActiveSection(topSection.target.id);
        }
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <div
      className={`transition-colors duration-300 ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="relative">
        <Navbar theme={theme} setTheme={setTheme} activeSection={activeSection} />
        <About />
        <Skills />
        <Work />
        <Contact />
        <Footer />
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </div>
  );
};

export default App;

