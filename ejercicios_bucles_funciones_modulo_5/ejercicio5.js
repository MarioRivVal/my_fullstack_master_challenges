const albums = [
  { title: "Led Zeppelin IV", genre: "Rock", duration: 42.19 },
  { title: "The Dark Side of the Moon", genre: "Rock", duration: 42.49 },
  { title: "Back in Black", genre: "Rock", duration: 42.11 },
  { title: "Hotel California", genre: "Rock", duration: 43.08 },
  { title: "Abbey Road", genre: "Rock", duration: 47.23 },
  { title: "Thriller", genre: "Pop", duration: 42.19 },
  { title: "A Night at the Opera", genre: "Rock", duration: 43.08 },
  { title: "The Wall", genre: "Rock", duration: 81.0 },
  { title: "Born to Run", genre: "Rock", duration: 39.26 },
  { title: "The Joshua Tree", genre: "Rock", duration: 50.11 },
];

// Considerando que estamos calculando numeros decimales con base 60 y no 100, vamos primero a convertir todas las duraciones en segundos para un facil manejo, y mas tarde regresar la suma final a horas, minutos y segundos con convertInHours(), que puede ser usada en otros lugares.

const durationByAlbum = (arr, genre) => {
  const allSecondsDurations = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].genre == genre) {
      let duration = arr[i].duration;

      allSecondsDurations.push(convertInSeconds(duration));
    }
  }

  return buildString(allSecondsDurations, genre);
};

//  --------------------------------------

const buildString = (arr, genre) => {
  let allSeconds = arr.reduce((total, i) => total + i, 0);

  const [hours, minutes, seconds] = convertInHours(allSeconds);

  return `Tu playlist de todos los albunes ${genre} tiene una duración de ${hours} horas, ${minutes} minutos y ${seconds} segundos`;
};

//  --------------------------------------

// Estas dos funciones las usaremos tambien en el ejercicio 11

const convertInHours = function (seconds) {
  let totalHours = Math.floor(seconds / 3600);
  let spareSeconds = seconds % 3600;
  let totalMinutes = Math.floor(spareSeconds / 60);
  let totalSeconds = spareSeconds % 60;

  return [totalHours, totalMinutes, totalSeconds];
};

//  --------------------------------------

const convertInSeconds = function (duration) {
  let minutes = Math.floor(duration);
  let seconds = Math.round((duration - minutes) * 100);

  let durationInSeconds = minutes * 60 + seconds;

  return durationInSeconds;
};

const string = durationByAlbum(albums, "Rock");
const string2 = durationByAlbum(albums, "Pop");
console.log(string);
console.log(string2);
