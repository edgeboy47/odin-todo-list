import styles from './main.css';

export default function buildMain() {
  const main = document.createElement("main");

  main.innerHTML = `
    <p>This is the main content of the page.</p>
  `;
  return main;
}