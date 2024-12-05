const movies = [
  { title: "The Matrix", releaseYear: 1999 },
  { title: "Star Wars: Episode IV – A New Hope", releaseYear: 1977 },
  { title: "Inception", releaseYear: 2010 },
  { title: "Jurassic Park", releaseYear: 1993 },
  { title: "The Shawshank Redemption", releaseYear: 1994 },
  { title: "Pulp Fiction", releaseYear: 1994 },
  { title: "Avatar", releaseYear: 2009 },
  { title: "The Dark Knight", releaseYear: 2008 },
  { title: "Fight Club", releaseYear: 1999 },
  { title: "Forrest Gump", releaseYear: 1994 },
];

let before2000 = 0;
let after2000 = 0;

for (const movie of movies) {
  if (movie.releaseYear <= 2000) {
    before2000++;
  } else {
    after2000++;
  }
}
console.log("Movies before 2000: " + before2000);
console.log("Movies after 2000: " + after2000);

// ----------------------------- //
// USANDO UN Array.forEach(), OPERADOR TERNARIO, TEMPLATE LITERAL Y STRINGS EN LINEAS MULTIPLAS

let antes2000 = 0;
let despues2000 = 0;

movies.forEach((movie) =>
  movie.releaseYear <= 2000 ? antes2000++ : despues2000++
);

const string = `
    Movies before 2000 are ${antes2000},
    and movies after 2000 are ${despues2000}
`;

console.log("\nUSANDO Array.forEach, Operador ternario y más");
console.log(string);
