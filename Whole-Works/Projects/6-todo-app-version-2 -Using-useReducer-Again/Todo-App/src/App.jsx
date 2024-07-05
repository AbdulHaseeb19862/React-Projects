import React, { useReducer, useState } from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { TodoItemsContext } from "./store/todo-items-store";

const todoItemReducer = (currentValue, action) => {
  let newTodoItem = currentValue;
  if (action.type === "New_Item") {
    if (action.payload.text !== "" && action.payload.dueDate !== "") {
      newTodoItem = [
        ...currentValue,
        {
          todoName: action.payload.text,
          dueDate: action.payload.dueDate,
        },
      ];
    }
  } else if (action.type === "Delete_Item") {
  }
  return [newTodoItem];
};

function App() {
  // const [todoText, setText] = useState([]);
  const [todoText, dispatchTodoText] = useReducer(todoItemReducer, []);
  function addTodo(text, dueDate) {
    const newItemAction = {
      type: "New_Item",
      payload: {
        text,
        dueDate,
      },
    };
    dispatchTodoText(newItemAction);
  }

  function onDelete(todoItemName) {
    const newArr = todoText.filter((item) => item.todoName !== todoItemName);
    setText(newArr);
  }

  const todoObj = {
    todoName: "By Milk",
    dueDate: "4/10/2023",
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoList: todoText,
        addTodo: addTodo,
        onDelete: onDelete,
      }}
    >
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMessage></WelcomeMessage>
        <TodoItems />
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
