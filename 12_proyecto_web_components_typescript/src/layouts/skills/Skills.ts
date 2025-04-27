import { generateElements } from "../../functions/generateElements";
import { skillsData } from "./skillsData";

export const Skills = async (): Promise<HTMLElement> => {
  const elements = generateElements(skillsData);

  return elements.skillsSection;
};
