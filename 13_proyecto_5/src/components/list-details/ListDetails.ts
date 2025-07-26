import "./listDetails.css";
import { ListDetailsType } from "../../types";

export const ListDetails = ({ names, values }: ListDetailsType): string => {
  const nameItems = names
    .map((name) => `<li class="u-mb-tiny">${name}</li>`)
    .join("");
  const valuesItems = values
    .map((values) => `<li class="u-mb-tiny">${values}</li>`)
    .join("");

  return `
            <div class="list-details">
                <ul id="list-name" class="u-paragraph-large u-gray-font">
                    ${nameItems}    
                </ul>
                <ul id="list-value" class="u-paragraph-large u-text-bold u-text-right">
                    ${valuesItems}
                </ul>
            </div>
    `;
};
