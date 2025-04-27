import { HeaderTranslationsProps } from "../../types/TranslationsTypes";

export const headerTranslation = (
  translations: HeaderTranslationsProps
): void => {
  const emailElement = document.getElementById("contact__email");
  const professionElement = document.getElementById("developer__profession");

  if (emailElement) {
    emailElement.textContent = translations.email;
  }

  if (professionElement) {
    professionElement.textContent = translations.profession;
  }
};
