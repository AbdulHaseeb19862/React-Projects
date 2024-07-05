import React, { useReducer, useState } from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { TodoItemsContext } from "./store/todo-items-store";
const todoReducer = (currentValue, action) => {
  return [];
};
function App() {
  // const [todoText, setText] = useState([]);
  const [todoText, dispatchTodoText] = useReducer(todoReducer, []);
  function addTodo(text, dueDate) {
    const newAction = {
      type: "Add_New_Item",
      payload: {
        text,
        dueDate,
      },
    };
    // if (text !== "" && dueDate !== "") {
    //   const newTodoItem = [...todoText, { todoName: text, dueDate: dueDate }];

    //   setText(newTodoItem);
    // }
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