import styles from "./todo.css";

export default function buildTodo(todo) {
  const card = document.createElement("div");
  card.classList.add(styles.card);
  card.innerHTML = `
  <input type="checkbox" class="${styles.checkbox}"${todo.isCompleted ? 'checked' : ''}>
  <div class=${styles.title}>${todo.title}</div>
  <div class=${styles.date}>${todo.dueDate}</div>
  `;

  return card;
}
