import React from "react";

const Button = ({ btnColor, setColor }) => {
  const setCurrentColor = (e) => {
    console.log(e.target.innerText);
    setColor(e.target.innerText);
  };

  return (
    <button
      className={`inline-flex w-16 mr-4 justify-center rounded-md bg-${btnColor}-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-${btnColor}-500`}
      onClick={setCurrentColor}
    >
      {btnColor}
    </button>
  );
};

export default Button;
