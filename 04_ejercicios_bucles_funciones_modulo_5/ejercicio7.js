const tracks = [
  { title: "Enter Sandman", genre: "Metal" },
  { title: "Back in Black", genre: "Rock" },
  { title: "Bohemian Rhapsody", genre: "Rock" },
  { title: "Blinding Lights", genre: "Pop" },
  { title: "Old Town Road", genre: "Country" },
  { title: "Smells Like Teen Spirit", genre: "Grunge" },
  { title: "Bad Guy", genre: "Pop" },
  { title: "Thunderstruck", genre: "Rock" },
  { title: "Hotel California", genre: "Rock" },
  { title: "Stairway to Heaven", genre: "Rock" },
];

const ordenadas = {
  metal: [],
  rock: [],
  pop: [],
  country: [],
  grunge: [],
};
for (const track of tracks) {
  switch (track.genre) {
    case "Metal":
      ordenadas.metal.push(track);
      break;
    case "Rock":
      ordenadas.rock.push(track);
      break;
    case "Pop":
      ordenadas.pop.push(track);
      break;
    case "Country":
      ordenadas.country.push(track);
      break;
    case "Grunge":
      ordenadas.grunge.push(track);
      break;

    default:
      break;
  }
}

console.log(ordenadas);

// ------------------------------------- //
// USANDO UNA FUNCION MAS DINAMICA

const tracksByGenre = {};

tracks.forEach((track) => {
  let trackLower = track.genre.toLocaleLowerCase();

  if (!tracksByGenre[trackLower]) {
    tracksByGenre[trackLower] = [];
    tracksByGenre[trackLower].push(track.title);
  } else {
    tracksByGenre[trackLower].push(track.title);
  }
});

console.log(`
----------------------------------
\nUSANDO UNA FUNCION QUE CREA DINAMICAMENTE LOS GENEROS
----------------------------------
`);

console.log("\n--- LISTA DE CANCIONES POR GENERO ---");
console.log(tracksByGenre);
