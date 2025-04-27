import "./style.css";
import { initLanguage } from "./utils/translationsUtils";
import { updateThemeInUI } from "./utils/themeUtils";
import { loadEvents } from "./utils/loadEventsUtils";
import { Header } from "./layouts/header/Header";
import { Main } from "./layouts/main/Main";
import { Education } from "./layouts/education/Education";
import { Experience } from "./layouts/experience/Experience";
import { Skills } from "./layouts/skills/Skills";
import { Tools } from "./layouts/tools/Tools";
import { Footer } from "./layouts/footer/Footer";

const init = async (): Promise<void> => {
  const app = document.querySelector<HTMLDivElement>("#app");

  if (!app) {
    console.error("No se encontró el contenedor #app");
    return;
  }


  app.append(
    await Header(),
    await Main(),
    await Education(),
    await Experience(),
    await Skills(),
    await Tools(),
    await Footer()
  );

  await initLanguage();
  updateThemeInUI();
  loadEvents();
};

init();
