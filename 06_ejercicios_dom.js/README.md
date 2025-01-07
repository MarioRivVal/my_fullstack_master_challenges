# Practicando la manipulación del DOM

## Ejercicio 1

Dado el siguiente HTML:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <button class="showme">Pillame!</button>
    <h1 id="pillado">Aqui estoy 8)</h1>
    <p>Soy el power ranger Amarillo</p>
    <p>Soy el power ranger Rojo</p>
    <p>Soy el power ranger Azul</p>
    <p>Soy el power ranger Negro</p>
    <h4 class="pokemon">Bulbasaur</h4>
    <h4 class="pokemon">Charmander</h4>
    <h4 class="pokemon">Pikachu</h4>
    <h4 class="pokemon">Squirtle</h4>
    <span data-function="testMe">Batman</span>
    <span data-function="testMe">Robin</span>
    <span data-function="testMe">Rick</span>
    <span data-function="testMe">Morty</span>
  </body>
</html>
```

### Requisitos:

- **1.1** Usa querySelector para mostrar por consola el botón con la clase
  .showme

- **1.2** Usa querySelector para mostrar por consola el h1 con el id #pillado

- **1.3** Usa querySelector para mostrar por consola todos los p

- **1.4** Usa querySelector para mostrar por consola todos los elementos con la
  clase.pokemon

- **1.5** Usa querySelector para mostrar por consola todos los elementos con el
  atributo data-function="testMe".

- **1.6** Usa querySelector para mostrar por consola el 3 personaje con el
  atributo data-function="testMe".

---

## Ejercicio 2

Dato el siguiente HTML:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h2 class="fn-insert-here"></h2>
    <p class="fn-remove-me">Eliminame!</p>
    <p>No me elimines!</p>
    <p>No me elimines!</p>
    <p class="fn-remove-me">Eliminame!</p>
    <p>No me elimines!</p>
    <p class="fn-remove-me">Eliminame!</p>
    <p class="fn-remove-me">Eliminame!</p>
    <p>No me elimines!</p>
    <div></div>
    <div></div>
    <div class="fn-insert-here"></div>
    <div class="fn-insert-here"></div>
  </body>
</html>
```

### Requisitos:

- **2.1** Inserta dinamicamente en un html un div vacio con javascript.

- **2.2** Inserta dinamicamente en un html un div que contenga una p con
  javascript.

- **2.3** Inserta dinamicamente en un html un div que contenga 6 p utilizando un
  loop con javascript.

- **2.4** Inserta dinamicamente con javascript en un html una p con el texto
  'Soy dinámico!'.

- **2.5** Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba
  dub dub'.

- **2.6** Basandote en el siguiente array crea una lista ul > li con los textos
  del array.

```javascript
const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];
```

- **2.7** Elimina todos los nodos que tengan la clase .fn-remove-me

- **2.8** Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda
  que no solo puedes insertar elementos con .appendChild.

- **2.9** Inserta p con el texto 'Voy dentro!', dentro de todos los div con la
  clase .fn-insert-here

---

## Ejercicio 3

Dado el siguiente HTML:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="script.js" defer></script>
    <title>Document</title>
  </head>
  <body>
    <p class="fn-remove-me">Bye bye</p>
    <div data-function="printHere"></div>
  </body>
</html>
```

### Requisitos:

- **1.1** Basandote en el array siguiente, crea una lista ul > li dinámicamente
  en el html que imprima cada uno de los paises.

```javascript
const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];
```

- **1.2** Elimina el elemento que tenga la clase .fn-remove-me.

- **1.3** Utiliza el array para crear dinamicamente una lista ul > li de
  elementos en el div de html con el atributo data-function="printHere".

```javascript
const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];
```

- **1.4** Crea dinamicamente en el html una serie de divs que contenga un
  elemento h4 para el titulo y otro elemento img para la imagen.

```javascript
const countries = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];
```

- **1.5** Basandote en el ejercicio anterior. Crea un botón que elimine el
  último elemento de la serie de divs.

- **1.6** Basandote en el ejercicio anterior. Crea un botón para cada uno de los
  divs que elimine ese mismo elemento del html.

---

## Ejercicio 4

Dado el siguiente HTML:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <input class="click" type="text" />
    <input class="focus" type="text" />
    <input class="value" type="text" />
  </body>
</html>
```

### Requisitos:

- **1.1** Añade un botón a tu html con el id btnToClick y en tu javascript añade
  el evento click que ejecute un console log con la información del evento del
  click

- **1.2** Añade un evento 'focus' que ejecute un console.log con el valor del
  input.

- **1.3** Añade un evento 'input' que ejecute un console.log con el valor del
  input.

- **1.4** Basandote en el array siguiente, crea una lista ul > li dinámicamente
  en el html que imprima cada uno de los albums.

```javascript
const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];
```
