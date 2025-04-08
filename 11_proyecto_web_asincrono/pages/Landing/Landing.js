import { Nav } from "../../src/components/nav/Nav";
import { changeTheme } from "../../utils/changeTheme";
import { linkPage } from "../../utils/linkPage";
import { Home } from "../Home/Home";
import { Categories } from "../../layouts/categories/Categories";
import { Results } from "../../layouts/results/Results";

export const Landing = () => {
  const main = document.querySelector("#main");
  // cleanPage(main);

  main.innerHTML = `
        ${Nav()}
        ${Categories()}
        ${Results()}
       
    `;

  linkPage("#homelink", Home);
  changeTheme();
};
