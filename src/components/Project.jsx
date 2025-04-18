import React, { useState } from "react";

function Project() {
  const projects = [
    {
      title: "Portfolio website using React and Tailwind CSS",
      description:
        "A responsive portfolio website built using React and Tailwind CSS. The website showcases my skills, projects, and certifications, providing visitors with an overview of my work.",
      detailedDescription:
        "This project involved creating a fully responsive portfolio website using React for the frontend and Tailwind CSS for styling. The website includes sections for my skills, projects, and certifications, and is designed to provide a comprehensive overview of my work to potential employers and clients.",
      imageSrc: "/proj_img01.png",
      externalLink: "https://your-portfolio-link.com",
    },
    {
      title: "Object detection using TensorFlow",
      description:
        "A machine learning project that uses TensorFlow to detect objects in images. The model is trained on a dataset of images and can identify objects with high accuracy.",
      detailedDescription:
        "In this project, I developed a machine learning model using TensorFlow to perform object detection in images. The model was trained on a large dataset of labeled images and achieved high accuracy in identifying various objects. The project also includes a web interface for uploading images and viewing detection results.",
      imageSrc: "/proj_img02.png",
      externalLink: "https://your-object-detection-link.com",
    },
  ];

  const [expandedProjectIndex, setExpandedProjectIndex] = useState(null);

  const handleReadMoreClick = (index) => {
    setExpandedProjectIndex(index);
  };

  const handleCloseModal = () => {
    setExpandedProjectIndex(null);
  };

  return (
    <div id="projects" className="relative">
      <p className="mt-6 text-3xl font-bold text-center md:text-left">Projects</p>

      {/* Project Cards Grid */}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 transition-all duration-300 ${
          expandedProjectIndex !== null ? "blur-sm pointer-events-none select-none" : ""
        }`}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg mx-auto"
          >
            <a href={project.externalLink} target="_blank" rel="noopener noreferrer">
              <img
                className="rounded-t-lg w-full h-48 object-cover"
                src={project.imageSrc}
                alt={project.title}
              />
            </a>
            <div className="p-5">
              <a href={project.externalLink} target="_blank" rel="noopener noreferrer">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {project.title}
                </h5>
              </a>
              <p className="mb-3 text-gray-700 dark:text-gray-400">{project.description}</p>
              <button
                onClick={() => handleReadMoreClick(index)}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-colors duration-300"
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {expandedProjectIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-white/30 backdrop-blur-sm"
          onClick={handleCloseModal}
        >
          <div
            className="relative bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-2xl max-w-4xl w-full mx-4 sm:mx-auto transition-transform duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button - Yellow Bubble with Minus Sign */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 w-10 h-10 bg-yellow-400 hover:bg-yellow-500 text-white rounded-full flex items-center justify-center text-2xl font-bold transition-colors duration-300"
              aria-label="Close"
            >
              −
            </button>

            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              {projects[expandedProjectIndex].title}
            </h2>

            <img
              className="rounded-lg mb-4 w-full max-h-96 object-cover"
              src={projects[expandedProjectIndex].imageSrc}
              alt={projects[expandedProjectIndex].title}
            />

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {projects[expandedProjectIndex].detailedDescription}
            </p>

            <div className="space-y-3 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
              <p>
                <strong>Key Features:</strong> Fully responsive design, dark mode support, modular
                React components, animated modals, project filtering.
              </p>
              <p>
                <strong>Technologies Used:</strong> React, Tailwind CSS, GitHub Pages, VS Code,
                Netlify (optional).
              </p>
              <p>
                <strong>Challenges:</strong> Implementing reusable components, optimizing layout for
                all screen sizes, ensuring accessibility.
              </p>
              <p>
                <strong>Live Preview:</strong>{" "}
                <a
                  href={projects[expandedProjectIndex].externalLink}
                  className="text-blue-600 underline hover:text-blue-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {projects[expandedProjectIndex].externalLink}
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Project;
