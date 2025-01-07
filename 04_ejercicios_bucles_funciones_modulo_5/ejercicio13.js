const actors = [
  { name: "Leonardo DiCaprio", born: 1974 },
  { name: "Tom Hanks", born: 1956 },
  { name: "Meryl Streep", born: 1949 },
  { name: "Brad Pitt", born: 1963 },
  { name: "Johnny Depp", born: 1963 },
  { name: "Scarlett Johansson", born: 1984 },
  { name: "Jennifer Lawrence", born: 1990 },
  { name: "Denzel Washington", born: 1954 },
  { name: "Morgan Freeman", born: 1937 },
  { name: "Cate Blanchett", born: 1969 },
];

function calculateActorsAges(array) {
  const currentYear = 2024;
  const actorsAges = [];

  for (const el of array) {
    actorsAges.push({ name: el.name, age: currentYear - el.born });
  }

  return actorsAges;
}

console.log(calculateActorsAges(actors));

// ----------------------------------------- //
//  FUNCION MAS DINAMICA

const actorAges = function (arr) {
  const currentYear = new Date().getFullYear();

  arr.forEach((el) => {
    console.log(`${el.name} is ${currentYear - el.born} years old`);
  });
};

console.log(`
----------------------------------
\nUSANDO UNA FUNCION MAS DINAMICA
----------------------------------
`);
actorAges(actors);
