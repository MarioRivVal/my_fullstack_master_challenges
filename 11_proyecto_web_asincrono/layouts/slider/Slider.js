import "./Slider.css";
import { fetchAndStoreImages, splitImages } from "../../src/services/api";

import { ImgBox } from "../../src/components/imgBox/ImgBox";

export const Slider = async (groupSize, orientation, groupNum) => {
  const images = await fetchAndStoreImages(18, groupNum);
  const groupedImages = splitImages(images, groupSize);

  const randomGroup =
    groupedImages[Math.floor(Math.random() * groupedImages.length)];
  const imgs = randomGroup.map((img) => ImgBox(img)).join("");

  console.log(imgs);

  return `
       <div class="slider slider-vertical slider-${orientation}--${groupSize}">
          ${imgs}
        </div> 
  `;
};
