const alien = {
  name: "Xenomorph",
  species: "Xenomorph XX121",
  origin: "Unknown",
  weight: 180,
};

for (let key in alien) {
  console.log(`La propiedad ${key} tiene cómo valor: ${alien[key]}`);
}

// ------------------------------ //
// USANDO Object.entries()

console.log("\nUsando Object.entries");
for (let [key, value] of Object.entries(alien)) {
  console.log(`La propiedad ${key} tiene cómo valor: ${value}`);
}
