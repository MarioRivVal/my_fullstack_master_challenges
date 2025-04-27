import { DEFAULT_LANGUAGE } from "../config/appConfig";
import { TranslationsProps } from "../types/TranslationsTypes";
import { headerTranslation } from "../layouts/header/headerTranslation";
import { mainTranslation } from "../layouts/main/mainTranslation";
import { educationTranslation } from "../layouts/education/educationTranslation";
import { experienceTranslation } from "../layouts/experience/experienceTranslation";
import { skillsTranslation } from "../layouts/skills/skillsTranslation";
import { toolsTranslation } from "../layouts/tools/toolsTranslation";
import { footerTranslation } from "../layouts/footer/footerTranslation";

let currentLanguage: string = DEFAULT_LANGUAGE;

console.log(DEFAULT_LANGUAGE);

export const loadTranslations = async (
  lang: string
): Promise<TranslationsProps> => {
  const response = await fetch(`./locales/${lang}.json`);
  if (!response.ok) throw new Error("Error loading language file");
  return response.json();
};

const applyTranslations = (translations: TranslationsProps): void => {
  const { header, main, education, experience, skills, tools, footer } =
    translations;
  headerTranslation(header);
  mainTranslation(main);
  educationTranslation(education);
  experienceTranslation(experience);
  skillsTranslation(skills);
  toolsTranslation(tools);
  footerTranslation(footer);
};

export const changeLanguage = async (lang: string): Promise<void> => {
  try {
    const translations = await loadTranslations(lang);
    applyTranslations(translations);
    currentLanguage = lang;
  } catch (error) {
    console.error("Error loading translations:", error);
  }
};

export const initLanguage = async (): Promise<void> => {
  const savedLanguage = localStorage.getItem("language") || currentLanguage;
  await changeLanguage(savedLanguage);

  const languageSelector = document.querySelector(
    ".language-selector"
  ) as HTMLSelectElement;
  languageSelector.value = savedLanguage;
};
