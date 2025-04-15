import { fetchCategoryImage } from "../src/services/api";
import { Results } from "../layouts/results/Results";
import { printMessage } from "./printMessage";

export const loadSearchFunctinality = () => {
  const searchBtn = document.querySelector("#searchBtn");
  const searchInput = document.querySelector(".search-input");

  searchBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    const category = searchInput.value.trim();

    if (category) {
      const images = await fetchCategoryImage(category);

      Results(images);
    } else {
      printMessage("Please enter a category");
    }
  });
};
