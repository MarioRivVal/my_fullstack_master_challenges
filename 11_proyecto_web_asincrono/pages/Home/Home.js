import "./Home.css";
import { Landing } from "../Landing/Landing";
import { ImgBox } from "../../src/components/imgBox/ImgBox";
import { Button } from "../../src/components/button/Button";
import { sunIcon } from "../../src/components/icons/sunIcon";
import { cleanPage } from "../../utils/cleanPage";
import { linkPage } from "../../utils/linkPage";
import { changeTheme } from "../../utils/changeTheme";
import { changeIcon } from "../../utils/changeIcon";

export const Home = () => {
  const main = document.querySelector("#main");
  let imgs = "";
  for (let i = 1; i <= 5; i++) {
    imgs += ImgBox(i);
  }

  //   cleanPage(main);

  main.innerHTML = `
    <section class="home">
        <div class="sliders">
            <div class="sliders-track">
                <div class="slider slider-vertical slider-vertical--5">
                    ${imgs}
                </div>
                <div class="slider slider-vertical slider-vertical--5">
                    ${imgs}
                </div> 
            </div>
        </div>
       
        <div class="home_banner">
            <div class="home__title">
                <h2 class="secondary-title">imagine</h2>
                <h1 class="primary-title"><span>create</span><span>it</span></h1>
            </div>
            <div class="mode-box">
                ${Button("landinglink", "enter")}
                <button id="themeBtn">
                
                </button>
            </div>
        </div>

          <div class="sliders">
            <div class="sliders-track">
                <div class="slider slider-vertical slider-vertical--5">
                    ${imgs}
                </div>
                <div class="slider slider-vertical slider-vertical--5">
                    ${imgs}
                </div> 
            </div>
        </div>
        
    </section>
`;

  linkPage("#landinglink", Landing);
  changeTheme();
};
