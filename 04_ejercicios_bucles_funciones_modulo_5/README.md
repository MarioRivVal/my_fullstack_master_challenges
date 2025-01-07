# 🖊️Ejercicios Bucles y Funciones

## Ejercicio 1

Utiliza un bucle para filtrar personajes de Star Wars por la especie "Human" y
guárdalos en un nuevo array llamado humanCharacters.

Imprime este nuevo array por consola.

```javascript
const characters = [
  { name: "Luke Skywalker", species: "Human" },
  { name: "Darth Vader", species: "Human" },
  { name: "Chewbacca", species: "Wookiee" },
  { name: "Leia Organa", species: "Human" },
  { name: "R2-D2", species: "Droid" },
  { name: "C-3PO", species: "Droid" },
  { name: "Obi-Wan Kenobi", species: "Human" },
  { name: "Yoda", species: "Unknown" },
  { name: "Han Solo", species: "Human" },
];
const humanCharacters = [];

// Añade tu código de bucle aquí
```

---

## Ejercicio 2

Dada una lista de películas, cuenta cuántas son de antes del año 2000 y cuántas
son posteriores, utilizando un bucle.

Imprime ambos conteos por consola.

```javascript
const movies = [
  { title: "The Matrix", releaseYear: 1999 },
  { title: "Star Wars: Episode IV – A New Hope", releaseYear: 1977 },
  { title: "Inception", releaseYear: 2010 },
  { title: "Jurassic Park", releaseYear: 1993 },
  { title: "The Shawshank Redemption", releaseYear: 1994 },
  { title: "Pulp Fiction", releaseYear: 1994 },
  { title: "Avatar", releaseYear: 2009 },
  { title: "The Dark Knight", releaseYear: 2008 },
  { title: "Fight Club", releaseYear: 1999 },
  { title: "Forrest Gump", releaseYear: 1994 },
];

// Añade tu código de bucle aquí
```

---

## Ejercicio 3

Filtra una lista de canciones para crear una playlist que solo contenga
canciones de rock que duren más de 5 minutos.

Utiliza un bucle para lograrlo e imprime la nueva playlist por consola.

```javascript
const songs = [
  { title: "Bohemian Rhapsody", genre: "Rock", duration: 5.55 },
  { title: "Stairway to Heaven", genre: "Rock", duration: 7.58 },
  { title: "Billie Jean", genre: "Pop", duration: 4.54 },
  { title: "Hotel California", genre: "Rock", duration: 6.31 },
  { title: "Sweet Child o Mine", genre: "Rock", duration: 5.56 },
  { title: "Smells Like Teen Spirit", genre: "Rock", duration: 5.01 },
  { title: "Comfortably Numb", genre: "Rock", duration: 6.23 },
  { title: "Wish You Were Here", genre: "Rock", duration: 5.34 },
  { title: "Black Dog", genre: "Rock", duration: 4.54 },
  { title: "Thunderstruck", genre: "Rock", duration: 4.52 },
  { title: "Crazy Love", genre: "Pop", duration: 3.52 },
];
const rockPlaylist = [];

// Añade tu código de bucle aquí
```

---

## Ejercicio 4

Utiliza un bucle para encontrar la serie de dibujos animados más antigua en el
array y guarda su nombre en una variable.

Imprime el nombre por consola.

```javascript
const cartoons = [
  { name: "Mickey Mouse", debut: 1928 },
  { name: "Bugs Bunny", debut: 1938 },
  { name: "SpongeBob SquarePants", debut: 1999 },
  { name: "Tom and Jerry", debut: 1940 },
  { name: "Scooby-Doo", debut: 1969 },
  { name: "The Flintstones", debut: 1960 },
  { name: "Batman: The Animated Series", debut: 1992 },
  { name: "The Simpsons", debut: 1989 },
  { name: "Pokémon", debut: 1997 },
  { name: "Dexter's Laboratory", debut: 1996 },
];

// Añade tu código de bucle aquí
```

---

## Ejercicio 5

Dada una lista de álbumes de música, utiliza un bucle para sumar todas las
duraciones solo de los álbumes de rock y luego imprime el total de estas
duraciones por consola

```javascript
const albums = [
  { title: "Led Zeppelin IV", genre: "Rock", duration: 42.19 },
  { title: "The Dark Side of the Moon", genre: "Rock", duration: 42.49 },
  { title: "Back in Black", genre: "Rock", duration: 42.11 },
  { title: "Hotel California", genre: "Rock", duration: 43.08 },
  { title: "Abbey Road", genre: "Rock", duration: 47.23 },
  { title: "Thriller", genre: "Pop", duration: 42.19 },
  { title: "A Night at the Opera", genre: "Rock", duration: 43.08 },
  { title: "The Wall", genre: "Rock", duration: 81.0 },
  { title: "Born to Run", genre: "Rock", duration: 39.26 },
  { title: "The Joshua Tree", genre: "Rock", duration: 50.11 },
];

// Añade tu código de bucle aquí
```

---

## Ejercicio 6

Agrupa las películas de Star Wars por década de lanzamiento en un objeto donde
las claves son las décadas y los valores son arrays de películas.

Utiliza bucles para lograrlo e imprime el objeto final por consola.

