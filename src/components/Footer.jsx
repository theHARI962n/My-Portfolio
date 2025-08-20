import React from "react";

const Footer = () => {
  return (
    <>
    <div className="mb-4">
    <a href="#home" className="text-cyan-400 ">Move to top</a>
    </div>
    <footer className="bg-[#111827] py-6 text-center text-gray-400 text-sm rounded-2xl">
      © {new Date().getFullYear()} HariHaran R | Built with React & TailwindCSS
    </footer>
    </>
    
  );
};

export default Footer;
