import { changeIcon } from "./changeIcon";

export const changeTheme = () => {
  const btn = document.querySelector("#themeBtn");
  if (!btn) return;

  changeIcon();
  btn.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    changeIcon();

    const isLightTheme = document.body.classList.contains("light-theme");
    localStorage.setItem("theme", isLightTheme ? "light-theme" : "dark-theme");
  });
};
