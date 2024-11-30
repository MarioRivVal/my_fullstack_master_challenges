// **************  6.1  ************** //
console.log("6.1");
for (let i = 0; i <= 9; i++) {
  console.log(i);
}

// **************  6.2  ************** //
console.log("6.2");
for (let i = 0; i <= 9; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// **************  6.3  ************** //
console.log("6.3");
for (let i = 1; i <= 10; i++) {
  let frase = "Intentando dormir 🐑";
  if (i == 10) {
    console.log(i + ": " + "Dormido!");
  } else {
    console.log(i + ": " + frase);
  }
}
