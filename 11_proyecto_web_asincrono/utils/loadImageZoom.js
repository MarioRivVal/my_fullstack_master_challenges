import { ImgModal } from "../src/components/imgModal/ImgModal";

export const loadImageZoom = () => {
  const allImages = document.querySelectorAll(".result__img");

  allImages.forEach((el) =>
    el.addEventListener("click", () => {
      const imgSrc = el.querySelector("img")?.src;
      ImgModal(imgSrc);
      document.querySelector(".modal").classList.add("modal--active");
    })
  );
};
