import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Button = (e) => {
  const [darkModeStatus, setDarkModeStatus] = useState(false);
  const toggleDarkMode = (e) => {
    setDarkModeStatus(e.target.checked);
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    if (darkModeStatus) {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.add("light");
    }
    console.log(darkModeStatus);
    console.log(document.querySelector("html").classList);
  }, [darkModeStatus]);
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={darkModeStatus}
        onChange={toggleDarkMode}
      />
      <div className="w-14 h-8 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:after:bg-gray-300 peer-checked:bg-blue-600"></div>
      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        Dark Mode
      </span>
    </label>
  );
};

export default Button;
