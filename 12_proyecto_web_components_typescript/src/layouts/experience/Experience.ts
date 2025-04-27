import { generateElements } from "../../functions/generateElements";
import { experienceData } from "./experienceData";

export const Experience = async (): Promise<HTMLElement> => {
  const elements = generateElements(experienceData);

  return elements.experienceSection;
};
