import React from 'react';
import AppName from './components/AppName';
import AddTodo from './components/AddTodo';
import TodoItem from './components/TodoItem';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TodoItems from './components/TodoItems';

function App() {
  const todoList = [
    {
      todoName : 'By Milk',
      dueDate : '4/10/2023'
    },
    {
      todoName : 'Go To College',
      dueDate : '4/10/2023'
    }
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
     <TodoItems todoList ={todoList} />
    </center>
  );
}

export default App;