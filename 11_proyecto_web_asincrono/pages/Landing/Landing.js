import { Nav } from "../../src/components/nav/Nav";
import { changeTheme } from "../../utils/changeTheme";
import { linkPage } from "../../utils/linkPage";
import { loadCategoryListener } from "../../utils/eventListeners";
import { Home } from "../Home/Home";
import { Categories } from "../../layouts/categories/Categories";
import { Results } from "../../layouts/results/Results";
import { loadSearchFunctinality } from "../../utils/loadSearchFuntionality";
import { loadImagesFromLocalStorage } from "../../src/services/api";

export const Landing = async () => {
  const main = document.querySelector("#main");

  const images1 = loadImagesFromLocalStorage("unsplash_images_group_1");
  const images2 = loadImagesFromLocalStorage("unsplash_images_group_2");
  const allImg = [...images1, ...images2];

  main.innerHTML = `
        ${Nav()}
        ${Categories()}
        <section class="section results">
          <h3 class="tertiary-title">Resultados</h3>
          <div class="result__container">
          </div>
        </section>
    `;

  linkPage("#homelink", Home);
  changeTheme();
  Results(allImg);
  loadSearchFunctinality();
  loadCategoryListener();
};
