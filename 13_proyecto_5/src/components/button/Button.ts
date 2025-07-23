import "./Button.css";

export type ButtonType = {
  id: string;
  text: string;
  type: "button" | "submit" | "reset";
  className?: string;
  icon?: string;
  disabled?: boolean;
};

export const Button = ({
  id,
  text,
  type,
  className,
  icon,
  disabled,
}: ButtonType): string => {
  return `
        <button type="${type}" id="${id}" class="btn ${className} ${
    disabled ? "btn-disabled" : ""
  }" ${disabled ? "disabled" : ""}>${icon}${
    disabled ? "Disabled" : text
  }</button>
    `;
};
