export const loadTheme = () => {
  const theme = localStorage.getItem("theme");

  console.log(theme);
  if (theme === "light-theme") {
    document.body.classList.add("light-theme");
  } else {
    document.body.classList.remove("light-theme");
  }
};
