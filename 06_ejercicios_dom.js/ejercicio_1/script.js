// Usa querySelector para mostrar por consola el botón con la clase .showme
const elementoBoton = document.querySelector(".showme");

// Usa querySelector para mostrar por consola el h1 con el id #pillado
const elementoH1 = document.getElementById("pillado");

// Usa querySelector para mostrar por consola todos los p
const todosLosP = document.getElementsByTagName("p");

// Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
const todasClasesPokemon = document.getElementsByClassName("pokemon");

// Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".
const todosAtributoTestme = document.querySelectorAll(
  '[data-function="testMe"]'
);

console.log(elementoBoton);
console.log(elementoH1);
console.log(todosLosP);
console.log(todasClasesPokemon);
console.log(todosAtributoTestme);

// Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe".
console.log(todosAtributoTestme[2].textContent);
