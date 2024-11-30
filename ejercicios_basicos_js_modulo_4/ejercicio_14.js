const words = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
];
function repeatCounter(list) {
  let countWords = {};

  list.forEach((element) => {
    if (countWords[element]) {
      countWords[element] += 1;
    } else {
      countWords[element] = 1;
    }
  });
  console.log(countWords);
}

repeatCounter(words);

// -------------------------------------- //
// USANDO EL OPERADOR TERNARIO (? :):
function repeatCounterTwo(list) {
  let countWords = {};
  let message;

  list.forEach((element) => {
    countWords[element]
      ? (countWords[element] += 1)
      : (countWords[element] = 1);
  });

  console.log(countWords);
}

repeatCounterTwo(words);
