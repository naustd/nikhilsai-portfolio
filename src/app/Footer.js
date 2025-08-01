import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Side – Your Info */}
        <div className="text-center md:text-left mb-2 md:mb-0">
          <p className="text-lg font-bold">Nikhilsai Parimalla</p>
          <p className="text-sm">Java Full Stack Developer</p>

          <p className="text-sm">
            nikhilsaiparimalla@gmail.com | +1 (928)-225-8448
          </p>
        </div>

        {/* Right Side – SVG Links */}
        <div className="flex space-x-6 text-xl">
          <a
            href="https://github.com/naustd"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/nikhilsai-p-58b1531a4"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>

          <a
            className="hover:text-blue-400 transition"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=nikhilsaiparimalla@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
