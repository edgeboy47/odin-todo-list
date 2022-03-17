import "./footer.css";
import GithubLogo from "./github.svg";

export default function buildFooter() {
  const footer = document.createElement("footer");

  footer.innerHTML = `
    <div class="credit">edgeboy47</div>
    <a target="_blank" href="https://github.com/edgeboy47"><img src="${GithubLogo}" alt="Github" /></a>
  `;
  return footer;
}
