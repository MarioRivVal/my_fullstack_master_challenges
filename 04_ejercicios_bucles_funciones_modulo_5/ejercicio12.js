// Agregamos mas mutantes para que haya algun poder repetido

const mutants = [
  { name: "Wolverine", power: "regeneration" },
  { name: "Magneto", power: "magnetism" },
  { name: "Professor X", power: "telepathy" },
  { name: "Jean Grey", power: "telekinesis" },
  { name: "Rogue", power: "power absorption" },
  { name: "Storm", power: "weather manipulation" },
  { name: "Mystique", power: "shape-shifting" },
  { name: "Beast", power: "superhuman strength" },
  { name: "Colossus", power: "steel skin" },
  { name: "Nightcrawler", power: "teleportation" },
  { name: "test mutante", power: "teleportation" },
  // Nuevos mutantes con poderes repetidos
  { name: "Gambit", power: "telekinesis" },
  { name: "Iceman", power: "weather manipulation" },
  { name: "Emma Frost", power: "telepathy" },
  { name: "Sabretooth", power: "regeneration" },
  { name: "Deadpool", power: "regeneration" },
];

function findMutantByPower(array, power) {
  const foundMutants = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i].power === power) {
      foundMutants.push(array[i].name);
    }
  }

  return foundMutants.length == 0 ? "Nungun xmen encontrado" : foundMutants;
}

console.log(findMutantByPower(mutants, "teleportation"));
console.log(findMutantByPower(mutants, "test"));

// ---------------------------------------- //
// USANDO MULTIPLES FUNCIONES DINAMICASQUE HACEPTAN MAS PARAMETROS

const findElements = function (arr, key, value) {
  const filtered = arr.filter((el) => el[key] === value).map((el) => el.name);

  return buildString(filtered, key, value);
};

// ---------------------------------------- //

const buildString = function (arr, key, value) {
  let isPlural = arr.length > 1 ? "s" : "";

  if (arr.length == 0) {
    return `No mutant with the ${key} of ${value} has been found`;
  }

  return `We have ${
    arr.length
  } mutant${isPlural} with the ${key} of ${value}: ${arr.join(", ")}`;
};

console.log(`
----------------------------------
\nUSANDO MULTIPLES FUNCIONES DINAMICAS
QUE ACEPTAN MAS PARAMETROS
----------------------------------
`);
console.log(findElements(mutants, "power", "regeneration"));
console.log(findElements(mutants, "power", "steel skin"));
console.log(findElements(mutants, "power", "comer rapido"));
