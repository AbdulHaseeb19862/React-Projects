import { MdAddCircle } from "react-icons/md";
import React, { useState } from "react";

function AddTodo({ handleClickButton }) {
  const [textTodo, settextTodo] = useState("");
  const [dateTodo, setdateTodo] = useState("");
  function handleInput(event) {
    // console.log(event.target.value);
    settextTodo(event.target.value);
  }

  function handleDate(event) {
    // console.log(event.target.value);
    setdateTodo(event.target.value);
  }

  function onNewItem(event) {
    event.preventDefault();
    handleClickButton(textTodo, dateTodo);
    settextTodo("");
    setdateTodo("");
  }

  return (
    <div className="container">
      <form className="row kg-row" onSubmit={onNewItem}>
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
          <button type="submit" className="btn btn-success kg-btn">
            <MdAddCircle />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
