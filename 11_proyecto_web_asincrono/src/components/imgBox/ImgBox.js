import "./ImgBox.css";

export const ImgBox = (img, i) => `
    <div class="slider__item" style="--position: ${i}">
        <img src="${img}" alt="image">
    </div>
`;
