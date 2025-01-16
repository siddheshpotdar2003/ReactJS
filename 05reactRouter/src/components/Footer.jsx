import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-8">
          {/* Left Section: Company Name */}
          <div className="w-1/2 mb-6 md:mb-0 text-center">
            <h2 className="text-xl font-bold text-teal-600">TechSphere</h2>
          </div>

          {/* Right Section: Columns */}
          <div className="w-1/2 grid grid-cols-3 gap-8 text-center md:text-left">
            {/* Resources */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#home"
                    className="text-gray-600 hover:text-teal-500 transition"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-600 hover:text-teal-500 transition"
                  >
                    About
                  </a>
                </li>
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Follow Us</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-teal-500 transition"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-teal-500 transition"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#privacy"
                    className="text-gray-600 hover:text-teal-500 transition"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#copyright"
                    className="text-gray-600 hover:text-teal-500 transition"
                  >
                    Copyright
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 pt-4 flex justify-between items-center">
          {/* Empty Spacer */}
          <div></div>

          {/* Social Media Icons */}
          <div className="flex justify-end space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-teal-500 transition text-2xl"
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-teal-500 transition text-2xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-teal-500 transition text-2xl"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
