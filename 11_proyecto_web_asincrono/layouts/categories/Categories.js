import "./Categories.css";
import { CategoryCard } from "../../src/components/categoryCard/CategoryCard";

export const Categories = () => {
  const categories = [
    "comida",
    "moda",
    "tecnologia",
    "paisaje",
    "arte",
    "animales",
    "viajes",
    "musica",
    "deporte",
    "negocios",
    "arquitectura",
    "naturaleza",
  ];

  const categoryCards = categories
    .map(
      (category) => `
       ${CategoryCard(category)}
     `
    )
    .join("");

  return `
    <section class="section categories">
        <h3 class="tertiary-title">Explora por categoria</h3>
        <div class="categories_box">
           ${categoryCards}
        </div>    
    </section>
    `;
};
