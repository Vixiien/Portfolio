import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profileImage from '../../assets/vo.jpg';

const About = () => {
  return (
    <section
      id="about"
      className="bg-white dark:bg-black text-black dark:text-white py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-16 transition-colors duration-300"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 leading-tight">
            Hi, I'm
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Vic D. Ocasla
          </h2>

          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span>I am a </span>
            <ReactTypingEffect
              text={['Web Developer']}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>

          {/* About Me Paragraph */}
          <p className="text-xs mb-10 mt-8 leading-relaxed text-justify">
            I am a recent graduate with a strong foundation in front-end web development. I have hands-on experience building responsive and user-friendly interfaces using HTML, CSS, JavaScript, and React. I'm passionate about creating engaging digital experiences that prioritize usability and performance.
          </p>

          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1Nz510kLq3YM9t_gxC00GxD8DOgsXJCPk/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-black inline-block dark:bg-white dark:text-black text-white py-2 px-6 mb-28 rounded-md text-lg font-bold transition duration-300 transform hover:scale-105 ml-4 border border-gray-300"
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src={profileImage}
            alt="Vic D. Ocasla"
            className="w-44 h-44 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
