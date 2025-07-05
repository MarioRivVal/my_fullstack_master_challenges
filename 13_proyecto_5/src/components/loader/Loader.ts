import "./loader.css";

export const Loader = () => {
  const app = document.querySelector<HTMLDivElement>("#app");
  app!.innerHTML = `
     <div class="loader-box">
        <span class="loader"></span>
    </div>`;
};
