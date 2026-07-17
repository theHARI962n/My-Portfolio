import React from "react";
import { Link as ScrollLink } from "react-scroll";
import BorderGlow from "../reactbitsdev/BorderGlow";



const Footer = () => {
  return (
    <>
      <div className="flex justify-center mb-4">
        <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer text-white hover:text-indigo-400"
            >
        <BorderGlow
          edgeSensitivity={30}
          glowColor="40 80 80"
          borderRadius={16}
          glowRadius={30}
          colors={['#c084fc', '#f472b6', '#38bdf8']}
        >
          <div className="bg-slate-900 rounded-lg px-4 py-2">
            <p> ↑ </p>
          </div>
        </BorderGlow>
        </ScrollLink>
      </div>

      <footer className="bg-[#111827] my-6 py-4 text-center text-gray-400 text-sm rounded-2xl mx-6 ">
        © {new Date().getFullYear()} HariHaran R | Built with React &
        TailwindCSS
      </footer>
    </>
  );
};

export default Footer;


// const Footer = () => {
//   return (
//     <>
//       <div className="flex justify-center mb-4 bg-slate-300 max-w-fit mx-auto rounded-lg p-2  ">
//         <ScrollLink
//           to="home" // id of the section you want to scroll to
//           smooth={true} // enables smooth scrolling
//           duration={500} // scroll speed (ms)
//           className="cursor-pointer text-slate-900 hover:text-indigo-500"
//         >
//           Move to Top
//         </ScrollLink>
//       </div>
//       <footer className="bg-[#111827] my-6 py-4 text-center text-gray-400 text-sm rounded-2xl mx-6 ">
//         © {new Date().getFullYear()} HariHaran R | Built with React &
//         TailwindCSS
//       </footer>
//     </>
//   );
// };

// export default Footer;
