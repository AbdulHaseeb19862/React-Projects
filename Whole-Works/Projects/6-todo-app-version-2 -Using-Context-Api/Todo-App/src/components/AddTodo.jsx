import { MdAddCircle } from "react-icons/md";
import React, { useContext, useState } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo() {
  const [textTodo, settextTodo] = useState("");
  const [dateTodo, setdateTodo] = useState("");
  const todoItemCont = useContext(TodoItemsContext);
  const handleClickButton = todoItemCont.addTodo;
  function handleInput(event) {
    // console.log(event.target.value);
    settextTodo(event.target.value);
  }

  function handleDate(event) {
    // console.log(event.target.value);
    setdateTodo(event.target.value);
  }

  function onNewItem() {
    handleClickButton(textTodo, dateTodo);
    settextTodo("");
    setdateTodo("");
  }

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={textTodo}
            onChange={handleInput}
          />
        </div>
        <div className="col-4">
          <input type="date" value={dateTodo} onChange={handleDate} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-btn"
            onClick={onNewItem}
          >
            <MdAddCircle />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
