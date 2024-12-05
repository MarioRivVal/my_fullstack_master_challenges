const starWarsMovies = [
  { title: "A New Hope", releaseYear: 1977 },
  { title: "The Empire Strikes Back", releaseYear: 1980 },
  { title: "Return of the Jedi", releaseYear: 1983 },
  { title: "The Phantom Menace", releaseYear: 1999 },
  { title: "Attack of the Clones", releaseYear: 2002 },
  { title: "Revenge of the Sith", releaseYear: 2005 },
  { title: "The Force Awakens", releaseYear: 2015 },
  { title: "The Last Jedi", releaseYear: 2017 },
  { title: "The Rise of Skywalker", releaseYear: 2019 },
  { title: "Rogue One", releaseYear: 2016 },
  { title: "Solo", releaseYear: 2018 },
];

// Añade tu código de bucle aquí

const moviesByDecade = {
  1970: [],
  1980: [],
  1990: [],
  2000: [],
  2010: [],
};

for (movie of starWarsMovies) {
  if (movie.releaseYear >= 1970 && movie.releaseYear <= 1979) {
    moviesByDecade[1970].push(movie);
  } else if (movie.releaseYear >= 1980 && movie.releaseYear <= 1989) {
    moviesByDecade[1980].push(movie);
  } else if (movie.releaseYear >= 1990 && movie.releaseYear <= 1999) {
    moviesByDecade[1990].push(movie);
  } else if (movie.releaseYear >= 2000 && movie.releaseYear <= 2009) {
    moviesByDecade[2000].push(movie);
  } else if (movie.releaseYear >= 2010 && movie.releaseYear <= 2019) {
    moviesByDecade[2010].push(movie);
  }
}

// console.log(moviesByDecade);

// ------------------------------------------ //
// USANDO UNA FUNCION MAS DINAMICA APTA MAS MAS DECADAS Y OBJETOS

const songs = [
  { title: "In the Mood", artist: "Glenn Miller", releaseYear: 1940 },
  { title: "Blue Moon", artist: "Elvis Presley", releaseYear: 1956 },
  {
    title: "What a Wonderful World",
    artist: "Louis Armstrong",
    releaseYear: 1967,
  },
  { title: "Bohemian Rhapsody", artist: "Queen", releaseYear: 1975 },
  { title: "Thriller", artist: "Michael Jackson", releaseYear: 1982 },
  { title: "Smells Like Teen Spirit", artist: "Nirvana", releaseYear: 1991 },
  { title: "My Heart Will Go On", artist: "Céline Dion", releaseYear: 1997 },
  { title: "Shape of You", artist: "Ed Sheeran", releaseYear: 2017 },
  { title: "Rolling in the Deep", artist: "Adele", releaseYear: 2011 },
  { title: "Old Town Road", artist: "Lil Nas X", releaseYear: 2019 },
  {
    title: "I Want to Hold Your Hand",
    artist: "The Beatles",
    releaseYear: 1963,
  },
  { title: "Respect", artist: "Aretha Franklin", releaseYear: 1967 },
  { title: "Lose Yourself", artist: "Eminem", releaseYear: 2002 },
  { title: "Blinding Lights", artist: "The Weeknd", releaseYear: 2020 },
  { title: "Flowers", artist: "Miley Cyrus", releaseYear: 2023 },
];

const videoGames = [
  { title: "Pong", developer: "Atari", releaseYear: 1972 },
  { title: "Space Invaders", developer: "Taito", releaseYear: 1978 },
  { title: "Pac-Man", developer: "Namco", releaseYear: 1980 },
  { title: "The Legend of Zelda", developer: "Nintendo", releaseYear: 1986 },
  { title: "Super Mario Bros.", developer: "Nintendo", releaseYear: 1985 },
  { title: "Doom", developer: "id Software", releaseYear: 1993 },
  { title: "Final Fantasy VII", developer: "Square", releaseYear: 1997 },
  { title: "The Sims", developer: "Maxis", releaseYear: 2000 },
  { title: "Halo: Combat Evolved", developer: "Bungie", releaseYear: 2001 },
  {
    title: "World of Warcraft",
    developer: "Blizzard Entertainment",
    releaseYear: 2004,
  },
  { title: "Minecraft", developer: "Mojang", releaseYear: 2011 },
  { title: "The Last of Us", developer: "Naughty Dog", releaseYear: 2013 },
  { title: "Fortnite", developer: "Epic Games", releaseYear: 2017 },
  { title: "Elden Ring", developer: "FromSoftware", releaseYear: 2022 },
  {
    title: "The Legend of Zelda: Tears of the Kingdom",
    developer: "Nintendo",
    releaseYear: 2023,
  },
];

const divideInDecades = function (arr) {
  const orderedElements = {};

  arr.forEach((el) => {
    let lastNumber = +el.releaseYear.toString().slice(-1);
    let initialYear = el.releaseYear - lastNumber;
    let finalYear = initialYear + 10 - 1;

    if (!orderedElements[initialYear]) {
      orderedElements[initialYear] = [];
    }
    if (el.releaseYear >= initialYear && el.releaseYear <= finalYear) {
      orderedElements[initialYear].push(el.title);
    }
  });

  return orderedElements;
};

const myOrderedSongs = divideInDecades(songs);
const myOrderedVideogames = divideInDecades(videoGames);

console.log(`
----------------------------------
\nUSANDO UNA FUNCION MAS DINAMICA
----------------------------------
`);

console.log("\n--- ARRAY DE CANCIONES ---");
console.log(myOrderedSongs);
console.log("\n--- ARRAY DE VIDEOJUEGOS ---");
console.log(myOrderedVideogames);
