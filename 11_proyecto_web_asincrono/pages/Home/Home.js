import "./Home.css";
import { Landing } from "../Landing/Landing";
import { Button } from "../../src/components/button/Button";
import { linkPage } from "../../utils/linkPage";
import { changeTheme } from "../../utils/changeTheme";
import { homeSlider } from "../../layouts/homeSlider/homeSlider";

import { fetchImages, shuffleArray } from "../../src/services/api";

export const Home = async () => {
  const main = document.querySelector("#main");

  // Realizar dos fetch separados de 18 imágenes cada uno
  const group1 = await fetchImages(18, 1);
  const group2 = await fetchImages(18, 2);

  const groupA = shuffleArray(group1);
  const groupB = shuffleArray(group2);

  main.innerHTML = `
    <section class="home">
      ${homeSlider(groupA)} 
        <div class="home_banner">
            <div class="home__title">
                <h2 class="secondary-title">imagine</h2>
                <h1 class="primary-title"><span>find</span><span>it</span></h1>
            </div>
            <div class="mode-box">
                ${Button("landinglink", "enter")}
                <button class="icon-box" id="themeBtn">
                </button>
            </div>
        </div>
         ${homeSlider(groupB, true)}
        
    </section>
`;

  linkPage("#landinglink", Landing);
  changeTheme();
};
