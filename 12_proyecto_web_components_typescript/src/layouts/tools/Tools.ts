import { generateElements } from "../../functions/generateElements";
import { toolsData } from "./toolsData";

export const Tools = async (): Promise<HTMLElement> => {
  const elements = generateElements(toolsData);

  return elements.toolsSection;
};
