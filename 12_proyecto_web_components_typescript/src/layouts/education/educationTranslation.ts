import {
  EducationDetailsProps,
  EducationTranslationsProps,
} from "../../types/TranslationsTypes";

export const educationTranslation = (
  translations: EducationTranslationsProps
): void => {
  const titleElement = document.getElementById("education__title");
  if (titleElement) titleElement.textContent = translations.title;

  const setEducationDetails = (
    id: number,
    details: EducationDetailsProps
  ): void => {
    const certificateElement = document.getElementById(
      `education__certificate--${id}`
    );
    const countryElement = document.getElementById(`education__country--${id}`);
    const descriptionElement = document.getElementById(
      `education__description--${id}`
    );

    if (certificateElement)
      certificateElement.textContent = details.certificate;
    if (countryElement) countryElement.textContent = details.country;
    if (descriptionElement)
      descriptionElement.textContent = details.description;
  };

  setEducationDetails(1, translations.education_1);
  setEducationDetails(2, translations.education_2);
  setEducationDetails(3, translations.education_3);
};
