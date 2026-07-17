import React from "react";

const publications = [
  {
    title:
      "A Deep Learning Approach to Renal Cancer Diagnosis: Improving Accuracy in Medical Imaging",
    event:
      "16th International Conference on Computing, Communication and Networking Technologies (ICCCNT 2025)",
    date: "July 6, 2025",
    link: "https://drive.google.com/file/d/1WEl07nyU548rHXMrnT1VxNQLJLkpz3vR/view?usp=share_link", // Replace with paper/certificate link if available
  },
];

const Publications = () => {
  return (
    <section
      id="publications"
      className="min-h-screen flex flex-col justify-center items-center mx-8 rounded-[50px] mb-16 px-6 py-20 bg-[#111827] "
    >
      <h2 className="text-4xl font-bold mb-12 text-cyan-400">Conferences & Presentations</h2>

      <div className="max-w-4xl w-full space-y-6">
        {publications.map((pub, index) => (
          <div
            key={index}
            className="bg-[#1f2937] p-6 rounded-xl shadow-md hover:shadow-cyan-500/30 transition duration-300"
          >
            <h3 className="text-xl font-semibold text-white mb-2">
              {pub.title}
            </h3>
            <p className="text-gray-300 mb-2">
              {pub.event} <br/ > <span className="text-cyan-400">{pub.date}</span>
            </p>
            {pub.link !== "#" && (
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline"
              >
                View Certificate
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Publications;
