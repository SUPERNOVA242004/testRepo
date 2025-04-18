import React from 'react';

function About() {
  return (
    <div>
        <div id="about-myself" className="mt-8 px-4 md:px-10">
      <p className="font-bold text-sky-600 text-2xl md:text-left text-center">
        About Myself
      </p>
      <p className="p-2 text-grey-400 font-semibold text-left mt-4">
        Currently, I am studying at Sambhram Institute of Technology, which is affiliated with Visvesvaraya Technological University. My fascination with technology began early on, and it has only grown as I have delved deeper into the world of computer science. I have a strong foundation in several programming languages, including C++, C, Python, and Java, which have helped me develop a logical and analytical approach to problem-solving. My interest in full-stack development has led me to explore web technologies like HTML, CSS, JavaScript, React, and Tailwind CSS, allowing me to create visually appealing and highly functional web applications. I thrive on the challenge of learning new languages and frameworks, constantly pushing myself to expand my technical expertise.
      </p>
      <p className="p-2 text-grey-400 font-semibold text-left mt-4">
        In addition to my coursework, I actively seek out projects and opportunities that allow me to apply my knowledge in real-world scenarios. I believe that practical experience is crucial to mastering any discipline, and I am always eager to collaborate on innovative projects that make a tangible difference. My time at Sambhram Institute of Technology has equipped me with not just technical skills, but also the ability to work effectively in a team, communicate complex ideas clearly, and manage projects efficiently. I am deeply committed to my growth as a computer scientist and am enthusiastic about contributing to the tech community. Whether it's through developing cutting-edge software or building intuitive and user-friendly web interfaces, I am driven to make a meaningful impact in the field of technology.
      </p>
        </div>

     {/* Education Timeline start */}

    <ol class=" mt-6 ml-10 items-center sm:flex">
    <li class="relative mb-6 sm:mb-0">
        <div class="flex items-center">
            <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
            <img
              className="w-5.5 h-5.5 text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              src="/edu.svg"
              alt="Education Icon"
            />
            </div>
            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div class="mt-3 sm:pe-8">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Shri Kalika Bhavani English Medium High School, Kansur</h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2017-2020</time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">From 8th to 10th(SSLC )</p>
        </div>
    </li>     
    <li class="relative mb-6 sm:mb-0">
        <div class="flex items-center">
            <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
            <img
              className="w-5.5 h-5.5 text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              src="/edu.svg"
              alt="Education Icon"
            />
            </div>
            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div class=" mt-3 sm:pe-8">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">M.E.S PU College, Sirsi</h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2020-2022</time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">11th and 12th / 1st and 2nd PUC</p>
        </div>
    </li>
    <li class="relative mb-6 sm:mb-0">
        <div class="flex items-center">
            <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
            <img
              className="w-5.5 h-5.5 text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              src="/edu.svg"
              alt="Education Icon"
            />
            </div>
            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div class="mt-3 sm:pe-8">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Sambhram Institute of Technology, Bangaluru</h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2022-2026</time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">Bacholores of Engineering in Computer Science and Engineering </p>
        </div>
    </li>
</ol>
{/* Education Timeline end */}

  <p className="mt-6 ml-6 mb-4 font-extrabold text-2xl md:text-3xl">
    Tech stack and skills
  </p>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
    {[
      "C++",
      "C",
      "Java",
      "Python",
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Bash Scripting",
    ].map((skill, index) => (
      <div
        key={index}
        className="bg-amber-400 p-3 rounded-lg text-center font-bold transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
      >
        {skill}
      </div>
    ))}
  </div>
</div>

  );
}

export default About;
