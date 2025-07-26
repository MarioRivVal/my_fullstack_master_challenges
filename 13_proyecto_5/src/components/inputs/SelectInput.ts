import "./input.css";
import { ChevronIcon } from "../icons/general/ChevronIcon";
import { SelectInputType } from "../../types";

export const SelectInput = ({
  id,
  options,
  name,
  placeholder = "Select an option",
}: SelectInputType): string => {
  const optionsHTML = options
    .map((option) => `<option value="${option.value}">${option.text}</option>`)
    .join("");

  return `
        <div class="input-group u-flex select-wrapper">
            <label for="${id}"></label>
            <select id="${id}" name=${name} required>
                <option value="" disabled selected>${placeholder}</option>
                ${optionsHTML}
            </select>
            <div class="select-icon">
                ${ChevronIcon()}
            </div>
        </div>
    `;
};
