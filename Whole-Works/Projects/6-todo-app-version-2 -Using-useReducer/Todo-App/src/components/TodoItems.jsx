import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoItemsContext } from "../store/todo-items-store";
let TodoItems = ({ onDelete }) => {
  const todoItemCont = useContext(TodoItemsContext);
  const todoList = todoItemCont.todoList;

  return (
    <div className="item-container">
      {todoList.map((items) => (
        <TodoItem
          key={items}
          className="left"
          todoName={items.todoName}
          dueDate={items.dueDate}
        />
      ))}
    </div>
  );
};
export default TodoItems;
