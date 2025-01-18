import React, { useContext } from "react";

const TodoContext = React.createContext({
  todos: [
    {
      id: 1,
      title: "buy milk",
      completed: false,
    },
  ],
  addTodo: () => {},
  updateTodo: () => {},
  deleteTodo: () => {},
  toggleCompletion: () => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
