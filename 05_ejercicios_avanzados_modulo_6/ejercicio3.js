const users = [
  {
    name: "Alberto",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Antonio",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Santiago",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Laura",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

// --------------------------------- //

const soundsCount = {};

for (const user of users) {
  for (const sound in user.favoritesSounds) {
    if (!soundsCount[sound]) {
      soundsCount[sound] = 1;
    } else {
      soundsCount[sound] += 1;
    }
  }
}

console.log(`
\n--------------------------
SOLUCIÓN COMO SOLICITADO
--------------------------
`);
console.log(soundsCount);

// ---------------------------------------------------------//
// USANDO DOS FUNCIONES , String.concat() y Array.flatMap() //
// -------------------------------------------------------- //

const getFavoritesSoundsCount = function (arr) {
  const soundsCount = {};

  const sounds = arr.flatMap((el) => Object.keys(el.favoritesSounds));

  sounds.forEach((el) =>
    !soundsCount[el] ? (soundsCount[el] = 1) : (soundsCount[el] += 1)
  );

  return soundsCount;
};

// ------------------------------------ //

const buildString = function (obj) {
  let string = "All the favorites sound are repeted: ";

  for (let sound in obj) {
    string = string.concat(`${sound}: ${obj[sound]} times, `);
  }

  return string;
};

const allFavoritesSoundsCount = getFavoritesSoundsCount(users);

console.log(`
\n--------------------------------------------------------
USANDO DOS FUNCIONES , String.concat() y Array.flatMap()
--------------------------------------------------------
`);

console.log(buildString(allFavoritesSoundsCount));
