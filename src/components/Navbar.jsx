import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0d1117] shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo / Name */}
        <h1 className="text-2xl font-bold text-cyan-400">HariHaran R</h1>

        {/* Nav Links */}
        <ul className="hidden md:flex space-x-8 text-lg">
          <li><a href="#home" className="hover:text-cyan-400">Home</a></li>
          <li><a href="#about" className="hover:text-cyan-400">About</a></li>
          <li><a href="#skills" className="hover:text-cyan-400">Skills</a></li>
          <li><a href="#projects" className="hover:text-cyan-400">Projects</a></li>
          <li><a href="#publications" className="hover:text-cyan-400">Publications</a></li>
          <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
        </ul>

        {/* Resume Button */}
        <a
          href="/Hariharan-srm-resume.pdf"
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
