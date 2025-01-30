import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";

export const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="home">
      <div class="home__main">
          <p>Hola, soy</p>
          <h1>Mario Rivera</h1>
          <p>
          Soy un ingeniero de software en Asturias, Oviedo, y estudiante de DAM. Disfruto creando contenido para internet, como sitios web y aplicaciones. Llevo un año trabajando como freelance mientras estudio, acumulando experiencia y conocimientos valiosos en diversos campos a través de mis proyectos y trabajos.
          </p>
          <a href="mailto:rival.moro@gmail.com">Cuenta conmigo →</a>
      </div>
      
    </section>
    <object
        type="image/svg+xml"
        data="img/curveline.svg"
        class="home__curveline-icon"
    ></object>`;
};
