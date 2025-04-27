import {
  ExperienceDetailsProps,
  ExperienceTranslationsProps,
} from "../../types/TranslationsTypes";

export const experienceTranslation = (
  translations: ExperienceTranslationsProps
): void => {
  const titleElement = document.getElementById("experience__title");
  if (titleElement) titleElement.textContent = translations.title;

  const setExperienceDetails = (
    id: number,
    details: ExperienceDetailsProps
  ): void => {
    const positionElement = document.getElementById(
      `experience__position--${id}`
    );
    const yearElement = document.getElementById(`experience__year--${id}`);
    const descriptionElement = document.getElementById(
      `experience__description--${id}`
    );

    if (positionElement) positionElement.textContent = details.position;
    if (yearElement && details.year) yearElement.textContent = details.year;
    if (descriptionElement)
      descriptionElement.textContent = details.description;
  };

  setExperienceDetails(1, translations.experience_1);
  setExperienceDetails(2, translations.experience_2);
};
