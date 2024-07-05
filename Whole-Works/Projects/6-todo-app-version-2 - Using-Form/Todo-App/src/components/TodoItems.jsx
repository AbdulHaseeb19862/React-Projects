import TodoItem from "./TodoItem";
let TodoItems = ({ todoList, onDelete }) => {
  return (
    <div className="item-container">
      {todoList.map((items) => (
        <TodoItem
          key={items}
          className="left"
          todoName={items.todoName}
          dueDate={items.dueDate}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};
export default TodoItems;
