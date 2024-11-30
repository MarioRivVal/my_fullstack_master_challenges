const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(numberList) {
  let suma = 0;

  for (const n of numberList) {
    suma += n;
  }
  console.log(suma);
}

sumNumbers(numbers);
