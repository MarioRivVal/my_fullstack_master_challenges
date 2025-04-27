import "./main.css";
import { generateElements } from "../../functions/generateElements";
import { mainData } from "./mainData";

export const Main = async (): Promise<HTMLElement> => {
  const elements = generateElements(mainData);

  return elements.mainEl;
};
