const allMovies = [
  { title: "Inception", duration: 148 },
  { title: "The Dark Knight", duration: 152 },
  { title: "Interstellar", duration: 169 },
  { title: "Dunkirk", duration: 106 },
  { title: "The Prestige", duration: 130 },
  { title: "Memento", duration: 113 },
  { title: "Batman Begins", duration: 140 },
  { title: "The Dark Knight Rises", duration: 164 },
  { title: "Tenet", duration: 150 },
  { title: "Insomnia", duration: 118 },
];

function averageMovieDuration(movies) {
  let totalDuration = 0;
  for (const movie of movies) {
    totalDuration += movie.duration;
  }

  return `La duración media de todas las peliculas es de ${
    totalDuration / movies.length
  } minutes`;
}

console.log(averageMovieDuration(allMovies));

// -------------------------------------- //
// USANDO EL METODO Array.reduce() Y LAS FUNCIONES ABSTRACTAS convertInHours() Y convertInSeconds()

function calculateAverage(movies) {
  const allDuration = movies.reduce((total, el) => total + el.duration, 0);
  const averageInSecond = convertInSeconds(allDuration / movies.length);
  const [hours, minutes, seconds] = convertInHours(averageInSecond);

  return ` La duración media de todas las peliculas es de ${hours} horas, ${minutes} minutos y ${seconds} segundos`;
}

// -------------------------------------- //

const convertInHours = function (seconds) {
  let totalHours = Math.floor(seconds / 3600);
  let spareSeconds = seconds % 3600;
  let totalMinutes = Math.floor(spareSeconds / 60);
  let totalSeconds = spareSeconds % 60;

  return [totalHours, totalMinutes, totalSeconds];
};

// -------------------------------------- //

const convertInSeconds = function (duration) {
  let minutes = Math.floor(duration);
  let seconds = Math.round((duration - minutes) * 100);

  let durationInSeconds = minutes * 60 + seconds;

  return durationInSeconds;
};

console.log(`
----------------------------------
\nUSANDO EL METODO Array.reduce()
Y LAS FUNCIONES ABSTRACTAS convertInHours() Y convertInSeconds() 
----------------------------------
`);

console.log(calculateAverage(allMovies));
