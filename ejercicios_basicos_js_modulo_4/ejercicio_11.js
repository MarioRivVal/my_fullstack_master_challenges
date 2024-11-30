const mixedElements = [
  6,
  1,
  "Marvel",
  1,
  "hamburguesa",
  "10",
  "Prometeo",
  8,
  "Hola mundo",
];

function averageWord(list) {
  let suma = 0;
  let average = 0;

  for (const element of list) {
    if (typeof element === "number") {
      suma += element;
    } else {
      suma += element.length;
    }
  }

  average = +(suma / list.length).toFixed(2);

  return average;
}
console.log(averageWord(mixedElements));
