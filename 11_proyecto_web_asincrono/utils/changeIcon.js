import { sunIcon } from "../src/components/icons/sunIcon";
import { moonIcon } from "../src/components/icons/moonIcon";

export const changeIcon = () => {
  const iconBox = document.querySelector("#themeBtn");
  const isLightTheme = document.body.classList.contains("light-theme");

  iconBox.innerHTML = isLightTheme ? `${moonIcon()}` : ` ${sunIcon()}`;
};
