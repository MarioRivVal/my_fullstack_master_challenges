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

const allVolume = [];
let allVolumeSum = 0;

for (const user of users) {
  for (const sound in user.favoritesSounds) {
    allVolume.push(user.favoritesSounds[sound].volume);
  }
}

for (let i = 0; i < allVolume.length; i++) {
  allVolumeSum += allVolume[i];
}

const volumeAverage = allVolumeSum / allVolume.length;

console.log(`
\n--------------------------
SOLUCIÓN COMO SOLICITADO
--------------------------
`);
console.log(volumeAverage);

// -----------------------------------------------------------------------//
// USANDO UNA FUNCIÓN, USO DE Array.map(), Object.entries, Array.reduce() //
// ---------------------------------------------------------------------- //

const calculateVolumeAverage = function (arr) {
  const allVolume = [];

  arr.forEach((el) => {
    const favoritesSounds = Object.entries(el.favoritesSounds);
    const volume = favoritesSounds.map((el) => el[1].volume);
    allVolume.push(...volume);
  });

  const sum = allVolume.reduce((total, i) => (total += i), 0);
  return sum / allVolume.length;
};

console.log(`
\n------------------------------------------------------
UTILIZANDO  Array.map(), Object.entries, Array.reduce()
------------------------------------------------------
`);

console.log(calculateVolumeAverage(users));

