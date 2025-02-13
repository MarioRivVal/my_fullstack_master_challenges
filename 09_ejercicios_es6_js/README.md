## Ejercicio 1

- **1.1** En base al siguiente javascript, crea variables en base a las
  propiedades del objeto usando object destructuring e imprimelas por consola.
  Cuidado, no hace falta hacer destructuring del array, solo del objeto.

```javascript
const game = {
  title: "The last us 2",
  gender: ["action", "zombie", "survival"],
  year: 2020,
};
```

- **1.2** En base al siguiente javascript, usa destructuring para crear 3
  variables llamadas fruit1, fruit2 y fruit3, con los valores del array.
  Posteriormente imprimelo por consola.

```javascript
const fruits = ["Banana", "Strawberry", "Orange"];
```

- **1.3** En base al siguiente javascript, usa destructuring para crear 2
  variables igualandolo a la función e imprimiendolo por consola.

```javascript
const animalFunction = () => {
  return { name: "Bengal Tiger", race: "Tiger" };
};
```

- **1.4** En base al siguiente javascript, usa destructuring para crear las
  variables name y itv con sus respectivos valores. Posteriormente crea 3
  variables usando igualmente el destructuring para cada uno de los años y
  comprueba que todo esta bien imprimiendolo.

```javascript
const car = { name: "Mazda 6", itv: [2015, 2011, 2020] };
```

<hr style="border: 1px solid #136AC7;" />

## Ejercicio 2

2.1 Dado el siguiente array, crea una copia usando spread operators.

```javascript
const pointsList = [32, 54, 21, 64, 75, 43];
```

2.2 Dado el siguiente objeto, crea una copia usando spread operators.

```javascript
const toy = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };
```

2.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando spread
operatos.

```javascript
const pointsList = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54, 87, 99, 65, 32];
```

2.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos con
spread operators.

```javascript
const toy = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };
const toyUpdate = { lights: "rgb", power: ["Volar like a dragon", "MoonWalk"] };
```

2.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 pero
sin editar el array inicial. De nuevo, usando spread operatos.

```javascript
const colors = ["rojo", "azul", "amarillo", "verde", "naranja"];
```

<hr style="border: 1px solid #136AC7;" />

## Ejercicio 3

3.1 Dado el siguiente array, devuelve un array con sus nombres utilizando
.map().

```javascript
const users = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];
```

3.2 Dado el siguiente array, devuelve una lista que contenga los valores de la
propiedad .name y cambia el nombre a 'Anacleto' en caso de que empiece por 'A'.

```javascript
const users = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];
```

3.3 Dado el siguiente array, devuelve una lista que contenga los valores de la
propiedad .name y añade al valor de .name el string ' (Visitado)' cuando el
valor de la propiedad isVisited = true.

```javascript
const cities = [
  { isVisited: true, name: "Tokyo" },
  { isVisited: false, name: "Madagascar" },
  { isVisited: true, name: "Amsterdam" },
  { isVisited: false, name: "Seul" },
];
```

<hr style="border: 1px solid #136AC7;" />

## Ejercicio 4

4.1 Dado el siguiente array, utiliza `.filter()` para generar un nuevo array con
los valores que sean mayor que 18

```javascript
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
```

4.2 Dado el siguiente array, utiliza `.filter()` para generar un nuevo array con
los valores que sean par.

```javascript
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
```

4.3 Dado el siguiente array, utiliza `.filter()` para generar un nuevo array con
los streamers que tengan el `gameMorePlayed = 'League of Legends'`.

```javascript
const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];
```

4.4 Dado el siguiente array, utiliza `.filter()` para generar un nuevo array con
los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos
usar la funcion `.includes()` para la comprobación.

```javascript
const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];
```

4.5 utiliza `.filter()` para generar un nuevo array con los streamers que
incluyan el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos
usar la funcion `.includes()` para la comprobación. Además, pon el valor de la
propiedad .gameMorePlayed a MAYUSCULAS cuando .age sea mayor que 35.

<hr style="border: 1px solid #136AC7;" />

## Ejercicio 5

Dado el siguiente HTML (recuerda enlazar JS)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
    />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>
  <body>
    <input type="text" data-function="toFilterStreamers" />
  </body>
</html>
```

Utiliza `.filter()` para mostrar por consola los streamers que incluyan la
palabra introducida en el input. De esta forma, si introduzco 'Ru' me deberia de
mostrar solo el streamer 'Rubius'. Si introduzco 'i', me deberia de mostrar el
streamer 'Rubius' e 'Ibai'.

```javascript
const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];
```

<hr style="border: 1px solid #136AC7;" />

## Ejercicio 6

6.1 Dado el siguiente array, haz una suma de todos las notas de los examenes de
los alumnos usando la función `.reduce()`.

```javascript
const exams = [
  { name: "Yuyu Cabeza Crack", score: 5 },
  { name: "Maria Aranda Jimenez", score: 1 },
  { name: "Cristóbal Martínez Lorenzo", score: 6 },
  { name: "Mercedez Regrera Brito", score: 7 },
  { name: "Pamela Anderson", score: 3 },
  { name: "Enrique Perez Lijó", score: 6 },
  { name: "Pedro Benitez Pacheco", score: 8 },
  { name: "Ayumi Hamasaki", score: 4 },
  { name: "Robert Kiyosaki", score: 2 },
  { name: "Keanu Reeves", score: 10 },
];
```

6.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los
alumnos que esten aprobados usando la función `.reduce()`.

6.3 Dado el mismo array, haz la media de las notas de todos los examenes
`.reduce()`.

<hr style="border: 1px solid #136AC7;" />

## Ejercicio 7

7.1 Dado el siguiente javascript filtra los videojuegos por `gender = 'RPG'` usando `.filter()` y usa `.reduce()` para conseguir la media de sus `.score`. 
La función `.find()` también podría ayudarte para el contrar el genero 'RPG' en el array `.gender`.

```javascript
const videogames = [
    {name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5},
    {name: 'Assasins Creed Valhala', genders: ['Aventura', 'RPG'], score: 4.5},
    {name: 'The last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8},
    {name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5},
    {name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5},
    {name: 'Legend of Zelda: Breath of the wild', genders: ['RPG'], score: 10},
]
```