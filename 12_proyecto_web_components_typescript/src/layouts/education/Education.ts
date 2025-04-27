import { generateElements } from "../../functions/generateElements";
import { educationData } from "./educationData";

export const Education = async (): Promise<HTMLElement> => {
  const elements = generateElements(educationData);

  return elements.educationSection;
};
