import React from 'react';

const BigCard = () => {
  return (
    <div id="home"className="w-full  p-6">
      <div className="max-w-screen-xl mx-auto p-4 rounded-lg flex flex-wrap">
        
        {/* Left Side - Image and Text */}
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-start">
          <img
            src="/profile_pic.jpg" // Replace with your image
            alt="Profile"
            className="w-full h-full object-cover rounded-lg mb-4"
          />
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-blue-800">Sudarshan Hegde</h2>
            <p className="text-lg font-bold text-gray-600">Computer Science and Engineering Student</p>
          </div>
          <div className="flex justify-center p-6 pt-2 gap-7">
            <a href="mailto:sudarshanhegde2004@gmail.com">
              <button className="min-w-32 rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all hover:bg-slate-700 hover:scale-105 focus:bg-slate-700 active:bg-slate-700 disabled:pointer-events-none disabled:opacity-50" type="button">
                Contact
              </button>
            </a>
          </div>
        </div>

        {/* Right Side - Heading and Subheading Text */}
        <div className="w-full md:w-2/3 mt-6 md:mt-0 md:pl-10">
          <h3 className="text-4xl font-bold text-gray-500">A little About myself</h3>
          <p className="text-xl text-gray-400 mt-4">
            I am Sudarshan Hegde, a Computer Science and Engineering student at Sambhram Institute of Technology, affiliated with Visvesvaraya Technological University.
            Passionate about technology and problem-solving, I have developed a strong foundation in programming languages such as C++, C, Python, and Java, with a particular interest in web development. 
            My skills in HTML, CSS, JavaScript, React, and Tailwind CSS enable me to create dynamic and responsive web applications. I developed a portfolio project using these technologies, which enhanced my understanding of web design and development.
            I am eager to take on challenging projects, collaborate with others, and contribute innovative solutions in the tech industry, aiming to make a meaningful impact while continuously growing as a computer scientist.
          </p>
          <div className="flex pt-6">
            <a href="#about-myself" className="text-slate-300 font-semibold text-sm hover:underline flex items-center">
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigCard;
