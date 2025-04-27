import { getCurrentYear } from "../../functions/getCurrentYear";
import { FooterTranslationsProps } from "../../types/TranslationsTypes";

export const footerTranslation = (
  translations: FooterTranslationsProps
): void => {
  const yearElement = document.getElementById("footer__year");
  const textElement = document.getElementById("footer__text");

  if (yearElement) {
    yearElement.textContent = `${getCurrentYear()} - `;
  }

  if (textElement) {
    textElement.textContent = translations.text;
  }
};
