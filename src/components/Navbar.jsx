import React, { useState , useRef} from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X, Search } from "lucide-react";

const Navbar = ({ onSearchOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef(null);
  const [showTooltip, setShowTooltip] = useState(false);


  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0d1117] shadow-md z-50 overflow-x-hidden">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-cyan-400">
          HariHaran R
        </h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-lg items-center">
          {[
            { label: "Home", to: "home" },
            { label: "About", to: "about" },
            { label: "Skills", to: "skills" },
            { label: "Projects", to: "projects" },
            { label: "Publications", to: "publications" },
            { label: "Contact", to: "contact" },
          ].map((item) => (
            <li key={item.label} className="relative group">
              <ScrollLink
                to={item.to}
                smooth
                duration={500}
                className="cursor-pointer hover:text-cyan-400"
              >
                {item.label}
              </ScrollLink>
              <span
                className="absolute -bottom-1 left-1/2 -translate-x-1/2 
                w-1 h-1 bg-cyan-400 rounded-full 
                scale-0 group-hover:scale-100 transition-transform duration-300"
              />
            </li>
          ))}

          <li className="relative group">
            <Link to="/blog" className="hover:text-cyan-400">
              Blog
            </Link>
            <span
              className="absolute -bottom-1 left-1/2 -translate-x-1/2 
              w-1 h-1 bg-cyan-400 rounded-full 
              scale-0 group-hover:scale-100 transition-transform duration-300"
            />
          </li>

          {/* 🔍 Search Icon */}
          <li
            ref={searchRef}
            className="relative cursor-pointer"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <Search
              size={20}
              onClick={onSearchOpen}
              className="text-cyan-400 hover:scale-110 transition"
            />
          </li>


            {/* <div
              className="
                      fixed top-16
                      left-1/2 -translate-x-1/2
                     bg-gray-100 text-black text-xs
                      px-2 py-1 rounded-md shadow-lg
                      opacity-0 group-hover:opacity-100
                      transition pointer-events-none
                      whitespace-nowrap z-[9999]
                    "
            >
              ⌘ K
            </div> */}
          
        </ul>
      {showTooltip && searchRef.current && (
        <div
          style={{
            position: "fixed",
            top:
              searchRef.current.getBoundingClientRect().bottom + 8,
            left:
              searchRef.current.getBoundingClientRect().left +
              searchRef.current.getBoundingClientRect().width / 2,
            transform: "translateX(-50%)",
          }}
          className="
      bg-gray-100 text-black text-xs
      px-2 py-1 rounded-md shadow-lg
      pointer-events-none z-[9999]
      whitespace-nowrap
    "
        >
          ⌘ K
        </div>
      )}


        {/* Resume */}
        <a
          href="/HariharanRsrm_Resume.pdf"
          download
          className="hidden sm:inline-block ml-4 bg-cyan-400 text-black px-4 py-2 rounded-lg font-medium hover:bg-cyan-300"
        >
          Resume
        </a>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-cyan-400 ml-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown (unchanged) */}
      {isOpen && (
        <div className="md:hidden bg-[#0d1117] border-t border-gray-700 px-6 py-4 space-y-4 text-lg">
          {["about", "skills", "projects", "publications", "contact"].map(
            (sec) => (
              <ScrollLink
                key={sec}
                to={sec}
                smooth
                duration={500}
                onClick={() => setIsOpen(false)}
                className="block hover:text-cyan-400"
              >
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
              </ScrollLink>
            ),
          )}

          <Link to="/blog" className="block hover:text-cyan-400">
            Blog
          </Link>

          <a
            href="/HariharanRsrm_Resume.pdf"
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
