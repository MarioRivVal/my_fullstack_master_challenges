import { MainTranslationsProps } from "../../types/TranslationsTypes";

export const mainTranslation = (translations: MainTranslationsProps) => {
  const titleElement = document.getElementById("main__title") as HTMLElement;
  const introElement = document.getElementById("main__intro") as HTMLElement;

  if (titleElement) {
    titleElement.textContent = translations.title;
  }
  if (introElement) {
    introElement.textContent = translations.intro;
  }
};
