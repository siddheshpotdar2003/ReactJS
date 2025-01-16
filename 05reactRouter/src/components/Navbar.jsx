import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-100 shadow-lg">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Left Section: Company Name */}
        <div className="text-xl font-bold text-teal-600">TechSphere</div>

        {/* Middle Section: Links */}
        <div className="hidden md:flex space-x-6">
          <NavLink
            to=""
            className={({ isActive }) =>
              `${
                isActive ? "text-teal-500" : "text-gray-700"
              } hover:text-teal-- transition duration-300`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${
                isActive ? "text-teal-500" : "text-gray-700"
              } hover:text-teal-500 transition duration-300`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${
                isActive ? "text-teal-500" : "text-gray-700"
              } hover:text-teal-500 transition duration-300`
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/github"
            className={({ isActive }) =>
              `${
                isActive ? "text-teal-500" : "text-gray-700"
              } hover:text-teal-500 transition duration-300`
            }
          >
            Github
          </NavLink>
        </div>

        {/* Right Section: Buttons */}
        <div className="flex space-x-4">
          <button className="bg-white text-gray-700 border border-gray-300 rounded-md px-4 py-2 shadow-sm hover:bg-gray-50 transition duration-300">
            Login
          </button>
          <button className="bg-teal-500 text-white rounded-md px-4 py-2 shadow-sm hover:bg-teal-600 transition duration-300">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
