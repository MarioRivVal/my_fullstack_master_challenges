/**
 * Builds an HTML element based on the provided configuration object.
 *
 * This function creates an HTML element (e.g., div, button, link) and applies various properties
 * such as ID, classes, attributes, content, and child elements based on the data in the provided
 * configuration object.
 *
 * @param {ElementDataProps} item - The configuration object containing the properties
 * to build the HTML element. This includes attributes like `id`, `classes`, `src`, `href`, `textContent`,
 * `innerHTML`, and more.
 * @param {string} item.name - The name to be used as a key when storing the element in the `elements` object.
 * @param {string} item.element - The type of the HTML element to create (e.g., "div", "button").
 * @param {string} [item.id] - The optional ID to be assigned to the element.
 * @param {string} [item.classes] - The optional class name(s) to be assigned to the element.
 * @param {string} [item.src] - The optional source URL (e.g., for images, scripts).
 * @param {string} [item.href] - The optional link URL to be assigned to anchor elements.
 * @param {string} [item.textContent] - The optional text content to be added to the element.
 * @param {string} [item.innerHTML] - The optional HTML content to be inserted inside the element.
 * @param {Object<string, string>} [item.attributes] - Optional additional attributes to set on the element.
 * @param {OptionProps[]} [item.options] - Optional array of option objects for select elements.
 * @param {ElementDataProps[]} [item.children] - Optional array of child elements to be appended to the element.
 *
 * @returns {HTMLElement} The generated HTML element with the specified properties.
 *
 * @example
 * // Example usage:
 * const elementData = {
 *   element: "button",
 *   id: "submitBtn",
 *   classes: "btn btn-primary",
 *   textContent: "Submit",
 *   attributes: {
 *     type: "submit"
 *   }
 * };
 * const buttonElement = buildHTMLElement(elementData);
 * document.body.appendChild(buttonElement);
 */

import { ElementDataProps } from "../types/ElementsType";

export const buildHTMLElement = (item: ElementDataProps): HTMLElement => {
  const element = document.createElement(item.element);

  if (item.id) element.id = item.id;
  if (item.classes) element.className = item.classes;
  if (item.src) element.setAttribute("src", item.src);
  if (item.href) element.setAttribute("href", item.href);
  if (item.textContent) element.textContent = item.textContent;
  if (item.innerHTML) element.innerHTML = item.innerHTML;

  if (item.attributes) {
    for (const [key, value] of Object.entries(item.attributes)) {
      element.setAttribute(key, value);
    }
  }

  if (item.options) {
    item.options.forEach((option) => {
      const opt = document.createElement("option");
      opt.value = option.id;
      opt.textContent = option.text;
      element.appendChild(opt);
    });
  }

  if (item.children) {
    item.children.forEach((child) => {
      const childElement = buildHTMLElement(child);
      element.appendChild(childElement);
    });
  }

  return element;
};
