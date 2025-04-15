import "./ResultSlider.css";
import { downloadIcon } from "../../src/components/icons/downloadIcon";

export const ResultsSlider = (group, images) => {
  const imgHtml = images
    .map(
      (el, i) => `
        <div class ="result__img"  style="--i:${i + 1}">
            <img src="${el}" alt="image">
            <button class="icon-box" id="downloadBtn">
                ${downloadIcon()}
             </button>
        </div>
        `
    )
    .join("");

  return `
    <div class="result__box result__box--${group}">
        ${imgHtml} 
    </div>
    `;
};
