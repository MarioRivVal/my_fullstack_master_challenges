export const loadDonwloadFunctionality = () => {
  const downloadBtn = document.querySelectorAll("#downloadBtn");

  downloadBtn.forEach((el) =>
    el.addEventListener("click", () => {
      console.log("Download functionality, next time! 😁");
    })
  );
};
