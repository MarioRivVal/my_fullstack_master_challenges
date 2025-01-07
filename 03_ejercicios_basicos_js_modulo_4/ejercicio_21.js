const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
];

let underEighteen = [];
let overEighteen = [];

for (const user of users) {
  if (user.years >= 18) {
    overEighteen.push(user);
  } else {
    underEighteen.push(user);
  }
}

console.log(underEighteen);
console.log(overEighteen);