```javascript
const starWarsMovies = [
  { title: "A New Hope", releaseYear: 1977 },
  { title: "The Empire Strikes Back", releaseYear: 1980 },
  { title: "Return of the Jedi", releaseYear: 1983 },
  { title: "The Phantom Menace", releaseYear: 1999 },
  { title: "Attack of the Clones", releaseYear: 2002 },
  { title: "Revenge of the Sith", releaseYear: 2005 },
  { title: "The Force Awakens", releaseYear: 2015 },
  { title: "The Last Jedi", releaseYear: 2017 },
  { title: "The Rise of Skywalker", releaseYear: 2019 },
  { title: "Rogue One", releaseYear: 2016 },
  { title: "Solo", releaseYear: 2018 },
];

// Añade tu código de bucle aquí
```

---

## Ejercicio 7

Dada una lista de canciones, clasifícalas en un objeto donde las claves sean los
géneros y los valores sean arrays de canciones de ese género.

Utiliza bucles para estructurar este objeto e imprime el resultado por consola.

```javascript
const tracks = [
  { title: "Enter Sandman", genre: "Metal" },
  { title: "Back in Black", genre: "Rock" },
  { title: "Bohemian Rhapsody", genre: "Rock" },
  { title: "Blinding Lights", genre: "Pop" },
  { title: "Old Town Road", genre: "Country" },
  { title: "Smells Like Teen Spirit", genre: "Grunge" },
  { title: "Bad Guy", genre: "Pop" },
  { title: "Thunderstruck", genre: "Rock" },
  { title: "Hotel California", genre: "Rock" },
  { title: "Stairway to Heaven", genre: "Rock" },
];

// Añade tu código de bucle aquí
```

## Ejercicio 8

Dada una lista de artistas con sus influencias, utiliza bucles anidados para
listar todos los artistas y sus influencias directas e imprime cada par por
consola.

```javascript
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

// Añade tu código de bucle aquí
```

---

## Ejercicio 9

Crea una función que reciba un array de objetos representando a varios miembros
de los X-Men y su año de aparición. La función debe retornar el miembro más
antiguo.

Utiliza este array para probar tu función.

```javascript
const xMen = [
  { name: "Wolverine", year: 1974 },
  { name: "Cyclops", year: 1963 },
  { name: "Storm", year: 1975 },
  { name: "Phoenix", year: 1963 },
  { name: "Beast", year: 1963 },
  { name: "Gambit", year: 1990 },
  { name: "Nightcrawler", year: 1975 },
  { name: "Magneto", year: 1963 },
  { name: "Professor X", year: 1963 },
  { name: "Mystique", year: 1978 },
];

function findOldestXMen(xMen) {
  // insert code
}
```

---

## Ejercicio 10

Desarrolla una función que reciba un país por parámetro y devuelva su capital.

Utiliza un objeto para almacenar los países y sus capitales.

La función debe manejar casos en los que el país no esté en la lista,
devolviendo un mensaje adecuado.

```javascript
const capitals = {
  Spain: "Madrid",
  France: "Paris",
  Italy: "Rome",
  Germany: "Berlin",
  Portugal: "Lisbon",
  Poland: "Warsaw",
  Greece: "Athens",
  Austria: "Vienna",
  Hungary: "Budapest",
  Ireland: "Dublin",
};

function getCapital(country) {
  // insert code
}
```

---

## Ejercicio 11

Escribe una función que calcule el promedio de duración de una lista de
películas.

Recibe un array de películas, cada una con su duración en minutos.

La función debe devolver el promedio de duración de todas las películas.

```javascript
const movies = [
  { title: "Inception", duration: 148 },
  { title: "The Dark Knight", duration: 152 },
  { title: "Interstellar", duration: 169 },
  { title: "Dunkirk", duration: 106 },
  { title: "The Prestige", duration: 130 },
  { title: "Memento", duration: 113 },
  { title: "Batman Begins", duration: 140 },
  { title: "The Dark Knight Rises", duration: 164 },
  { title: "Tenet", duration: 150 },
  { title: "Insomnia", duration: 118 },
];

function averageMovieDuration(movies) {
  // insert code
}
```

---

## Ejercicio 12

Desarrolla una función que busque en un array de objetos representando mutantes
si existe alguno con un poder específico y retorne un mensaje indicando si fue
encontrado o no.

Considera el caso de múltiples mutantes con el mismo poder.

```javascript
const mutants = [
  { name: "Wolverine", power: "regeneration" },
  { name: "Magneto", power: "magnetism" },
  { name: "Professor X", power: "telepathy" },
  { name: "Jean Grey", power: "telekinesis" },
  { name: "Rogue", power: "power absorption" },
  { name: "Storm", power: "weather manipulation" },
  { name: "Mystique", power: "shape-shifting" },
  { name: "Beast", power: "superhuman strength" },
  { name: "Colossus", power: "steel skin" },
  { name: "Nightcrawler", power: "teleportation" },
];

function findMutantByPower(mutants, power) {
  // insert code
}
```

---

## Ejercicio 13

Crea una función que, dada una lista de actores con su año de nacimiento,
calcule su edad actual y retorne un nuevo array con los nombres de los actores y
sus edades.

Averigua como hallar el año actual en tus cálculos.

```javascript
const actors = [
  { name: "Leonardo DiCaprio", born: 1974 },
  { name: "Tom Hanks", born: 1956 },
  { name: "Meryl Streep", born: 1949 },
  { name: "Brad Pitt", born: 1963 },
  { name: "Johnny Depp", born: 1963 },
  { name: "Scarlett Johansson", born: 1984 },
  { name: "Jennifer Lawrence", born: 1990 },
  { name: "Denzel Washington", born: 1954 },
  { name: "Morgan Freeman", born: 1937 },
  { name: "Cate Blanchett", born: 1969 },
];

function calculateActorsAges(actors) {
  // insert code
}
```
