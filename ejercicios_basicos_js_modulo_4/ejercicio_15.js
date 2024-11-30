const products = [
  "Camiseta de Metallica",
  "Pantalón vaquero",
  "Gorra de beisbol",
  "Camiseta de Basket",
  "Cinturón de Orión",
  "AC/DC Camiseta",
];

let productCamisetas = [];

for (const product of products) {
  if (product.includes("Camiseta")) {
    productCamisetas.push(product);
  }
}
const mesagge = `Los valores que contienes "Camiseta" son: ${productCamisetas.join(
  ", "
)}`;
console.log(mesagge);
