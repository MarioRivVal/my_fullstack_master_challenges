import "./Loader.css";

export const Loader = () => {
  const main = document.querySelector("#main");

  main.innerHTML = `
    <div class="loader-box">
        <span class="loader"></span>
    </div>`;
};
