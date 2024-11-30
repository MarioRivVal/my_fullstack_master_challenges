const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];

// **************  4.1  ************** //
console.log("4.1");
console.log(aldeanos[3]);

// **************  4.2  ************** //
console.log("4.2");
aldeanos.push("Cervasio");
console.log(aldeanos);

// **************  4.3  ************** //
console.log("4.3");
aldeanos.shift();
aldeanos.unshift("Bambina");
console.log(aldeanos);

// **************  4.4  ************** //
console.log("4.4");
aldeanos.reverse();
console.log(aldeanos);

// **************  4.5  ************** //
console.log("4.5");
let narcisoIndex = aldeanos.indexOf("Narciso");
aldeanos.splice(narcisoIndex, 1, "Canela");
console.log(aldeanos);

// **************  4.6  ************** //
console.log("4.6");
console.log(aldeanos[aldeanos.length - 1]);
