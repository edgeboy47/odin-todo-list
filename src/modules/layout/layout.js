import styles from './layout.css';
import buildHeader from '../header/header';

export default function buildLayout() {
  const body = document.querySelector('body');

  body.appendChild(buildHeader());
  body.appendChild(buildMain());
  body.appendChild(buildFooter());
}