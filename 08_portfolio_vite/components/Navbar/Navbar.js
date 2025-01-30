import "./Navbar.css";
import { NetneoIcon } from "../NetneoIcon/NetneoIcon";

export const changeTheme = () => {
  const themeBtn = document.querySelector("#themeBtn");
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");

    changeText();
  });
};

export const changeText = () => {
  const themeBtn = document.querySelector("#themeBtn");
  if (themeBtn.innerText === "☀") {
    themeBtn.innerText = "☾";
  } else {
    themeBtn.innerText = "☀";
  }
};

export const Navbar = () => `
<nav>
    <div class="nav__logo-box">
        ${NetneoIcon()}
        <h2>netneo_dev</h2>
    </div>
    <ul>
        <li>
            <a href="#" id="homelink">Home</a>
        </li>
        <li>
            <a href="#" id="projectslink">Projects</a>
        </li>
        <li>
            <button id="themeBtn">☀</button>
        </li>
    </ul>
</nav>
`;
