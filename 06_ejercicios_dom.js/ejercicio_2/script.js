// OBSERVACIÓN: El nombre de las clases no son muy guapas, estan hechas solo para identificar los resultados

const bodyElement = document.body;

// 2.1 Inserta dinamicamente en un html un div vacio con javascript.
const div_2_1 = document.createElement("DIV");
div_2_1.classList.add("div_2_1");

bodyElement.appendChild(div_2_1);
// ---------------------------------------- //

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const div_2_2 = document.createElement("DIV");
div_2_2.classList.add("div_2_2");

const p_2_2 = document.createElement("P");
p_2_2.classList.add("p_2_2");

div_2_2.appendChild(p_2_2);
bodyElement.appendChild(div_2_2);
// ---------------------------------------- //

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const div_2_3 = document.createElement("DIV");
div_2_3.classList.add("div_2_3");

for (let i = 0; i < 6; i++) {
  let p_2_3 = document.createElement("P");
  p_2_3.classList.add("p_2_3");

  div_2_3.appendChild(p_2_3);
}

bodyElement.appendChild(div_2_3);
// ---------------------------------------- //

// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'
const p_2_4 = document.createElement("P");
p_2_4.classList.add("p_2_4");

p_2_4.innerText = "Soy dinamico";

bodyElement.appendChild(p_2_4);
// ---------------------------------------- //

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const h2_2_5 = document.querySelector("h2.fn-insert-here");
h2_2_5.textContent = "Wubba Lubba dub dub";
// ---------------------------------------- //

// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];

// const ul_2_6 = document.createElement("UL");
// ul_2_6.classList.add("ul-2.6")

// for(const el of apps){
//   let li_2_6 = document.createElement("LI")
//   li_2_6.classList.add("li_2_6")
//   li_2_6.textContent = el
//   ul_2_6.appendChild(li_2_6)
// }

// bodyElement.appendChild(ul_2_6)

// Descubri despues que usar un "fragment" mejora el rendimiento, asi que he mejorado el codigo

const ul_2_6 = document.createElement("UL");
ul_2_6.classList.add("ul_2_6");

const fragment = document.createDocumentFragment();

for (const el of apps) {
  let li_2_6 = document.createElement("LI");
  li_2_6.classList.add("li_2_6");
  li_2_6.textContent = el;
  fragment.appendChild(li_2_6);
}

ul_2_6.appendChild(fragment);
bodyElement.appendChild(ul_2_6);
// ---------------------------------------- //

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const elementosParaRemover = document.querySelectorAll(".fn-remove-me");

elementosParaRemover.forEach((el) => el.remove());
// ---------------------------------------- //

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.
const p_2_8 = document.createElement("P");
p_2_8.classList.add("p_2_8");
p_2_8.textContent = "Voy en medio";

document
  .querySelector("div.fn-insert-here")
  .insertAdjacentElement("afterend", p_2_8);
// ---------------------------------------- //

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase	.fn-insert-here
const p_2_9 = document.createElement("P");
p_2_9.classList.add("p_2_9");
p_2_9.textContent = "Voy dentro";

// document
//   .querySelectorAll("div.fn-insert-here")
//   .forEach((el) => el.insertAdjacentElement("afterbegin", p_2_9));

// Interesante resultado: Descubri que un nodo no puede existir simultanemante en mas lugares en el DOM, las soluciones son multiplas pero la más recomendada es clonar el nodo.

document
  .querySelectorAll("div.fn-insert-here")
  .forEach((el) =>
    el.insertAdjacentElement("afterbegin", p_2_9.cloneNode(true))
  );
