import { SkillsTranslationsProps } from "../../types/TranslationsTypes";

export const skillsTranslation = (
  translations: SkillsTranslationsProps
): void => {
  const titleElement = document.getElementById("skills__title");
  if (titleElement) titleElement.textContent = translations.title;

  const setSkillDetails = (id: number, skillText: string | undefined): void => {
    const skillElement = document.getElementById(`skill_${id}`);
    if (skillElement && skillText) {
      skillElement.textContent = skillText;
    }
  };

  for (let i = 1; i <= 11; i++) {
    setSkillDetails(
      i,
      translations[`skill_${i}` as keyof SkillsTranslationsProps]
    );
  }
};
