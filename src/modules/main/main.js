import styles from "./main.css";
import buildTodoList from "../todo-list/todo-list";
import TodoList from "../../data/TodoList/TodoList";
import Todo from "../../data/Todo/Todo";
import buildForm from "../todo-list/form";

export default function buildMain() {
  const main = document.createElement("main");
  // const sidebar = document.createElement("aside");
  const todolist = new TodoList();
  const todo = new Todo("title", "description", Date.now());
  const todo2 = new Todo("title2", "description2", Date.now() - 1000);
  const form = buildForm();
  
  form.onsubmit = (e) => {
    e.preventDefault();
    const title = document.querySelector("#title").value;
    const description = document.querySelector("#description").value;

    todolist.addTodo(new Todo(title, description || "", Date.now()));
    document.querySelector('button:nth-of-type(2)').onclick();
    const listDiv = main.querySelector('div:nth-of-type(1)');
    listDiv.innerHTML = buildTodoList(todolist).outerHTML;
  };

  todolist.addTodo(todo);
  todolist.addTodo(todo2);

  main.appendChild(buildTodoList(todolist));
  main.appendChild(form);
  
  return main;
}
