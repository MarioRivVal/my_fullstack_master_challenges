import "./homeSlider.css";
import { ImgBox } from "../../src/components/imgBox/ImgBox";

export const homeSlider = (images, reverse = false) => {
  return `
     <div class="slider " reverse="${reverse}" >
        <div class="slider__list">
          ${images.map((img, i) => ImgBox(img, i - 16)).join("")} 
        </div>
      </div>
       
  `;
};
