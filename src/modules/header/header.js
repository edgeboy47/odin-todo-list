import styles from './header.css';

export default function buildHeader() {
  const header = document.createElement("header");

  header.innerHTML = `
    <h1>Todo List</h1>
  `;

  return header;
}