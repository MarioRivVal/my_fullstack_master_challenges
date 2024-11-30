const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];
function removeDuplicates(list) {
  let newArray = [];

  for (const el of list) {
    if (!newArray.includes(el)) {
      newArray.push(el);
    }
  }

  return newArray;
}

console.log(removeDuplicates(duplicates));
