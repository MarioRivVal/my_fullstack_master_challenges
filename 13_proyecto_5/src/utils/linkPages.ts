export const linkPage = (id: string, page: () => void) => {
  const link = document.querySelector(id);
  link!.addEventListener("click", () => {
    page();
  });
};
