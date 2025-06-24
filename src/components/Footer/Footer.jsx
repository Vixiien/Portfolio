import React from "react";
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-4 px-20">
      <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-black gap-2 sm:gap-0">
        {/* Left - Copyright */}
        <p className="text-center sm:text-left">© 2025 Vic D. Ocasla. All rights reserved.</p>

        {/* Right - Social Media Icons */}
        <div className="flex space-x-3">
          {[
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/vic-ocasla/" },
            { icon: <FaGithub />, link: "https://github.com/Vixiien" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/vixxieenn/" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>

    </footer>
  );
};

export default Footer;
