// -----------------------  2.1  ----------------------- //
const pointsList = [32, 54, 21, 64, 75, 43];

// Creo una copia y agrego un numero nuevo para notar la diferencia
const pointsListCopy = [...pointsList, 30];

console.log(`

    Ejercicio 2.1:
    pointsList Original: ${pointsList}, pointsList Copy: ${pointsListCopy}
  
    `);

// -----------------------  2.2  ----------------------- //
const toy = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };
// Creo una copia y edito el nombre que esta escrito mal.
const toyCopy = { ...toy, name: "Buzz Lightyear" };

console.log(`

    Ejercicio 2.2:
    Toy original: ${toy.name}, ${toy.date}, ${toy.color}
    Toy copy: ${toyCopy.name}, ${toyCopy.date}, ${toyCopy.color}
  
    `);

// -----------------------  2.3  ----------------------- //

const pointsList2 = [54, 87, 99, 65, 32];

const allPointsList = [...pointsList, ...pointsList2];

console.log(`

    Ejercicio 2.3:
    all pointsList: ${allPointsList}
  
    `);

// -----------------------  2.4  ----------------------- //

const toyUpdate = { lights: "rgb", power: ["Volar like a dragon", "MoonWalk"] };

const newToy = { ...toy, ...toyUpdate };

console.log("Ejercicio 2.4");
console.log(newToy);

// -----------------------  2.5  ----------------------- //
const colors = ["rojo", "azul", "amarillo", "verde", "naranja"];

const newColors = [...colors.slice(0, 2), ...colors.slice(3)];

console.log(`

    Ejercicio 2.5:
    colors: ${colors}
    new colors: ${newColors}
  
    `);
