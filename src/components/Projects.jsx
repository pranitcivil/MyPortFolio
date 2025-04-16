const projects = [
  {
    title: "Global Explorer",
    description: "A country information app with real-time REST API data.",
    live: "https://global-explorer-country-information-app.vercel.app/",
    github:
      "https://github.com/pranitcivil/Global-Explorer-Country-Information-App",
  },
  {
    title: "Expense Tracker",
    description:
      "Track expenses with persistent local storage and download feature.",
    live: "https://expense-tracker-green-zeta.vercel.app/",
    github: "https://github.com/pranitcivil/Expense-Tracker",
  },
  {
    title: "BillCraft",
    description: "Generate and download invoices as PDFs with React.",
    live: "https://bill-craft-iota.vercel.app/",
    github: "https://github.com/pranitcivil/BILLCRAFT",
  },
];
import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="py-12 bg-white">
      <h3 className="text-3xl text-center font-bold mb-8">Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-gray-100 p-6 rounded-xl shadow-md">
            <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <div className="flex gap-3">
              <a
                href={project.live}
                target="_blank"
                className="text-blue-600 underline"
              >
                Live
              </a>
              <a
                href={project.github}
                target="_blank"
                className="text-gray-800 underline"
              >
                Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
