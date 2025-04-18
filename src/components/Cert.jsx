import React, { useState } from "react";

function Cert() {
  const certificates = [
    {
      title: "Custom built Operating System",
      description:
        "A custom-built operating system that is designed to be lightweight, fast, and secure. The OS is developed from scratch and includes features such as a file system, memory management, and process scheduling.",
      detailedDescription:
        "This custom OS project was developed entirely from scratch using low-level programming in C and assembly. It features a minimal bootloader, a basic file system for managing files, simple memory allocation routines, and process scheduling mechanisms to manage multitasking. The operating system was tested in a virtual environment using QEMU and tailored for performance, making it an ideal learning tool for system-level programming.",
      imageSrc: "/proj_img.png",
    },
    // Add more certificate objects as needed
  ];

  const [expandedCertIndex, setExpandedCertIndex] = useState(null);

  const handleReadMoreClick = (index) => {
    setExpandedCertIndex(index);
  };

  const handleCloseModal = () => {
    setExpandedCertIndex(null);
  };

  return (
    <div id="certificates_section" className="px-4 md:px-10 relative">
      <p className="mt-6 text-3xl font-bold text-center md:text-left">Certificates</p>

      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 transition-all duration-300 ${
          expandedCertIndex !== null ? "blur-sm pointer-events-none select-none" : ""
        }`}
      >
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg mx-auto"
          >
            <a href="#">
              <img
                className="rounded-t-lg w-full h-48 object-cover"
                src={cert.imageSrc}
                alt={cert.title}
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {cert.title}
                </h5>
              </a>
              <p className="mb-3 text-gray-700 dark:text-gray-400">{cert.description}</p>
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
      {expandedCertIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-white/30 backdrop-blur-sm"
          onClick={handleCloseModal}
        >
          <div
            className="relative bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-2xl max-w-4xl w-full mx-4 sm:mx-auto transition-transform duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 w-10 h-10 bg-yellow-400 hover:bg-yellow-500 text-white rounded-full flex items-center justify-center text-2xl font-bold transition-colors duration-300"
              aria-label="Close"
            >
              −
            </button>

            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              {certificates[expandedCertIndex].title}
            </h2>

            <img
              className="rounded-lg mb-4 w-full max-h-96 object-cover"
              src={certificates[expandedCertIndex].imageSrc}
              alt={certificates[expandedCertIndex].title}
            />

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {certificates[expandedCertIndex].detailedDescription}
            </p>

            <div className="space-y-3 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
              <p>
                <strong>Topics Covered:</strong> File systems, memory management, process scheduling,
                interrupt handling, low-level debugging.
              </p>
              <p>
                <strong>Tools & Technologies:</strong> C, Assembly, QEMU, GDB, Makefile, Custom bootloader.
              </p>
              <p>
                <strong>Learning Outcome:</strong> Deep understanding of OS internals and kernel development.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cert;
