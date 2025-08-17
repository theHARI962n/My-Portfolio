import React from "react";

const experiences = [
  {
    role: "Co-op Intern",
    org: "Algo University (Y-combinator backed startup)",
    duration: "3 Months",
    description:
      "Worked on project-based learning and problem-solving sessions, focusing on Data Structures, Algorithms, and software development practices.",
  },
  {
    role: "Community Volunteer",
    org: "Gold Heart Foundation",
    duration: "1 Month",
    description:
      "Helped kids in their studies and academic growth, improving communication and leadership skills while contributing to community development.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-[#111827]"
    >
      <h2 className="text-4xl font-bold mb-12 text-cyan-400">Experience</h2>

      <div className="max-w-4xl w-full relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-cyan-400"></div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`flex items-center w-full ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <div className="bg-[#1f2937] w-[90%] md:w-[45%] p-6 rounded-xl shadow-md hover:shadow-cyan-500/30 transition">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {exp.role} – {exp.org}
                </h3>
                <p className="text-sm text-cyan-400 mb-2">{exp.duration}</p>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
