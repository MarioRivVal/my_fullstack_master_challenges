import "./CategoryCard.css";

export const CategoryCard = (img) => `
    <div class="categories_card" data-category="${img}">
        <picture>
            <source srcset="img/categories/${img}-light.webp" type="image/webp">
            <img src="img/categories/${img}.png" alt="${img} image">
        </picture>
        <div class="categories_card-category">
            <p>${img}</p>
        </div>
    </div>
`;
