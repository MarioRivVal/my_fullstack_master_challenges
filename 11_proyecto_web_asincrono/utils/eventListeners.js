import { fetchCategoryImage } from "../src/services/api";
import { Results } from "../layouts/results/Results";

export const loadCategoryListener = () => {
  document.querySelectorAll(".categories_card").forEach((el) =>
    el.addEventListener("click", async (e) => {
      const images = await fetchCategoryImage(e.currentTarget.dataset.category);
      Results(images);
    })
  );
};
