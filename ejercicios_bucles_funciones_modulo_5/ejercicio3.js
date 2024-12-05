const songs = [
  { title: "Bohemian Rhapsody", genre: "Rock", duration: 5.55 },
  { title: "Stairway to Heaven", genre: "Rock", duration: 7.58 },
  { title: "Billie Jean", genre: "Pop", duration: 4.54 },
  { title: "Hotel California", genre: "Rock", duration: 6.31 },
  { title: "Sweet Child o Mine", genre: "Rock", duration: 5.56 },
  { title: "Smells Like Teen Spirit", genre: "Rock", duration: 5.01 },
  { title: "Comfortably Numb", genre: "Rock", duration: 6.23 },
  { title: "Wish You Were Here", genre: "Rock", duration: 5.34 },
  { title: "Black Dog", genre: "Rock", duration: 4.54 },
  { title: "Thunderstruck", genre: "Rock", duration: 4.52 },
  { title: "Crazy Love", genre: "Pop", duration: 3.52 },
];

const mixedSongs = [
  { title: "Bohemian Rhapsody", genre: "Rock", duration: 5.55 },
  { title: "Stairway to Heaven", genre: "Rock", duration: 7.58 },
  { title: "Billie Jean", genre: "Pop", duration: 4.54 },
  { title: "Hotel California", genre: "Rock", duration: 6.31 },
  { title: "Sweet Child o' Mine", genre: "Rock", duration: 5.56 },
  { title: "Smells Like Teen Spirit", genre: "Rock", duration: 5.01 },
  { title: "Comfortably Numb", genre: "Rock", duration: 6.23 },
  { title: "Wish You Were Here", genre: "Rock", duration: 5.34 },
  { title: "Black Dog", genre: "Rock", duration: 4.54 },
  { title: "Thunderstruck", genre: "Rock", duration: 4.52 },
  { title: "Crazy Love", genre: "Pop", duration: 3.52 },
  { title: "Shape of You", genre: "Pop", duration: 4.24 },
  { title: "Uptown Funk", genre: "Pop", duration: 5.3 },
  { title: "Rolling in the Deep", genre: "Pop", duration: 4.03 },
  { title: "Can't Stop the Feeling!", genre: "Pop", duration: 6.2 },
  { title: "Bad Romance", genre: "Pop", duration: 4.54 },
  { title: "Firework", genre: "Pop", duration: 5.5 },
  { title: "Sorry", genre: "Pop", duration: 4.1 },
  { title: "Blinding Lights", genre: "Pop", duration: 4.22 },
  { title: "Havana", genre: "Pop", duration: 4.15 },
  { title: "Roar", genre: "Pop", duration: 6.25 },
  { title: "Despacito", genre: "Latino", duration: 4.42 },
  { title: "Bailando", genre: "Latino", duration: 5.03 },
  { title: "La Bicicleta", genre: "Latino", duration: 4.5 },
  { title: "Chantaje", genre: "Latino", duration: 4.2 },
  { title: "El Perdón", genre: "Latino", duration: 5.08 },
  { title: "Mi Gente", genre: "Latino", duration: 4.12 },
  { title: "Vivir Mi Vida", genre: "Latino", duration: 6.2 },
  { title: "Danza Kuduro", genre: "Latino", duration: 4.36 },
  { title: "Súbeme La Radio", genre: "Latino", duration: 6.23 },
  { title: "La Gozadera", genre: "Latino", duration: 4.02 },
];

const rockPlaylist = [];

for (const song of songs) {
  if (song.duration >= 5.0) {
    rockPlaylist.push(song);
  }
}

console.log(rockPlaylist);

// ----------------------------------- //
// USANDO UNA FUNCION ABSTRACTA QUE RECIBE UN OBJETO Y Array.filter()

const filterSongs = (obj) => {
  const { arr, genre, duration, size } = obj;

  const compare = size === "less" ? (a, b) => a <= b : (a, b) => a >= b;

  return arr.filter(
    (el) => el.genre == genre && compare(el.duration, duration)
  );
};

const rockSongs = filterSongs({
  arr: mixedSongs,
  genre: "Rock",
  duration: "5.0",
  size: "greater",
});
const latinoSongs = filterSongs({
  arr: mixedSongs,
  genre: "Latino",
  duration: "6.0",
  size: "less",
});

console.log(
  "\nUSANDO UNA FUNCION ABSTRACTA QUE RECIBE UN OBJETO Y Array.filter()"
);
console.log(rockSongs);
console.log(latinoSongs);
