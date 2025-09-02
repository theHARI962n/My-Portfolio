import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X } from "lucide-react"; // hamburger & close icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0d1117] shadow-md z-50 overflow-x-hidden ">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8 ">
        {/* Logo / Name */}
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-cyan-400">
          HariHaran R
        </h1>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-8 text-lg">
          <li>
            <Link to="/" className="cursor-pointer hover:text-cyan-400">
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

        {/* Resume Button (always visible) */}
        <a
          href="/Hariharan_srm_resume.pdf"
          download
          className="hidden sm:inline-block ml-4 bg-cyan-400 text-black px-4 py-2 rounded-lg font-medium hover:bg-cyan-300"
        >
          Resume
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-cyan-400 ml-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#0d1117] border-t border-gray-700 px-6 py-4 space-y-4 text-lg">
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            onClick={() => setIsOpen(false)}
            className="block hover:text-cyan-400"
          >
            About
          </ScrollLink>
          <ScrollLink
            to="skills"
            smooth={true}
            duration={500}
            onClick={() => setIsOpen(false)}
            className="block hover:text-cyan-400"
          >
            Skills
          </ScrollLink>
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            onClick={() => setIsOpen(false)}
            className="block hover:text-cyan-400"
          >
            Projects
          </ScrollLink>
          <ScrollLink
            to="publications"
            smooth={true}
            duration={500}
            onClick={() => setIsOpen(false)}
            className="block hover:text-cyan-400"
          >
            Publications
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            onClick={() => setIsOpen(false)}
            className="block hover:text-cyan-400"
          >
            Contact
          </ScrollLink>
          <Link
            to="/blog"
            onClick={() => setIsOpen(false)}
            className="block hover:text-cyan-400"
          >
            Blog
          </Link>

          {/* Resume Button inside mobile menu */}
          <a
            href="/Hariharan_srm_resume.pdf"
            download
            className="block bg-cyan-400 text-black px-4 py-2 rounded-lg font-medium hover:bg-cyan-300 text-center"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

