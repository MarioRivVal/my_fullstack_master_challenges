import "./footer.css";
import { generateElements } from "../../functions/generateElements";
import { footerData } from "./footerData";

export const Footer = async (): Promise<HTMLElement> => {
  const elements = generateElements(footerData);

  return elements.footerEl;
};
