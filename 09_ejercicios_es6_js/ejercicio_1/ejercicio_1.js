// -----------------------  1.1  ----------------------- //
const game = {
  title: "The last us 2",
  gender: ["action", "zombie", "survival"],
  year: 2020,
};

const { title, gender, year } = game;

console.log(`

  Ejercicio 1.1:
  Title: ${title}, Gender: ${gender.join("-")}, Year: ${year}

  `);

// -----------------------  1.2  ----------------------- //
const fruits = ["Banana", "Strawberry", "Orange"];

const [fruit1, fruit2, fruit3] = fruits;

console.log(`

  Ejercicio 1.2:
  fruit1: ${fruit1}, fruit2: ${fruit2}, fruit3: ${fruit3}

  `);

// -----------------------  1.3  ----------------------- //
const animalFunction = () => {
  return {name: 'Bengal Tiger', race: 'Tiger'}
};

const {name, race} = animalFunction();

console.log(`

  Ejercicio 1.3:
  name: ${name}, race: ${race}

  `);

// -----------------------  1.4  ----------------------- //
const car = {nameCar: 'Mazda 6', itv: [2015, 2011, 2020] }

const {nameCar,  itv}= car;
const [year1, year2, year3] = itv

console.log(`

  Ejercicio 1.4:
  nameCar: ${nameCar}, itv: ${year1}, ${year2}, ${year3}

  `);