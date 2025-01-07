
// OBSERVACIÓN: El nombre de las clases no son muy guapas, estan hechas solo para identificar los resultados

const bodyElement = document.body;

// 3.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.
const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];

const ul_3_1 = document.createElement("UL");
ul_3_1.classList.add("ul_3_1");

countries.forEach((el) => {
  const li_3_1 = document.createElement("LI");
  li_3_1.classList.add("li_3_1");
  li_3_1.textContent = el;
  ul_3_1.appendChild(li_3_1);
});

bodyElement.appendChild(ul_3_1);
// ---------------------------------------- //

// 3.2 Elimina el elemento que tenga la clase .fn-remove-me.
document.querySelector(".fn-remove-me").remove();
// ---------------------------------------- //

// 3.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];

const ul_3_3 = document.createElement("UL");
ul_3_3.classList.add("ul_3_3");

cars.forEach((el) => {
  const li_3_3 = document.createElement("LI");
  li_3_3.classList.add("li_3_3");
  li_3_3.textContent = el;
  ul_3_3.appendChild(li_3_3);
});

document
  .querySelector('[data-function="printHere"]')
  .insertAdjacentElement("afterbegin", ul_3_3);
// ---------------------------------------- //

// 3.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.
const countriesImgs = [
  { title: "Random title-1", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title-2", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title-3", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title-4", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title-5", imgUrl: "https://picsum.photos/300/200?random=5" },
];

const imgBox_3_4 = document.createElement("DIV");
imgBox_3_4.classList.add("imgBox_3_4");

countriesImgs.forEach((el) => {
  const divImg_3_4 = document.createElement("DIV");
  divImg_3_4.classList.add("divImg_3_4");

  const h4_3_4 = document.createElement("H4");
  h4_3_4.textContent = el.title;

  const img_3_4 = document.createElement("IMG");
  img_3_4.src = el.imgUrl;
  img_3_4.alt = el.title;

  divImg_3_4.insertAdjacentElement("beforeend", h4_3_4);
  divImg_3_4.insertAdjacentElement("beforeend", img_3_4);

  imgBox_3_4.insertAdjacentElement("beforeend", divImg_3_4);
});

bodyElement.appendChild(imgBox_3_4);
// ---------------------------------------- //

// 3.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.
const deleteLastElement = function () {
  const lastChild = document.querySelector(".imgBox_3_4 > :last-child");
  if (lastChild) lastChild.remove();
};

const btnDeleteLastOne_3_5 = document.createElement("BUTTON");
btnDeleteLastOne_3_5.textContent = "Delete last img element ";
btnDeleteLastOne_3_5.addEventListener("click", deleteLastElement);

bodyElement.appendChild(btnDeleteLastOne_3_5);
// ---------------------------------------- //

// 3.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.

const deleteOwnBox = function (e) {
  const parentBox = e.target.closest(".divImg_3_4");
  parentBox.remove();
};

const allImgBoxes = document.querySelectorAll(".divImg_3_4");

allImgBoxes.forEach((el) => {
  const btnDeleteMyImgBox = document.createElement("BUTTON");
  btnDeleteMyImgBox.textContent = "Delete my own img box";
  el.appendChild(btnDeleteMyImgBox);
  el.onclick = deleteOwnBox;
});
