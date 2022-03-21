import styles from './main.css';
import buildTodoList from '../todo-list/todo-list';
import TodoList from '../../data/TodoList/TodoList'
import Todo from '../../data/Todo/Todo';

export default function buildMain() {
  const main = document.createElement("main");
  // const sidebar = document.createElement("aside");
  const todolist = new TodoList();
  const todo = new Todo('title', 'description', Date.now());
  const todo2 = new Todo('title2', 'description2', Date.now() - 1000);
  todolist.addTodo(todo)
  todolist.addTodo(todo2)

  main.appendChild(buildTodoList(todolist));
  return main;
}