const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Spiderman",
  "Captain A.",
  "Captain M.",
];

function findLongestWord(stringList) {
  let longestWord = "";

  for (const word of stringList) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  console.log(`${longestWord} tiene ${longestWord.length} letras`);
}

findLongestWord(avengers);
