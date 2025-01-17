import React from "react";
import useTheme from "../context/theme";

const Button = () => {
  const { themeMode, darkTheme, lightTheme } = useTheme();

  const toggleDarkMode = (e) => {
    const isDarkMode = e.target.checked;
    isDarkMode ? darkTheme() : lightTheme();
  };
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        onChange={toggleDarkMode}
        checked={themeMode == "dark"}
      />
      <div className="w-14 h-8 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:after:bg-gray-300 peer-checked:bg-blue-600"></div>
      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        Dark Mode
      </span>
    </label>
  );
};

export default Button;
