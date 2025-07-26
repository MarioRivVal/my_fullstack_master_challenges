import "./input.css";
import { InputType } from "../../types";

export const Input = ({
  type,
  id,
  name,
  placeholder,
  value = "",
}: InputType): string => {
  const stepAttr = type === "number" ? 'step="any"' : "";
  return `
            <div class="input-group u-flex">
                <label for="${id}"></label>
                <input type="${type}" id="${id}" name="${name}" placeholder="${placeholder}" value="${value}" ${stepAttr} required />
            </div>
    
    `;
};
