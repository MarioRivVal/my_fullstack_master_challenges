import "./Results.css";

import { Slider } from "../slider/Slider";

export const Results = () => {
  return `
        <section class="section results">
            <h3 class="tertiary-title">Resultados</h3>
            <div class="results-box">
                ${Slider(8, "vertical")}
            </div>    
            <div class="results-box">
                ${Slider(4, "horizontal")}
            </div>    
            <div class="results-box">
                ${Slider(6, "vertical")}
            </div>    
            <div class="results-box">
                ${Slider(5, "horizontal")}
            </div>    
        </section>

    `;
};
