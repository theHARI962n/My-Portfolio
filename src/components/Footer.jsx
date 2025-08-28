import React from "react";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  return (
    <>
      <div className="flex justify-center mb-4 bg-slate-300 mx-[490px] rounded-lg p-2">
        <ScrollLink
          to="home" // id of the section you want to scroll to
          smooth={true} // enables smooth scrolling
          duration={500} // scroll speed (ms)
          className="cursor-pointer text-slate-900 hover:text-indigo-500"
        >
          Move to Top
        </ScrollLink>
      </div>
      <footer className="bg-[#111827] py-6 text-center text-gray-400 text-sm rounded-2xl">
        © {new Date().getFullYear()} HariHaran R | Built with React &
        TailwindCSS
      </footer>
    </>
  );
};

export default Footer;
