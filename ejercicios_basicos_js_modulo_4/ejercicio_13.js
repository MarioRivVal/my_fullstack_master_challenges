const names = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xavier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];
function nameFinder(nameList, string) {
  let exist = false;

  for (let i = 0; i < nameList.length; i++) {
    if (nameList[i] == string) {
      exist = true;
      break;
    }
  }

  return exist;
}
console.log(nameFinder(names, "Steve"));

// ---------------------------------------//
// USANDO EL METODO some() QUE DEVUELVE UN true O false:

const nameFinderTwo = (nameList, string) => {
  return nameList.some((element) => element == string);
};
console.log(nameFinderTwo(names, "Natasha"));
console.log(nameFinderTwo(names, "Mario"));
