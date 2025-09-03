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
          Computer Science undergraduate at{" "}
          <span className="text-white font-semibold">SRM Institute of Science and Technology</span>{" "}
          with a CGPA of <span className="text-cyan-400">9.22/10</span>.
        </p>

        <p className="text-lg leading-relaxed">
          I specialize in{" "}
          <span className="text-white font-semibold">
            full-stack development and AI integration
          </span>
          , building real-world projects ranging from online judge platforms to
          deep learning medical applications.
        </p>

        <p className="text-lg leading-relaxed">
          My goal is to join a strong software development team where I can{" "}
          <span className="text-white font-semibold">
            apply problem-solving, learn continuously, and contribute to
            impactful solutions and have a proffessional growth.
          </span>
        </p>
      </div>
    </section>
  );
};

export default About;
