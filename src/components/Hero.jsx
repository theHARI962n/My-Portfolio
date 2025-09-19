import React, { useState } from "react";

const Hero = () => {
  const [openSnapshot, setOpenSnapshot] = useState(false);

  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 "
    >
      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 truncate">
        Hi, I'm <span className="text-cyan-400">HariHaran</span>
      </h1>

      {/* Subheading */}
      <p className="text-lg sm:text-xl md:text-2xl max-w-xl sm:max-w-2xl text-gray-300 mb-6">
        Aspiring Software Developer | Full-Stack & AI Enthusiast
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
        <a
          href="#projects"
          className="bg-cyan-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-cyan-300 text-center"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="border border-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black text-center"
        >
          Contact Me
        </a>
        <button
          onClick={() => setOpenSnapshot(true)}
          className="border border-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black text-center"
        >
          Tech Snapshot
        </button>
      </div>

      {/* Snapshot Modal */}
      {openSnapshot && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-4">
          <div className="bg-[#1f2937] p-6 sm:p-8 rounded-xl w-full max-w-lg sm:max-w-3xl relative shadow-lg text-gray-300 overflow-y-auto max-h-[90vh]">
            {/* Close Button */}
            <button
              onClick={() => setOpenSnapshot(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
            >
              ✕
            </button>

            {/* Header */}
            <h2 className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-6 text-center">
              Quick Tech Snapshot
            </h2>

            <p className="text-gray-400 mb-8 text-center text-sm sm:text-base">
              Hi 👋, just in case you don’t have time to scroll through my whole
              portfolio, here’s a quick glance at my skills, projects, and
              achievements.
            </p>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Skills */}
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-cyan-300 mb-2">
                  Skills
                </h3>
                <p>C++, React, Node, MongoDB, Tailwind, TensorFlow, Docker</p>
              </div>

              {/* Projects */}
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-cyan-300 mb-2">
                  Top Projects
                </h3>
                <ul className="list-disc list-inside space-y-1 text-sm sm:text-base">
                  <li>
                    <a
                      href="https://github.com/theHARI962n/OJ-Project"
                      target="_blank"
                      className="text-cyan-400 hover:underline"
                    >
                      CompileAI
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/theHARI962n/Summize"
                      target="_blank"
                      className="text-cyan-400 hover:underline"
                    >
                      Sums – Summarizer
                    </a>
                  </li>
                </ul>
              </div>

              {/* Publication */}
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-cyan-300 mb-2">
                  Conference
                </h3>
                <p>ICCCNT 2025 – Renal Cancer Detection</p>
              </div>

              {/* Experience */}
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-cyan-300 mb-2">
                  Experience
                </h3>
                <p>Co-op Intern @ Algo University</p>
                <p>Volunteer @ Gold Heart Foundation</p>
              </div>

              {/* Links */}
              <div className="md:col-span-2">
                <h3 className="text-lg sm:text-xl font-semibold text-cyan-300 mb-2">
                  🔗 Links
                </h3>
                <div className="flex gap-4 justify-center ">
                  <a
                    href="https://github.com/theHARI962n"
                    target="_blank"
                    className="text-cyan-400 hover:underline"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/hariharan-r-613456267"
                    target="_blank"
                    className="text-cyan-400 hover:underline"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="mailto:hari20030314@gmail.com"
                    className="text-cyan-400 hover:underline"
                  >
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
