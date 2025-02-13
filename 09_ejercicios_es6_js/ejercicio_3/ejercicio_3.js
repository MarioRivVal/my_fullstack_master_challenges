// -----------------------  3.1  ----------------------- //
const users = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];

const userNames = users.map((el) => el.name);

console.log(`

    Ejercicio 3.1:
    user names: ${userNames}
  
    `);

// -----------------------  3.2 ----------------------- //

const usersWithA = users.map((el) =>
  el.name.startsWith("A") ? (el.name = "Anacleto") : el.name
);

console.log(`

    Ejercicio 3.2:
    user names 2: ${usersWithA}
  
    `);

// -----------------------  3.3 ----------------------- //
const cities = [
  { isVisited: true, name: "Tokyo" },
  { isVisited: false, name: "Madagascar" },
  { isVisited: true, name: "Amsterdam" },
  { isVisited: false, name: "Seul" },
];

const citiesList = cities.map((el) =>
  el.isVisited ? el.name + " 'visited'" : el.name
);

console.log(`

    Ejercicio 3.3:
    cities list: ${citiesList}
  
    `);
