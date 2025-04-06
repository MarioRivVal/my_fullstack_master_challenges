import { Nav } from "../../src/components/nav/Nav";
import { cleanPage } from "../../utils/cleanPage";
import { linkPage } from "../../utils/linkPage";
import { Home } from "../Home/Home";

export const Landing = () => {
  const main = document.querySelector("#main");
  // cleanPage(main);

  main.innerHTML = `
        ${Nav()}
    `;

  linkPage("#homelink", Home);
};
