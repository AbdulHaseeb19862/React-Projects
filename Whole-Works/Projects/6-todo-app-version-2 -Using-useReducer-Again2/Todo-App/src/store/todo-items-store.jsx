import React, { createContext, useReducer } from "react";

export const TodoItemsContext = createContext({
  todoList: [],
  addTodo: () => {},
  onDelete: () => {},
});

const todoItemReducer = (currentState, action) => {
  let newTodoItem = currentState;
  if (action.type === "New_Item") {
    if (action.payload.text !== "" && action.payload.dueDate !== "") {
      newTodoItem = [
        ...currentState,
        { todoName: action.payload.text, dueDate: action.payload.dueDate },
      ];
    }
  } else if (action.type === "Delete_Item") {
    newTodoItem = currentState.filter(
      (item) => item.todoName !== action.payload.todoText
    );
  }
  return newTodoItem;
};

const TodoItemsContextProvider = ({ children }) => {
  const [todoText, dispatchTodo] = useReducer(todoItemReducer, []);
  function addTodo(text, dueDate) {
    const newItem = {
      type: "New_Item",
      payload: {
        text,
        dueDate,
      },
    };
    dispatchTodo(newItem);
  }

  function onDelete(todoItemName) {
    const deleteItem = {
      type: "Delete_Item",
      payload: {
        todoText: todoItemName,
      },
    };
    dispatchTodo(deleteItem);
  }
  return (
    <TodoItemsContext.Provider
      value={{
        todoList: todoText,
        addTodo: addTodo,
        onDelete: onDelete,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;
