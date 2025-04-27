import { DEFAULT_THEME, THEME_KEY } from "../config/appConfig";
import { moonIcon, sunIcon } from "../components/Icons";

let currentTheme: string = localStorage.getItem(THEME_KEY) || DEFAULT_THEME;

export const toggleTheme = (): void => {
  currentTheme = currentTheme === DEFAULT_THEME ? "dark" : DEFAULT_THEME;
  localStorage.setItem(THEME_KEY, currentTheme);
  updateThemeInUI();
};

export const updateThemeInUI = (): void => {
  const icon = document.querySelector<HTMLButtonElement>(".icon-btn");

  if (icon) {
    icon.innerHTML = currentTheme === DEFAULT_THEME ? moonIcon() : sunIcon();
  }

  document.body.setAttribute("data-theme", currentTheme);
};
