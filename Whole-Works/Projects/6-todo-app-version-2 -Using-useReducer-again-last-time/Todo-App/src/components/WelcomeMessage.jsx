import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import styles from "./WelcomeMessage.module.css";
let WelcomeMessage = () => {
  const todoItemCont = useContext(TodoItemsContext);
  const todoList = todoItemCont.todoList;
  return (
    todoList.length === 0 && <h1 className={styles.welcome}>Enjoy Your Day</h1>
  );
};

export default WelcomeMessage;
