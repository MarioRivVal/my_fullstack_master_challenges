import "./Categories.css";
import { CategoryCard } from "../../src/components/categoryCard/CategoryCard";

export const Categories = () => {
  return `
    <section class="section categories">
        <h3 class="tertiary-title">Explora por categoria</h3>
        <div class="categories_box">
            ${CategoryCard(7)}
            ${CategoryCard(8)}
            ${CategoryCard(9)}
            ${CategoryCard(10)}
            ${CategoryCard(11)}
            ${CategoryCard(12)}
            ${CategoryCard(13)}
            ${CategoryCard(14)}
            ${CategoryCard(15)}
            ${CategoryCard(16)}
            ${CategoryCard(17)}
            ${CategoryCard(18)}
        </div>    
    </section>
    `;
};
