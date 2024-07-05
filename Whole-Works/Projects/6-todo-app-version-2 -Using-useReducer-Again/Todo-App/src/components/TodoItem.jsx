import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
function TodoItem({ todoName, dueDate }) {
  const todoItemCont = useContext(TodoItemsContext);
  const onDelete = todoItemCont.onDelete;
  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{dueDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-btn"
            onClick={() => onDelete(todoName)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
