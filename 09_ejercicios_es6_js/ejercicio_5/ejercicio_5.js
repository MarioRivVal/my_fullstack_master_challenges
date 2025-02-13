// -----------------------  5.1 ----------------------- //

// He agregado más streamers para tener más margen de busqueda
const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
  { name: "TheGrefg", age: 28, gameMorePlayed: "Fortnite" },
  { name: "Shroud", age: 30, gameMorePlayed: "Counter Strike" },
  { name: "Pokimane", age: 27, gameMorePlayed: "Valorant" },
  { name: "Ninja", age: 34, gameMorePlayed: "Fortnite" },
  { name: "xQc", age: 27, gameMorePlayed: "Overwatch" },
  { name: "ElMariana", age: 25, gameMorePlayed: "Minecraft" },
  { name: "Loserfruit", age: 30, gameMorePlayed: "Fortnite" },
  { name: "TommyInnit", age: 20, gameMorePlayed: "Minecraft" },
  { name: "Nickmercs", age: 32, gameMorePlayed: "Call of Duty: Warzone" },
  { name: "Amouranth", age: 29, gameMorePlayed: "Just Chatting" },
];

const inputEl = document.getElementById("search");
const resultsContainerEl = document.getElementById("results");

// Creo componentes HTML en vez de mostrar por consola.
const createElements = (streamer) => {
  const streamerEl = document.createElement("DIV");
  const streamerNameEl = document.createElement("P");
  const streamerAgeEl = document.createElement("P");
  const streamerGameEl = document.createElement("P");

  streamerNameEl.textContent = `Name: ${streamer.name}`;
  streamerAgeEl.textContent = `Age: ${streamer.age}`;
  streamerGameEl.textContent = `Most played game: ${streamer.gameMorePlayed}`;

  streamerEl.appendChild(streamerNameEl);
  streamerEl.appendChild(streamerAgeEl);
  streamerEl.appendChild(streamerGameEl);

  return streamerEl;
};

const printElements = (result) => {
  resultsContainerEl.innerHTML = "";

  // Verificamos que haya resultados
  if (result.length === 0) {
    resultsContainerEl.innerHTML = "No results";
    return;
  }

  result.forEach((el) => {
    const streamerEl = createElements(el);

    resultsContainerEl.insertAdjacentElement("beforeend", streamerEl);
  });
};

// La función reconocerá los nombres con mayuscula o minuscula
const search = (e) => {
  const inputValue = e.target.value.toLowerCase();
  const result = streamers.filter((el) =>
    el.name.toLowerCase().includes(inputValue)
  );
  printElements(result);
};

inputEl.addEventListener("input", search);
