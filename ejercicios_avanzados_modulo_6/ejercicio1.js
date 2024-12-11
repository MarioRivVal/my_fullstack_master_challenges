const movies = [
  {
    title: "Bracula: Condemor II",
    duration: 192,
    categories: ["comedia", "aventura"],
  },
  {
    title: "Spider-Man: No Way Home",
    duration: 122,
    categories: ["aventura", "acción"],
  },
  {
    title: "The Voices",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "Shrek",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];

const allCategories = [];

for (const movie of movies) {
  for (const category of movie.categories) {
    if (!allCategories.includes(category)) {
      allCategories.push(category);
    }
  }
}

console.log(`
\n--------------------------
SOLUCIÓN COMO SOLICITADO
--------------------------
`);
console.log(allCategories);

// ------------------------------------- //
// UTILIZANDO EL METODO Array.flatMap() Y LA ESTRUCTURA DE DATOS new Set()

const categoriesFirstStep = movies.flatMap(el => el.categories)
const categoriesLastStep = [...new Set(categoriesFirstStep)]

// En una unica linea:

const categoriesUniqueStep = [...new Set(movies.flatMap(el => el.categories))]

console.log(`
\n--------------------------------------------------
UTILIZANDO METODO Array.flatMap() y new Set()
--------------------------------------------------
`);

console.log(categoriesUniqueStep);
