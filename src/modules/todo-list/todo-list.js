import styles from "./todo-list.css";
import buildTodo from "../todo/todo";

export default function buildTodoList(todolist) {
  const container = document.createElement("div");
  container.classList.add(styles.container);

  todolist.todos.forEach((todo) => {
    container.appendChild(buildTodo(todo));
  });

  
  return container;
}