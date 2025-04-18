import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about-myself" },
    { name: "Projects", id: "projects" },
    { name: "Certificates", id: "certificates_section" },
  ];

  return (
    <nav className="w-full h-14 bg-gradient-to-r from-sky-600 to-indigo-700 flex justify-between items-center px-4 py-4 rounded-md md:px-4 relative">
      <div className="text-3xl text-customBlue-light font-bold">Sudarshan Hegde</div>

      {/* Desktop Menu */}
      <ul className="md:flex hidden font-semibold">
        {navLinks.map(({ name, id }) => (
          <a
            key={id}
            href={`#${id}`}
            className="mx-2 text-slate-300 font-semibold text-sm hover:scale-125 flex items-center transition-transform duration-200"
          >
            {name}
          </a>
        ))}
      </ul>

      {/* Social Icons - Desktop */}
      <ul className="md:flex hidden">
        {[
          { platform: "linkedin", url: "https://www.linkedin.com/in/sudarshan-hegde-474856226/" },
          { platform: "reddit", url: "https://www.reddit.com/user/Sudarshan_Hegde_2004/" },
          { platform: "instagram", url: "https://www.instagram.com/sudarshan.hegde.2004/" },
          { platform: "github", url: "https://github.com/SudarshanHegde2004" },
        ].map(({ platform, url }, index) => (
          <a key={index} href={url} target="_blank" rel="noopener noreferrer">
            <img
              className="h-10 w-10 rounded-lg mx-[8px] cursor-pointer hover:scale-125 transition-transform duration-200"
              src={`/${platform}.png`}
              alt={platform}
              onError={(e) => (e.target.src = `/${platform}.jpg`)}
            />
          </a>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <span className="text-4xl text-white">{isOpen ? "✖" : "☰"}</span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-16 right-0 bg-gradient-to-r from-sky-500 to-purple-700 w-64 py-5 px-6 rounded-md shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 md:hidden`}
      >
        <ul className="flex flex-col space-y-4">
          {navLinks.map(({ name, id }) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-slate-300 font-semibold text-lg hover:scale-110 transition-transform duration-200"
              onClick={() => setIsOpen(false)} // Close menu on click
            >
              {name}
            </a>
          ))}
        </ul>

        {/* Social Icons - Mobile */}
        <div className="flex justify-center space-x-4 mt-6">
          {[
            { platform: "linkedin", url: "https://www.linkedin.com/in/sudarshan-hegde-474856226/" },
            { platform: "reddit", url: "https://www.reddit.com/user/Sudarshan_Hegde_2004/" },
            { platform: "instagram", url: "https://www.instagram.com/sudarshan.hegde.2004/" },
            { platform: "github", url: "https://github.com/SudarshanHegde2004" },
          ].map(({ platform, url }, index) => (
            <a key={index} href={url} target="_blank" rel="noopener noreferrer">
              <img
                className="h-8 w-8 rounded-lg cursor-pointer hover:scale-110 transition-transform duration-200"
                src={`/${platform}.png`}
                alt={platform}
                onError={(e) => (e.target.src = `/${platform}.jpg`)}
              />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
