import "./Home.css";
import { Landing } from "../Landing/Landing";
import { Button } from "../../src/components/button/Button";
import { linkPage } from "../../utils/linkPage";
import { changeTheme } from "../../utils/changeTheme";
import { Slider } from "../../layouts/slider/Slider";

export const Home = async () => {
  const main = document.querySelector("#main");

  //   cleanPage(main);

  main.innerHTML = `
    <section class="home">
        <div class="sliders">
            <div class="sliders-track">
                ${await Slider(6, "vertical", 1)}
            </div>
        </div>
       
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

          <div class="sliders">
            <div class="sliders-track">
               ${await Slider(6, "vertical", 2)}
            </div>
        </div>
        
    </section>
`;

  linkPage("#landinglink", Landing);
  changeTheme();
};
