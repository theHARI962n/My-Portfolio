import React from "react";
import profilePhoto from "../assets/photo.webp";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col rounded-[50px] mx-8 justify-center items-center px-6 py-10 bg-[#0d1117] border border-cyan-400"
    >
      <h2 className="text-4xl font-bold mb-8 text-cyan-400">About Me</h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16 max-w-5xl w-full">
        {/* Profile Photo Wrapper */}
        <div className="flex-shrink-0 flex justify-center">
          <img
            src={profilePhoto}
            alt="HariHaran R"
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[280px] md:h-[280px] rounded-full object-cover border-2 border-cyan-400/50 shadow-[0_10px_30px_rgba(0,0,0,0.5),0_0_20px_rgba(34,211,238,0.15)]"
          />
        </div>

        {/* Existing About Content */}
        <div className="max-w-xl md:max-w-2xl text-center md:text-left space-y-6 text-gray-300">
          <p className="text-lg leading-relaxed">
            I’m <span className="text-white font-semibold">HariHaran R</span>, a
            final-year Computer Science undergraduate at{" "}
            <span className="text-white font-semibold">
              SRM Institute of Science and Technology
            </span>{" "}
            with a CGPA of <span className="text-cyan-400">9.22/10</span>, and an{" "}
            <span className="text-white font-semibold">
              incoming Software Engineer at Bank of America
            </span>
            .
          </p>

          <p className="text-lg leading-relaxed">
            I focus on{" "}
            <span className="text-white font-semibold">
              backend engineering, system design, and GenAI (RAG) applications
            </span>
            , building practical, real-world projects such as PDF RAG chatbots,
            CompileAI and Renal Cancer Detection.
          </p>

          <p className="text-lg leading-relaxed">
            I Love Bringing Ideas to Life , I enjoy building AI products and deep diving into low level system design and learning how real world systems work.
          </p>
          <p className="text-lg leading-relaxed">
            Currently, I’m strengthening my foundations more in{" "}
            <span className="text-white font-semibold">
              DSA, low-level & high-level system design, Spring Boot, cloud
              technologies, and GenAI
            </span>
            , with a long-term goal of building{" "}
            <span className="text-white font-semibold">
              scalable products
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
