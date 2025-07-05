import "./Button.css";

export type ButtonType = {
  id: string;
  text: string;
  type: "button" | "submit" | "reset";
  className?: string;
  icon?: string;
};

export const Button = ({
  id,
  text,
  type,
  className,
  icon
}: ButtonType): string => {
  return `
        <button type="${type}" id="${id}" class="btn ${className}">${icon}${text}</button>
    `;
};
