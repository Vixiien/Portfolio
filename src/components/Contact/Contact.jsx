import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Phone } from "lucide-react";
import {Mail} from "lucide-react";


const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4fha9ep",  // Replace with your EmailJS Service ID
        "template_kgedue8",  // Replace with your EmailJS Template ID
        form.current,
        "Jd92ra7Nieh1-6ssR"  // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset(); // Reset form fields after sending
          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="bg-white dark:bg-black text-black dark:text-white py-24 px-[12vw] md:px-[7vw] lg:px-[10vw] font-sans"
    >
      {/* Toast Container */}
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-2xl dark:text-white sm:text-3xl md:text-4xl text-black dark:text-white">Get In Touch</h2>
        <div className="w-32 h-1 bg-black dark:bg-white mx-auto mt-4"></div>
        <p className="text-gray-500 dark:text-gray-400 mt-4 text-xs dark:text-white sm:text-md md:text-md">
          Have a project in mind or interested in potential opportunities? I’d be happy to connect!
        </p>
      </div>

      {/* Flex Container for Form & Contact Info */}
      <div className="flex flex-col md:flex-row gap-12 justify-center items-start">
        
        {/* Contact Form */}
        <div className="w-full md:w-1/2 bg-white dark:bg-black text-black dark:text-white p-6 rounded-lg shadow-lg border border-gray-300">
          <h3 className="text-xl text-black text-center dark:bg-black text-black dark:text-white">Connect With Me</h3>
          <form ref={form} onSubmit={sendEmail} className="mt-4 flex flex-col space-y-4">
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-md bg-white text-black border border-gray-600 focus:outline-none focus:border-purple-500"
            />
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-md bg-white text-black border border-gray-600 focus:outline-none focus:border-purple-500"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full p-3 rounded-md bg-white text-black border border-gray-600 focus:outline-none focus:border-purple-500"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              required
              className="w-full p-3 rounded-md bg-white text-black border border-gray-600 focus:outline-none focus:border-purple-500"
            />
            <button
              type="submit"
              className="w-40 bg-black dark:bg-purple-500 text-black dark:text-white py-3 text-white rounded-md hover:opacity-90 transition self-center"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="w-full max-w-xl mx-auto bg-white dark:bg-black text-black dark:text-white p-4 sm:p-6 rounded-lg shadow-lg border border-gray-300">
          <div className="flex items-start gap-4 mb-4 sm:mb-6">
            <div className="bg-[#0D1B2A] dark:bg-purple-500 p-2 sm:p-3 rounded-md">
              <Mail className="text-white w-5 h-5" />
            </div> 
            <div>
              <h4 className="text-black dark:bg-black text-black dark:text-white font-semibold text-base sm:text-lg">Email</h4>
              <p className="text-gray-600 dark:bg-black text-black dark:text-white text-sm sm:text-base">vicocasla14@gmail.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4 mb-4 sm:mb-6">
            <div className="bg-[#0D1B2A] dark:bg-purple-500 p-2 sm:p-3 rounded-md">
              <Phone className="text-white w-5 h-5" />
            </div>
            <div>
              <h4 className="text-black dark:bg-black text-black dark:text-white font-semibold text-base sm:text-lg">Phone Number</h4>
              <p className="text-gray-600 dark:bg-black text-black dark:text-white text-sm sm:text-base">+63 921-2335-490</p>
            </div>
          </div>

          <p className="dark:bg-black text-black dark:text-white text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
            I'm always interested in hearing about new opportunities, whether it's a freelance project, full-time position, or just a friendly chat about web development.
          </p>

          <p className="dark:bg-black text-black dark:text-white text-gray-600 text-sm sm:text-base">
            Let's build something amazing together!
          </p>
        </div>

      </div>
    </section>

  );
};

export default Contact;
