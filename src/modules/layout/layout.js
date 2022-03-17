import styles from './layout.css';
import buildHeader from '../header/header';
import buildFooter from '../footer/footer';
import buildMain from '../main/main';

export default function buildLayout() {
  const body = document.querySelector('body');

  body.appendChild(buildHeader());
  body.appendChild(buildMain());
  body.appendChild(buildFooter());
}