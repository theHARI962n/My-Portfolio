
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
      problem: [
        "With Rise in AI , students often arent able to solve DSA problems as they just copy paste problems in GPT and other AI tools.So I came up with a solution to make problem solving intersiting with AI help.In our Solution we have implemented a MERN Stack based online judge platform with AI integration to provide intelligent hints and problem-solving intuition,not the full code.",
      ],
      approach: [
        "Built with MERN stack, structured into frontend, backend, and compiler services for scalability",
        "Implemented role-based authentication: ",
        "Admin → CRUD operations on problem sets.",
        " User → solve problems using an in-browser C++ compiler.",
        "Used CodeMirror for code editing and UUID for execution isolation.",
        " Integrated Gemini API for intelligent, context-based hints tied to each problem.",
        "Deployed with Docker Compose for scalable service orchestration.",
      ],
      challenges: [
        "Handling real-time code execution  in the browser and integrating AI suggestions and hints accurately for each problem.",
        "Managing API communication between frontend, backend, and compiler services was difficult.",
      ],
      result: [
        "Created an AI-assisted learning tool that makes problem-solving easier and faster for students, will help them to crack DSA rounds more efficiently.Try the live demo link to experience it and provide your feedback to improve.",
      ],
    },
  },
  {
    title: "Renal Cancer Detection",
    description:
      "Hybrid CNN model combining ResNet50 and Xception for medical image analysis, boosting diagnostic accuracy using Kaggle datasets.",
    tech: ["TensorFlow", "ResNet50", "Xception", "Kaggle"],
    github: "https://github.com/theHARI962n/OJ-Project",
    demo: "https://compileaifront.vercel.app/", // replace with your live demo link
    caseStudy: {
      problem: [
        "Kidney cancer cases are rising in India (~2% of all cancers), especially renal cell carcinoma.Early detection is difficult due to limited specialists and subtle imaging patterns often missed in CT scans.Needed an AI-powered system to support early, reliable detection.",
      ],
      approach: [
        "Built a hybrid CNN model combining ResNet50 and Xception, leveraging transfer learning.",
        "Preprocessed and trained on 10,000+ medical images from Kaggle datasets.",
        "Used ImageDataGenerator for training/validation pipeline with batch size = 30.",
        "Extracted deep features via Global Average Pooling and combined outputs with a Concatenate layer.",
        "Extracted deep features via Global Average Pooling and combined outputs with a Concatenate layer.",
        "Applied Dropout (0.5) to reduce overfitting and trained with SGD & Adam optimizers.",
        "Achieved ~98.6% accuracy within 15 epochs, with validation accuracy reaching 100%.",
        "Saved the trained model as LastModel.h5 and visualized learning curves (loss/accuracy).",
        "Integrated Streamlit web app → allowed doctors to upload/drag & drop CT scans and instantly get results",
      ],
      challenges: [
        "Ensuring model accuracy while avoiding overfitting on limited medical datasets.",
        "Designing a user-friendly interface suitable for non-technical healthcare professionals.",
      ],
      result: [
        "Reduced the time doctors spend on manual diagnosis, enabling faster treatment decisions,Provided a tool especially impactful in rural/underserved regions with limited specialists.",
        "Work was accepted and presented at ICCCNT 2025.",
      ],
    },
  },
  {
    title: "Sums AI",
    description:
      "GenAI-powered Article Summarizer tool that summarizes lengthy articles using OpenAI’s GPT API, reducing text length by 80% while maintaining accuracy.",
    tech: ["React.js", "TailwindCSS", "RapidAPI"],
    github: "https://github.com/theHARI962n/Summize",
    demo: "", // replace with your live demo link
    caseStudy: {
      problem: [
        "In today’s fast-paced world, people don’t have time to read long articles, research papers, or blogs","Information overload makes it hard to extract key insights quickly.Traditional summarizers are either not accurate or lack a user-friendly interface."
      ],
      approach: [
        "Built SumsAI, a modern React.js + Vite web app that generates concise summaries from long-form articles.",
        "Integrated RapidAPI’s Article Summarizer (OpenAI GPT) endpoint for AI-generated summaries.",
        "Designed a modern, responsive UI using Tailwind CSS for accessibility and clean aesthetics.",
        "Extracted deep features via Global Average Pooling and combined outputs with a Concatenate layer.",
        "Added Clipboard integration to copy summaries with one click.",
        "Built Browser History storage using LocalStorage, enabling users to revisit past summaries without re-fetching.",
        "Achieved ~98.6% accuracy within 15 epochs, with validation accuracy reaching 100%.",
        "Saved the trained model as LastModel.h5 and visualized learning curves (loss/accuracy).",
        "Integrated Streamlit web app → allowed doctors to upload/drag & drop CT scans and instantly get results",
      ],
      challenges: [
        "Managing API errors (failed fetch, no response, etc.) and showing proper error messages.",
        "Persisting summaries in LocalStorage while keeping the UI state in sync.",
      ],
      result: [
        "Developed a fully functional AI-powered summarizer that reduces long articles into short, digestible summaries.",
        "Improved productivity for users by letting them save, revisit, and copy summaries instantly.",
      ],
    },
  },
  // You can add similar caseStudy objects for Renal Cancer Detection & Sums
];

const Projects = () => {
  const [openProject, setOpenProject] = useState(null);

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-[#0d1117] "
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

      <p className="mt-20 text-2xl text-gray-300 font-mono font-semibold">
        Checkout My Other Projects on{" "}
        <a
          href="https://github.com/theHARI962n"
          target="_blank"
          className="text-cyan-400"
        >
          Github
        </a>
      </p>

      {/* Modal */}
      {openProject && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
          <div className="bg-[#1f2937] p-8 rounded-xl max-w-2xl w-full relative shadow-lg max-h-[90vh] overflow-y-auto ">
            <button
              onClick={() => setOpenProject(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">
              {openProject.title} – How I Built It
            </h3>
            <p className="text-gray-300 mb-2">
              <span className="font-semibold text-white">Problem: </span>
              <ul className="list-disc list-inside mt-2 space-y-1">
                {openProject.caseStudy.problem.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </p>
            <p className="text-gray-300 mb-2">
              <span className="font-semibold text-white">Approach: </span>
              <ul className="list-disc list-inside mt-2 space-y-1">
                {openProject.caseStudy.approach.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </p>
            <p className="text-gray-300 mb-2">
              <span className="font-semibold text-white">Challenges: </span>
              <ul className="list-disc list-inside mt-2 space-y-1">
                {openProject.caseStudy.challenges.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
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