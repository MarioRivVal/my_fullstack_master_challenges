const characters = [
  { name: "Luke Skywalker", species: "Human" },
  { name: "Darth Vader", species: "Human" },
  { name: "Chewbacca", species: "Wookiee" },
  { name: "Leia Organa", species: "Human" },
  { name: "R2-D2", species: "Droid" },
  { name: "C-3PO", species: "Droid" },
  { name: "Obi-Wan Kenobi", species: "Human" },
  { name: "Yoda", species: "Unknown" },
  { name: "Han Solo", species: "Human" },
];
const humanCharacters = [];

for (const character of characters) {
  if (character.species == "Human") {
    humanCharacters.unshift(character);
  }
}
console.log(humanCharacters);

// ------------------------------- //
// USANDO UNA FUNCION ABSTRACTA Y Array.filter()

const vehicles = [
  { name: "Ford Mustang", type: "Car" },
  { name: "Honda Civic", type: "Car" },
  { name: "Harley Davidson", type: "Motorcycle" },
  { name: "Yamaha YZF-R3", type: "Motorcycle" },
  { name: "Tesla Model S", type: "Car" },
  { name: "Ducati Monster", type: "Motorcycle" },
  { name: "Chevrolet Camaro", type: "Car" },
  { name: "Kawasaki Ninja", type: "Motorcycle" },
  { name: "BMW 3 Series", type: "Car" },
];

const plants = [
  { name: "Apple", category: "Fruit" },
  { name: "Carrot", category: "Vegetable" },
  { name: "Banana", category: "Fruit" },
  { name: "Spinach", category: "Vegetable" },
  { name: "Strawberry", category: "Fruit" },
  { name: "Broccoli", category: "Vegetable" },
  { name: "Orange", category: "Fruit" },
  { name: "Potato", category: "Vegetable" },
  { name: "Grapes", category: "Fruit" },
];

function filterElements(arr, key, condition) {
  return arr.filter((el) => el[key] == condition);
}
// ------------------------------- //

const onlyHumans = filterElements(characters, "species", "Human");
const onlyCars = filterElements(vehicles, "type", "Car");
const onlyFruits = filterElements(plants, "category", "Fruit");

console.log("\n---- Usando una función abstracta y Array.filter() ---");
console.log(onlyHumans);
console.log(onlyCars);
console.log(onlyFruits);
