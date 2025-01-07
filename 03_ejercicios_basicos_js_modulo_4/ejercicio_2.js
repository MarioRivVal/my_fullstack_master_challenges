// **************  2.1  ************** //

const jedi = { nombre: "Luke Skywalker", edad: 19 };

jedi.edad = 25;
console.log(jedi);

// **************  2.2  ************** //

const nombre = "Leia";
const apellido = "Organa";
const edad = 20;

console.log(
  "Soy " +
    nombre +
    " " +
    apellido +
    ", tengo " +
    edad +
    " años" +
    " y soy una princesa del Alderan."
);

// **************  2.3  ************** //
const sable1 = { nombre: "Shoto de Yoda", precio: 1500 };
const sable2 = { nombre: "Sable de Darth Vader", precio: 2000 };

const sumaTotal = sable1.precio + sable2.precio;
console.log(
  "El coste total de los sables de luz es: " + sumaTotal + "creditos"
);

// **************  2.4  ************** //

let precioBaseGlobal = 10000;
precioBaseGlobal = 25000;

const nave1 = { nombre: "Ala-X", precioBase: 50000, precioFinal: 60000 };
const nave2 = {
  nombre: "Halcón Milenario",
  precioBase: 70000,
  precioFinal: 80000,
};

nave1.precioFinal = precioBaseGlobal + nave1.precioBase;
nave2.precioFinal = precioBaseGlobal + nave2.precioBase;

console.log(nave1);
console.log(nave2);
