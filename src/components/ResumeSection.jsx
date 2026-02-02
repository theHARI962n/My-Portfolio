import React, { useState } from "react";
import { FileText } from "lucide-react";

export default function Resume() {
  const [open, setOpen] = useState(false);

  const pdfUrl = "/HariharanRsrm_Resume.pdf"; // put your resume in public folder

  return (
    <section id="resume" className="mt-16 py-16 px-4 max-w-6xl mx-auto text-center">
      <section className="bg-[#111827] py-14 rounded-[50px] ">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-cyan-400">
          Resume
        </h2>
        <button className="items-center justify-center bg-cyan-400 hover:bg-cyan-300 text-black rounded-full w-16 h-16 p-4 transition">
          <FileText size={28} />
        </button>
        <h3 className="py-4 text-2xl  text-cyan-400 font-bold">
          View my Resume{" "}
        </h3>
        <p className="text-gray-300 mb-8">
          Download or view my complete professional resume with <br />
          detailed information about my experience, education, and skills.
        </p>

        <div className="flex justify-center gap-4">
          {/* View Resume Button */}
          <button
            onClick={() => setOpen(true)}
            className="bg-cyan-400 text-black px-6 py-2 rounded-lg font-medium hover:bg-cyan-300 transition"
          >
            View Resume
          </button>

          {/* Download PDF Button */}
          <a
            href={pdfUrl}
            download
            className="bg-transparent border border-cyan-400 text-cyan-400 px-6 py-2 rounded-lg font-medium hover:bg-cyan-400 hover:text-black transition"
          >
            Download PDF
          </a>
        </div>
      </section>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 flex justify-center items-center z-50"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-[#0d1117] w-[90%] max-w-5xl h-[80vh] rounded-xl p-6 
             flex flex-col overflow-hidden border border-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <p className="text-2xl text-gray-300">View Resume</p>

              <button
                onClick={() => setOpen(false)}
                className="text-gray-400 hover:text-white text-3xl "
                aria-label="Close"
              >
                x
              </button>
              
            </div>

            {/* PDF Viewer */}
            <iframe
              src={pdfUrl}
              title="Resume PDF"
              className="w-full flex-1 rounded-md border border-gray-700"
            ></iframe>
            <div className="flex items-center justify-between mt-2">
            <p className=" text-gray-400 ">Scroll to view the full resume </p>
            <button className="bg-cyan-400 text-black px-6 py-2 rounded-lg font-medium hover:bg-cyan-300 transition mt-2">
              Download PDF
            </button>
            </div>
            
          </div>
        </div>
      )}
    </section>
  );
}
