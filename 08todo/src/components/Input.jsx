import React, { useState } from "react";
import { useTodo } from "../context/TodoContext";

const Input = () => {
  const [todo, setTodo] = useState("");

  const { addTodo } = useTodo();

  const handleSubmit = () => {
    addTodo({ title: todo, completed: false });
    setTodo("");
  };

  return (
    <div className="w-96 flex items-center mb-6">
      <input
        value={todo}
        type="text"
        placeholder="Add a todo..."
        className="flex-grow px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition"
        onClick={handleSubmit}
      >
        Add
      </button>
    </div>
  );
};

export default Input;
