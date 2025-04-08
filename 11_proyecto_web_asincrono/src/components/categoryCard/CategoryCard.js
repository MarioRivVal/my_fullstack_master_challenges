import "./CategoryCard.css";

export const CategoryCard = (img) => `
    <div class="categories_card">
        <img src="./src/img/img-${img}.png" alt="${img} image" >
        <div class="categories_card-category">
            <p>natura</p>
        </div>
    </div>
`;
