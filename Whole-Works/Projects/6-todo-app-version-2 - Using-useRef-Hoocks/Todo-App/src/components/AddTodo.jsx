import { MdAddCircle } from "react-icons/md";
import React, { useState, useRef } from "react";

function AddTodo({ handleClickButton }) {
  const todoNameElement = useRef();
  const todoDueDateElement = useRef();

  function onNewItem(event) {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = todoDueDateElement.current.value;
    handleClickButton(todoName, dueDate);
    todoNameElement.current.value = "";
    todoDueDateElement.current.value = "";
  }

  return (
    <div className="container">
      <form className="row kg-row" onSubmit={onNewItem}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            ref={todoNameElement}
          />
        </div>
        <div className="col-4">
          <input type="date" ref={todoDueDateElement} />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success kg-btn">
            <MdAddCircle />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
