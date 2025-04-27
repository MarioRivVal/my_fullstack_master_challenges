import { changeLanguage } from "./translationsUtils";
import { toggleTheme } from "./themeUtils";

export const loadEvents = (): void => {
  const languageSelector =
    document.querySelector<HTMLSelectElement>(".language-selector");
  const themeToggleButton =
    document.querySelector<HTMLButtonElement>(".icon-btn");

  if (languageSelector) {
    languageSelector.addEventListener("change", (e: Event) => {
      const target = e.target as HTMLSelectElement;
      const selectedLang = target.value;

      localStorage.setItem("language", selectedLang);
      changeLanguage(selectedLang);
    });
  } else {
    console.warn("No se encontró el selector de idioma (.language-selector).");
  }

  if (themeToggleButton) {
    themeToggleButton.addEventListener("click", toggleTheme);
  } else {
    console.warn("No se encontró el botón de tema (.icon-btn).");
  }
};
