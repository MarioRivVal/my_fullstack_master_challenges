import { ToolsTranslationsProps } from "../../types/TranslationsTypes";

export const toolsTranslation = (
  translations: ToolsTranslationsProps
): void => {
  const titleElement = document.getElementById("tools__title");
  if (titleElement) titleElement.textContent = translations.title;
};
