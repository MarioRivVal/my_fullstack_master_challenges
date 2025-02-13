// -----------------------  4.1 ----------------------- //
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const onlyOverEighteen = ages.filter((el) => el >= 18);

console.log(`
    
    Ejercicio 4.1:
    onlyOverEighteen: ${onlyOverEighteen}
    
    `);

// -----------------------  4.2 ----------------------- //

const evenNumbers = ages.filter((el) => el % 2 == 0);

console.log(`
    
    Ejercicio 4.2:
    evenNumbers: ${evenNumbers}
    
    `);

// -----------------------  4.3 ----------------------- //
const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const lolStreamers = streamers
  .filter((el) => el.gameMorePlayed === "League of Legends")
  .map((el) => el.name);

console.log(`
    
    Ejercicio 4.3:
    lolStreamers: ${lolStreamers}
    
    `);

// -----------------------  4.4 ----------------------- //

const streamersWithU = streamers
  .filter((el) => el.name.includes("u"))
  .map((el) => el.name);

console.log(`
    
    Ejercicio 4.4:
    streamersWithU: ${streamersWithU}
    
    `);

// -----------------------  4.5 ----------------------- //

const streamerOver35 = streamers.filter((el) => {
  if (el.gameMorePlayed.includes("Legends")) {
    if (el.age > 35) {
      el.gameMorePlayed = el.gameMorePlayed.toUpperCase();
    }
    return true;
  }
});

console.log("Ejercicio 4.5");
console.log(streamerOver35);
