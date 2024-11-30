const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

let veganFood = [];

for (const food of foodSchedule) {
  if (food.isVegan == true) {
    veganFood.push(food);
  }
}
for (const fruit of fruits) {
  veganFood = [...veganFood, { name: fruit, isVegan: true }];
}

console.log(veganFood);

// Espero haber entendido bien el ejercicio.
