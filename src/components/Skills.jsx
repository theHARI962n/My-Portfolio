import React from "react";

const skills = {
  Languages: ["C++", "SQL", "JavaScript"],
  Web: ["ReactJS", "NodeJS", "Express", "MongoDB", "TailwindCSS", "Git/GitHub"],
  DataScience: ["TensorFlow", "Keras", "Pandas", "Matplotlib", "Seaborn"],
  Tools: ["Docker", "Postman", "Agile"],
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center items-center mt-20 rounded-[50px] px-6 py-20 bg-[#111827]"
    >
      <h2 className="text-4xl font-bold mb-12 text-cyan-400">Skills</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-5xl">
        {Object.entries(skills).map(([category, list]) => (
          <div
            key={category}
            className="bg-[#1f2937] p-6 rounded-xl shadow-md hover:shadow-cyan-500/30 transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-4 text-white">{category}</h3>
            <ul className="space-y-2 text-gray-300">
              {list.map((skill) => (
                <li key={skill} className="hover:text-cyan-400 transition">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-20 text-2xl text-gray-300 font-mono font-semibold"> "Open to Learn and Work in New Technologies"</p>
    </section>
  );
};

export default Skills;
