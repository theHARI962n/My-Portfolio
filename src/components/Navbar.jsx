import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0d1117] shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo / Name */}
        <h1 className="text-2xl font-bold text-cyan-400">HariHaran R</h1>

        {/* Nav Links */}
        <ul className="hidden md:flex space-x-8 text-lg">
          <li>
            <Link
              to="/"
              
              className="cursor-pointer hover:text-cyan-400"
            >
              Home
            </Link>
          </li>
          <li>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-cyan-400"
            >
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="skills"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-cyan-400"
            >
              Skills
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-cyan-400"
            >
              Projects
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="publications"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-cyan-400"
            >
              Publications
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-cyan-400"
            >
              Contact
            </ScrollLink>
          </li>
          <li>
            <Link to="/blog" className="hover:text-cyan-400">
              Blog
            </Link>
          </li>
        </ul>

        {/* Resume Button */}
        <a
          href="/HARIHARAN_R_Resume.pdf"
          download
          className="ml-6 bg-cyan-400 text-black px-4 py-2 rounded-lg font-medium hover:bg-cyan-300"
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
