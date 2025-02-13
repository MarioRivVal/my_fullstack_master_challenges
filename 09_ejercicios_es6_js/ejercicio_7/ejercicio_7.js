// -----------------------  7.1 ----------------------- //

const videogames = [
  { name: "Final Fantasy VII", genders: ["RPG"], score: 9.5 },
  { name: "Assasins Creed Valhala", genders: ["Aventura", "RPG"], score: 4.5 },
  { name: "The last of Us 2", genders: ["Acción", "Aventura"], score: 9.8 },
  { name: "Super Mario Bros", genders: ["Plataforma"], score: 8.5 },
  { name: "Genshin Impact", genders: ["RPG", "Aventura"], score: 7.5 },
  { name: "Legend of Zelda: Breath of the wild", genders: ["RPG"], score: 10 },
];

const rpgGames = videogames
  .filter((el) => el.genders.find((el) => el === "RPG"))
  .reduce((total, el, _, arr) => total + el.score / arr.length, 0);

console.log("Ejercicio 7.1");
console.log(rpgGames);
