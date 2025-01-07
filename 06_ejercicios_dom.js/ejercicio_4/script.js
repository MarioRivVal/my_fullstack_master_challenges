// OBSERVACIÓN: El nombre de las clases no son muy guapas, estan hechas solo para identificar los resultados

const bodyElement = document.body

// 4.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click

const btnClickEl = document.createElement("BUTTON");
btnClickEl.id = "btnToClick"
btnClickEl.textContent= "show event with click";

btnClickEl.addEventListener("click", (event)=>{
  console.log(event)
})

bodyElement.appendChild(btnClickEl)
// ---------------------------------------- //


// 4.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const focusEventEl = document.querySelector(".focus")

focusEventEl.addEventListener("focus", (e)=>{
  console.log(e.target.value)
})
// ---------------------------------------- //

// 4.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
const inputEventEl = document.querySelector(".value")

inputEventEl.addEventListener("input", (e)=>{
  console.log(e.target.value)
})
// ---------------------------------------- //


// 4.4 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los albums.
const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];



const ul_4_4 = document.createElement("UL");
ul_4_4.classList.add("ul_4_4");

albums.forEach((el) => {
  const li_4_4 = document.createElement("LI");
  li_4_4.classList.add("li_4_4");
  li_4_4.textContent = el;
  ul_4_4.appendChild(li_4_4);
});

bodyElement.appendChild(ul_4_4);