import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-gray-50 py-16 flex-1">
      <div className="container mx-auto flex flex-col md:flex-row items-start justify-between px-4 gap-8">
        {/* Left Section: Get in Touch */}
        <div className="md:w-1/2 bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-teal-600 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-6">Fill the form to get in contact</p>

          {/* Contact Details */}
          <div className="space-y-4">
            {/* Location */}
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-teal-600 text-xl" />
              <span className="text-gray-700">
                123 Tech Lane, Silicon Valley
              </span>
            </div>
            {/* Phone */}
            <div className="flex items-center space-x-4">
              <FaPhone className="text-teal-600 text-xl" />
              <span className="text-gray-700">+1 234 567 890</span>
            </div>
            {/* Email */}
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-teal-600 text-xl" />
              <span className="text-gray-700">contact@techsphere.com</span>
            </div>
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <div className="md:w-1/2 bg-white shadow-lg rounded-lg p-6">
          <form className="space-y-4">
            {/* Full Name */}
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            {/* Email */}
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            {/* Telephone */}
            <input
              type="tel"
              placeholder="Telephone Number"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-teal-500 text-white py-2 rounded-md hover:bg-teal-600 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
