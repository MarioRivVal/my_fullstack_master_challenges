import "./ImgModal.css";

export const ImgModal = (imgSrc) => {
  const bodyEl = document.body;

  const html = `
        <div class="modal">
            <div class="modal__img-box"> 
                <img src="${imgSrc}" alt="image zoom">
            </div>
        </div>
    `;

  bodyEl.insertAdjacentHTML("beforeend", html);
};
