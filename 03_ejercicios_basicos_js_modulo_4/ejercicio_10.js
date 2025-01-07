const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(numberList) {
  let suma = 0;

  for (const n of numberList) {
    suma += n;
  }

  return +(suma / numberList.length).toFixed(2);
}

console.log(average(numbers));
