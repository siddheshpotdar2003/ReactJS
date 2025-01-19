import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";
import { deleteTodo } from "../features/todo/todoSlice.js";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="space-y-2">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="flex items-center space-x-2 border border-gray-700 px-4 py-1"
        >
          <p>{todo.text}</p>
          <button onClick={() => dispatch(deleteTodo(todo.id))}>
            <MdDelete className="text-red-500" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Todos;
