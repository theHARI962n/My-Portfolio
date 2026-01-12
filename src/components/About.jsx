import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col rounded-[50px] mx-8 justify-center items-center px-6 py-10 bg-[#0d1117] border  border-cyan-400"
    >
      <h2 className="text-4xl font-bold mb-8 text-cyan-400">About Me</h2>

      <div className="max-w-4xl text-center space-y-6 text-gray-300">
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
          Currently, I’m strengthening my foundations more in{" "}
          <span className="text-white font-semibold">
            DSA, low-level & high-level system design, Spring Boot, cloud
            technologies, and GenAI
          </span>
          , with a long-term goal of building{" "}
          <span className="text-white font-semibold">
            scalable SaaS products
          </span>
          .
        </p>
      </div>
    </section>
  );
};

export default About;
