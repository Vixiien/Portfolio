import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";
import { Toaster } from "react-hot-toast";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="bg-[#050414]">
      
      <div className="relative pt-50">
        <Navbar />
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
