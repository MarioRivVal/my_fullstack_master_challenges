import { cleanPage } from "./cleanPage";

export const printMessage = (message) => {
  const container = document.querySelector(".result__container");

  const pElemt = document.createElement("P");
  pElemt.classList.add("alert-message");
  pElemt.textContent = message;

  if (document.querySelector(".alert-message")) return;

  cleanPage(container);

  container.append(pElemt);

  setTimeout(() => {
    pElemt.remove();
  }, 2000);
};
