import styles from './form.css';
import Todo from "../../data/Todo/Todo";

export default function buildForm() {
  const container = document.createElement('div')
  const addTaskButton = document.createElement("div");
  container.classList.add(styles.container);
  addTaskButton.classList.add(styles.addTaskButton);

  addTaskButton.innerHTML = `
  <i class="fa-solid fa-circle-plus"></i>
  <div>Add Task</div>
  `;

  addTaskButton.onclick = () => {
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


    
    container.appendChild(form);
  };

  container.appendChild(addTaskButton);
  return container;
}