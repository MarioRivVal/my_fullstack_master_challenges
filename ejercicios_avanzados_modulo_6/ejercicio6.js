const programmingLanguages = [
  'JavaScript',
  'Python',
  'Java',
  'C#',
  'C++',
  'Ruby',
  'PHP',
  'Go',
  'Rust',
  'TypeScript'
];

const swap = function(arr, index1, index2){

  let [value1] = arr.splice(index1,1)
  let [value2] = arr.splice(index2,1)
 
  arr.splice(index2,0, value1)
  arr.splice(index1,0, value2)
  console.log(arr)

}

console.log(`
\n--------------------------
SOLUCIÓN POCO EFECTIVA
--------------------------
`);
swap(programmingLanguages, 2, 6)

// La solución anterior no llegó a convencerme y descubrí que el error que sucede con l alteración del array.
// al final encontré otra mejor opción que no conocia bien

const swap2 = function(arr, index1, index2){

  let temp = arr[index1]
  arr[index1]= arr[index2]
  arr[index2] = temp

  console.log(arr)

}

console.log(`
\n--------------------------
SOLUCIÓN MUCHO MÁS EFECTIVA
--------------------------
`);

swap2(programmingLanguages, 2, 6)

