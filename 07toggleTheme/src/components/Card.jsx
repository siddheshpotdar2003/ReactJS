import React from "react";

const Card = () => {
  return (
    <div className="w-96 p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transition-colors duration-300">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
        Card Title
      </h2>
      <p className="mt-4 text-gray-600 dark:text-gray-300">
        This is a simple card component. You can add more content as needed. The
        card supports dark mode with smooth transitions.
      </p>
    </div>
  );
};

export default Card;
