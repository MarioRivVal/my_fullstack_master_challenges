const artists = [
  { name: "Kurt Cobain", influences: ["The Beatles", "Pixies", "Lead Belly"] },
  {
    name: "David Bowie",
    influences: ["Little Richard", "Chuck Berry", "The Velvet Underground"],
  },
  {
    name: "Eddie Vedder",
    influences: ["The Who", "Neil Young", "Jim Morrison"],
  },
  {
    name: "Freddie Mercury",
    influences: ["Liza Minnelli", "Jimi Hendrix", "Aretha Franklin"],
  },
  {
    name: "John Lennon",
    influences: ["Elvis Presley", "Chuck Berry", "Buddy Holly"],
  },
];

// La verdad no entendi porque usar bucles animadados , si al final para la solución basta uno, usando el metodo Array.join()

for (const artist of artists) {
  let artistName = artist.name;
  let artistInfluence = artist.influences;

  console.log(
    `${artistName} fue influido por la musica de ${artistInfluence.join(", ")}`
  );
}

//  ------------------------------------- //
// Pero si quisiera usar bucle aninado por motivo didactico seria algo asi:
// Aun considerando que la salida de la consola es muy repetida.

console.log(`
----------------------------------
\nUSANDO UN BUCLE ANINADO 
----------------------------------
`);

for (const artist of artists) {
  let artistName = artist.name;

  for (const influence of artist.influences) {
    console.log(`${artistName} fue influido por la musica de ${influence}`);
  }
}
