const allMovies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
  { name: "Spirited Away", durationInMinutes: 80 },
  { name: "The Matrix", durationInMinutes: 136 },
  { name: "Amélie", durationInMinutes: 110 },
  { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
];

// -------------------------------------- //
const divideMovies = function (mixedMovies) {
  let orderedMovies = {
    shortMovies: [],
    mediumMovies: [],
    longMovies: [],
  };

  mixedMovies.forEach((movie) => {
    if (movie.durationInMinutes >= 0 && movie.durationInMinutes <= 100) {
      orderedMovies.shortMovies.push(movie);
    } else if (
      movie.durationInMinutes > 100 &&
      movie.durationInMinutes <= 200
    ) {
      orderedMovies.mediumMovies.push(movie);
    } else {
      orderedMovies.longMovies.push(movie);
    }
  });

  return orderedMovies;
};

// -------------------------------------- //
const allOrderedMovies = divideMovies(allMovies);
console.log(allOrderedMovies);
