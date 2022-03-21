import styles from "./todo-list.css";
import buildTodo from "../todo/todo";
import Todo from "../../data/Todo/Todo";

export default function buildTodoList(todolist) {
  const container = document.createElement("div");
  container.classList.add(styles.container);

  todolist.todos.forEach((todo) => {
    container.appendChild(buildTodo(todo));
  });

  const addTaskButton = document.createElement("div");
  addTaskButton.classList.add(styles.addTaskButton);

  addTaskButton.innerHTML = `
  <i class="fa-solid fa-circle-plus"></i>
  <div>Add Task</div>
  `;

  addTaskButton.onclick = () => {
    // TODO show add task form
    container.removeChild(addTaskButton);
    const form = document.createElement("form");

    const saveButton = document.createElement("button");
    saveButton.type = "submit";
    saveButton.innerHTML = '<i class="fa-solid fa-check"></i>';

    const cancelButton = document.createElement("button");
    cancelButton.type = "button";
    cancelButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    cancelButton.onclick = () => {
      container.removeChild(form);
      container.appendChild(addTaskButton);
    };

    form.innerHTML = `
    <input type="text" id="title" name="title" placeholder="Title" required>
    <label for="description">Description</label><input type="text" id="description" name="description" placeholder="Description">
    <label for="dueDate">Due Date</label><input type="date" id="dueDate" name="dueDate" placeholder="Due Date">
    `;
    form.append(saveButton, cancelButton);
    form.onsubmit = (e) => {
      e.preventDefault();
      const title = document.querySelector("#title").value;
      const description = document.querySelector("#description").value;

      todolist.addTodo(new Todo(title, description || "", Date.now()));
      cancelButton.onclick();
    };
    container.appendChild(form);
  };

  container.appendChild(addTaskButton);
  return container;
}

// TODO add task button
