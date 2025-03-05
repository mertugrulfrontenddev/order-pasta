import React, { createContext, useState } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addToDo = (todo) => {
    setTodos((prevToDo) => [...prevToDo, todo]);
  };

  return (
    <TodoContext.Provider value={{ todos, addToDo, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
