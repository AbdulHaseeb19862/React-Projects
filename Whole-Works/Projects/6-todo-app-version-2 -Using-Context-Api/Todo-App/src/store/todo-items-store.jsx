import React, { createContext } from "react";

export const TodoItemsContext = createContext({
  todoList: [],
  addTodo: () => {},
  onDelete: () => {},
});
