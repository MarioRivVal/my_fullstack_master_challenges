/**
 * Generates a collection of HTML elements based on the provided data configuration.
 *
 * This function takes an array of element configuration objects, creates corresponding
 * HTML elements using the `buildHTMLElement` helper function, and returns a dictionary
 * mapping element names to the generated elements.
 *
 * @param {ElementsDataProps} data - An array of configuration objects where each object defines
 * the attributes, content, and children of an HTML element.
 *
 * @returns {Object<string, HTMLElement>} An object where the keys are the `name` properties
 * from the data array and the values are the corresponding generated HTML elements.
 *
 * @example
 * // Example usage:
 * const data = [
 *   { name: "header", element: "header", textContent: "Welcome!" },
 *   { name: "main", element: "main", children: [...] }
 * ];
 * const elements = generateElements(data);
 * document.body.appendChild(elements.header);
 */

import { buildHTMLElement } from "./buildHTLMElement";
import { ElementsDataProps } from "../types/ElementsType";

export const generateElements = (
  data: ElementsDataProps
): { [key: string]: HTMLElement } => {
  const elements: { [key: string]: HTMLElement } = {};

  data.forEach((item) => {
    const element = buildHTMLElement(item);
    elements[item.name] = element;
  });

  return elements;
};
