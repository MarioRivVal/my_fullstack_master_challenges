const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

function findArrayIndex(array, text) {
  let indexPosition;
  array.forEach((el, index) => {
    if (el === text) {
      indexPosition = index;
    }
  });

  return indexPosition;
}

// ---------------------------------- //
function removeItem(array, text) {
  const indexPosition = findArrayIndex(array, text);

  // De esta manera alteramos el array original
  array.splice(indexPosition, 1);

  return array;
}

console.log(`
\n--------------------------
SOLUCIÓN COMO SOLICITADO
--------------------------
`);
console.log(removeItem(mainCharacters, "Anakin"));
console.log(removeItem(mainCharacters, "Han Solo"));

// ---------------------------------------------------------//
// USANDO metodo Array.filter()  //
// -------------------------------------------------------- //

function removeItem2(arr, str) {
  return arr.filter((el) => el != str);
}

console.log(`
\n--------------------------------------------------------
USANDO MWETODO Array.filter()
--------------------------------------------------------
`);
console.log(removeItem2(mainCharacters, "Luke"));
