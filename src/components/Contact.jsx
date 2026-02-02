import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-[#0d1117]"
    >
      <h2 className="text-4xl font-bold mb-12 text-cyan-400">Get in Touch</h2>

      <p className="text-lg text-gray-300 mb-8 text-center max-w-2xl">
        Feel free to reach out for collaborations, opportunities, or just a tech
        chat!
        <br/>
        Mobile Number: <span className="text-cyan-400">+91 9042590636 </span>
      </p>

      <div className="flex space-x-8 text-3xl">
        <a
          href="mailto:hari20030314@gmail.com"
          className="text-gray-300 hover:text-cyan-400 transition"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/theHARI962n"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-cyan-400 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/hariharan-r-613456267"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-cyan-400 transition"
        >
          <FaLinkedin />
        </a>
      </div>
      <p className="mt-20 text-2xl text-gray-300 font-mono text-center font-semibold">"I am open to collaborations and  would love to work together <br/> on exciting projects."</p>
    </section>
    
  );
};

export default Contact;
