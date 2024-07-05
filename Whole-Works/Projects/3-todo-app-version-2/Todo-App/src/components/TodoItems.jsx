import TodoItem from "./TodoItem"
let TodoItems = ({todoList}) => {
  return (
    <div className='item-container'>
    {todoList.map((items) => (
      <TodoItem className="left"  todoName ={items.todoName} dueDate={items.dueDate} />

    ))}
    
    
    </div>
  )
}
export default TodoItems;