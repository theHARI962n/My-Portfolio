
import React, { useState } from "react";

const projects = [
  {
    title: "CompileAI",
    description:
      "A full-stack MERN online judge platform with AI integration to provide intelligent hints and problem-solving intuition.",
    tech: ["MERN", "Docker", "Role-based Auth"],
    github: "https://github.com/theHARI962n/OJ-Project",
    demo: "https://compileaifront.vercel.app/", // replace with your live demo link
    caseStudy: {
      problem:
        "Traditional online judges often lack interactive support, making it hard for beginners to debug and learn.",
      approach:
        "Built a MERN-based judge with AI-powered hints, role-based authentication, and an in-browser C++ compiler. Deployed using Docker Compose for scalability.",
      challenges:
        "Handling real-time code execution securely in the browser and integrating AI suggestions without slowing performance.",
      result:
        "Created a scalable, AI-assisted learning tool that makes problem-solving easier and faster for students.",
    },
  },
  {
    title: "Renal Cancer Detection",
    description:
      "Hybrid CNN model combining ResNet50 and Xception for medical image analysis, boosting diagnostic accuracy using Kaggle datasets.",
    tech: ["TensorFlow", "ResNet50", "Xception", "Kaggle"],
    github: "#", // add your repo if public
  },
  {
    title: "Sums AI ",
    description:
      "GenAI-powered Article Summarizer tool that summarizes lengthy articles using OpenAI’s GPT API, reducing text length by 80% while maintaining accuracy.",
    tech: ["React.js", "TailwindCSS", "RapidAPI"],
    github: "https://github.com/theHARI962n/Summize",
  },
  // You can add similar caseStudy objects for Renal Cancer Detection & Sums
];

const Projects = () => {
  const [openProject, setOpenProject] = useState(null);

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-[#0d1117]"
    >
      <h2 className="text-4xl font-bold mb-12 text-cyan-400">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#1f2937] p-6 rounded-xl shadow-md hover:shadow-cyan-500/30 transition duration-300 flex flex-col"
          >
            <h3 className="text-2xl font-semibold mb-4 text-white">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="bg-cyan-500/20 text-cyan-400 px-3 py-1 text-sm rounded-lg"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-auto flex flex-col space-y-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-cyan-400 text-black px-4 py-2 rounded-lg font-medium hover:bg-cyan-300 transition text-center"
              >
                View on GitHub
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border border-cyan-400 text-cyan-400 px-4 py-2 rounded-lg font-medium hover:bg-cyan-400 hover:text-black transition text-center"
                >
                  Live Demo
                </a>
              )}
              <button
                onClick={() => setOpenProject(project)}
                className="inline-block border border-cyan-400 text-cyan-400  px-4 py-2 rounded-lg font-medium hover:bg-purple-400 transition text-center"
              >
                How I built {project.title}
              </button>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-20 text-2xl text-gray-300 font-mono font-semibold">Checkout My Other Projects on <a href="https://github.com/theHARI962n" target="_blank" className="text-cyan-400">Github</a></p>

      {/* Modal */}
      {openProject && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
          <div className="bg-[#1f2937] p-8 rounded-xl max-w-2xl w-full relative shadow-lg">
            <button
              onClick={() => setOpenProject(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">
              {openProject.title} – Case Study
            </h3>
            <p className="text-gray-300 mb-2">
              <span className="font-semibold text-white">Problem: </span>
              {openProject.caseStudy.problem}
            </p>
            <p className="text-gray-300 mb-2">
              <span className="font-semibold text-white">Approach: </span>
              {openProject.caseStudy.approach}
            </p>
            <p className="text-gray-300 mb-2">
              <span className="font-semibold text-white">Challenges: </span>
              {openProject.caseStudy.challenges}
            </p>
            <p className="text-gray-300">
              <span className="font-semibold text-white">Result: </span>
              {openProject.caseStudy.result}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;