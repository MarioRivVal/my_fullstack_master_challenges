const placesToTravel = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];
let newPlacesToTravel = [];

for (let i = 0; i < placesToTravel.length; i++) {
  if (placesToTravel[i].id !== 11 && placesToTravel[i].id !== 40) {
    newPlacesToTravel.push(placesToTravel[i]);
  }
}
console.log(newPlacesToTravel);

// USANDO METODO Array.filter()
const newPlacesToTravelTwo = placesToTravel.filter(
  (obj) => obj.id !== 11 && obj.id !== 40
);

console.log("\n--- USANDO Array.filter() ---");
console.log(newPlacesToTravelTwo);
