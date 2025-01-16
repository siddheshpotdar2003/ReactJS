import React from "react";

const Home = () => {
  return (
    <section className="bg-gray-50 py-16 flex-1">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-4">
        {/* Left Section: Image */}
        <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
          <img
            src="https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Tech Illustration"
            className="rounded-lg shadow-lg max-w-[400px] sm:max-w-[600px]"
          />
        </div>

        {/* Right Section: Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Revolutionizing Technology, One Step at a Time
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            At TechSphere, we believe in harnessing the power of technology to
            create innovative solutions that transform lives. From cutting-edge
            software development to state-of-the-art systems, we strive to stay
            ahead in a rapidly evolving digital world. Let's build the future
            together.
          </p>
          <button className="bg-teal-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-teal-600 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
