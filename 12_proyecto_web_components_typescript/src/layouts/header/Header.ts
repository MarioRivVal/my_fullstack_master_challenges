import "./header.css";
import { generateElements } from "../../functions/generateElements";
import { headerData } from "./headerData";

export const Header = async (): Promise<HTMLElement> => {
  const elements = generateElements(headerData);

  return elements.headerEl;
};
