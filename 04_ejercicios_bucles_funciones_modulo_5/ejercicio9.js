const xMen = [
  { name: "Wolverine", year: 1974 },
  { name: "Cyclops", year: 1963 },
  { name: "Storm", year: 1975 },
  { name: "Phoenix", year: 1963 },
  { name: "Beast", year: 1963 },
  { name: "Gambit", year: 1990 },
  { name: "Nightcrawler", year: 1975 },
  { name: "Magneto", year: 1963 },
  { name: "Professor X", year: 1963 },
  { name: "Mystique", year: 1978 },
];

function findOldestXMen(xMen) {
  let oldestOne = "";
  let year = 2000;

  for (const xMan of xMen) {
    if (xMan.year < year) {
      year = xMan.year;
      oldestOne = xMan.name;
    }
  }
  return oldestOne;
}

// console.log(findOldestXMen(xMen));

// ----------------------------------- //
// USANDO UNA FUNCION MAS ABSTRACTA QUE FILTRE NO SOLO LOS MAS ANTIGUOS SI NO TAMBIEN LOS MAS MODERNOS  Y QUE RETORNE MAS VALORES SI PERTENECEN A LA MISMA CONDICION. TAMBIEN USAMOS DOS FUNCIONES QUE HACEN UN UNICA COSA.

const dcHeroes = [
  { name: "Superman", year: 1938 },
  { name: "Batman", year: 1939 },
  { name: "Wonder Woman", year: 1941 },
  { name: "Flash", year: 1940 },
  { name: "Green Lantern", year: 1938 },
  { name: "Aquaman", year: 1941 },
  { name: "Martian Manhunter", year: 1955 },
  { name: "Green Arrow", year: 1938 },
  { name: "Cyborg", year: 1980 },
  { name: "Shazam", year: 1940 },
];
const starWarsCharacters = [
  { name: "Luke Skywalker", year: 1977 },
  { name: "Leia Organa", year: 1977 },
  { name: "Han Solo", year: 1977 },
  { name: "Darth Vader", year: 1966 },
  { name: "Yoda", year: 1345 },
  { name: "Obi-Wan Kenobi", year: 1910 },
  { name: "Palpatine", year: 1023 },
  { name: "Boba Fett", year: 1980 },
  { name: "R2-D2", year: 1965 },
  { name: "C-3PO", year: 1955 },
];

const filterByAge = function (arr, condition = "moderno") {
  const allYears = arr.map((el) => el.year);
  const age =
    condition === "antiguo" ? Math.min(...allYears) : Math.max(...allYears);

  const filteredElements = arr.filter((el) => el.year === age);

  return buildString(filteredElements, condition);
};

// -----------------------------

const buildString = function (arr, condition) {
  const IsPlural = arr.length > 1 ? "s" : "";
  const article = arr.length > 1 ? "Los" : "El";
  const verb = arr.length > 1 ? "son" : "es";

  const names = arr.map((el) => el.name);

  const string = `${article} personaje${IsPlural} más ${condition}${IsPlural} ${verb}: ${names.join(
    ", "
  )}`;

  return string;
};

console.log(`
----------------------------------
\nUSANDO FUNCIONES QUE FILTRAN
POR MODERNO O ANTIGUO Y CREA STRING DINAMICA
----------------------------------
`);

console.log(filterByAge(dcHeroes, "antiguo"));
console.log(filterByAge(dcHeroes, "moderno"));
console.log(filterByAge(starWarsCharacters, "antiguo"));
console.log(filterByAge(starWarsCharacters));
