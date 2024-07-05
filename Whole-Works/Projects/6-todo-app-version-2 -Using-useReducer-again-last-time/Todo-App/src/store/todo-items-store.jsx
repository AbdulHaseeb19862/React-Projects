import React, { createContext, useReducer } from "react";

export const TodoItemsContext = createContext({
  todoList: [],
  addTodo: () => {},
  onDelete: () => {},
});

const todoItemReducer = (currentState, action) => {
  let newTodoItem = currentState;
  if (action.type === "Add_Item") {
    if (action.payload.text !== "" && action.payload.dueDate !== "") {
      newTodoItem = [
        ...currentState,
        { todoName: action.payload.text, dueDate: action.payload.dueDate },
      ];
    }
  } else if (action.type === "Delete_Item") {
    newTodoItem = currentState.filter(
      (item) => item.todoName !== action.payload.text
    );
  }
  return newTodoItem;
};

const TodoItemsContextProvider = ({ children }) => {
  const [todoText, dispatchTodo] = useReducer(todoItemReducer, []);

  function addTodo(text, dueDate) {
    const newAction = {
      type: "Add_Item",
      payload: {
        text,
        dueDate,
      },
    };
    dispatchTodo(newAction);
  }

  function onDelete(todoItemName) {
    const deleteAction = {
      type: "Delete_Item",
      payload: {
        text: todoItemName,
      },
    };
    dispatchTodo(deleteAction);
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
