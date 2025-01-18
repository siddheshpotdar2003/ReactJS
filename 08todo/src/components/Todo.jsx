import React, { useRef, useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { useTodo } from "../context/TodoContext";

const Todo = ({ todo }) => {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoTitle, setTodoTitle] = useState(todo.title);
  const { deleteTodo, toggleCompletion, updateTodo } = useTodo();
  //   console.log(todo);
  const inputRef = useRef(null);

  const handleDelete = () => {
    deleteTodo(todo.id);
    // console.log("delete", todo.title);
  };

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, title: todoTitle });
    setIsTodoEditable(false);
  };

  return (
    <div
      className={`w-96 flex items-center px-4 py-2 border rounded-md  shadow-sm ${
        todo.completed ? "bg-green-200" : "bg-white"
      }`}
    >
      <input
        type="checkbox"
        className="mr-4"
        value={todo.completed}
        onChange={() => toggleCompletion(todo.id)}
      />
      {/* <span className="flex-grow">{todo.title}</span> */}
      <input
        ref={inputRef}
        type="text"
        value={todoTitle}
        // className="flex-grow px-2 py-1  rounded-md bg-transparent  focus:outline-none focus:ring-2 focus:ring-blue-500"
        className={`flex-grow px-2 py-1 rounded-md bg-transparent focus:outline-none  ${
          isTodoEditable ? "focus:ring-2" : "border-transparent"
        } ${todo.completed ? "line-through" : ""}`}
        readOnly={!isTodoEditable}
        onChange={(e) => setTodoTitle(e.target.value)}
      />
      <button
        className="text-blue-500 hover:text-blue-700 mr-2"
        onClick={() => {
          console.log(isTodoEditable);
          if (todo.completed) return;

          if (isTodoEditable) {
            editTodo();
          } else {
            setIsTodoEditable((prev) => !prev);
            console.log(inputRef);
            if (inputRef?.current) {
              inputRef.current.focus(); // Focus the input element
            }
          }
        }}
      >
        {isTodoEditable ? <TiTick /> : <MdEdit />}
        {/* <MdEdit /> */}
      </button>
      <button
        className="text-red-500 hover:text-red-700"
        onClick={handleDelete}
      >
        <MdDelete />
      </button>
    </div>
  );
};

export default Todo;
