import React, { useState } from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const todoList = [
    {
      todoName: "By Milk",
      dueDate: "4/10/2023",
    },
    {
      todoName: "Go To College",
      dueDate: "4/10/2023",
    },
  ];

  const [todoText, setText] = useState([]);
  function handleEvent(text, dueDate) {
    if (text !== "" && dueDate !== "") {
      // const newTodoItem = [...todoText, { todoName: text, dueDate: dueDate }];

      setText((currValue) => [
        ...currValue,
        { todoName: text, dueDate: dueDate },
      ]);
    }
  }

  function onDelete(todoItemName) {
    const newArr = todoText.filter((item) => item.todoName !== todoItemName);
    setText(newArr);
  }

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo handleClickButton={handleEvent} />
      {todoText.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems todoList={todoText} onDelete={onDelete} />
    </center>
  );
}

export default App;
