const capitals = {
  Spain: "Madrid",
  France: "Paris",
  Italy: "Rome",
  Germany: "Berlin",
  Portugal: "Lisbon",
  Poland: "Warsaw",
  Greece: "Athens",
  Austria: "Vienna",
  Hungary: "Budapest",
  Ireland: "Dublin",
};

function getCapital(country) {
  for (const [key, value] of Object.entries(capitals)) {
    if (key === country) {
      return value;
    } else {
      return "This country does not exist";
    }
  }
}

console.log(getCapital("Irelan"));

// --------------------------------- //
// USANDO UNA FUNCION QUE DINAMICAMENTE CREA UNA STRING COMO RESULTADO

const countries = {
  Spain: {
    capital: "Madrid",
    continent: "Europe",
    area: 505990,
    population: 47450795,
  },
  France: {
    capital: "Paris",
    continent: "Europe",
    area: 551695,
    population: 65426179,
  },
  Italy: {
    capital: "Rome",
    continent: "Europe",
    area: 301340,
    population: 58853482,
  },
  Germany: {
    capital: "Berlin",
    continent: "Europe",
    area: 357022,
    population: 83883596,
  },
  Portugal: {
    capital: "Lisbon",
    continent: "Europe",
    area: 92212,
    population: 10295909,
  },
  Poland: {
    capital: "Warsaw",
    continent: "Europe",
    area: 312696,
    population: 37958138,
  },
  USA: {
    capital: "Washington D.C.",
    continent: "North America",
    area: 9833520,
    population: 331893745,
  },
  Japan: {
    capital: "Tokyo",
    continent: "Asia",
    area: 377975,
    population: 125813000,
  },
  Brazil: {
    capital: "Brasilia",
    continent: "South America",
    area: 8515767,
    population: 216469807,
  },
  SouthAfrica: {
    capital: "Pretoria",
    continent: "Africa",
    area: 1219090,
    population: 60041996,
  },
  India: {
    capital: "New Delhi",
    continent: "Asia",
    area: 3287263,
    population: 1439323776,
  },
  Australia: {
    capital: "Canberra",
    continent: "Oceania",
    area: 7692024,
    population: 26228246,
  },
  Canada: {
    capital: "Ottawa",
    continent: "North America",
    area: 9984670,
    population: 38834594,
  },
  Argentina: {
    capital: "Buenos Aires",
    continent: "South America",
    area: 2780400,
    population: 46736799,
  },
  Egypt: {
    capital: "Cairo",
    continent: "Africa",
    area: 1002450,
    population: 105894098,
  },
  SouthKorea: {
    capital: "Seoul",
    continent: "Asia",
    area: 100210,
    population: 51940660,
  },
};

const myFunction = function (country) {
  let string = `\n${country} does not exist as a country`;

  Object.entries(countries).forEach(([key, value]) => {
    if (key === country) {
      const { continent, capital, area, population } = value;
      string = `
      ${country} is located in ${continent},
      its capital is ${capital},
      it has an area of ${area.toLocaleString()} km\u00B2
      and a population of ${population.toLocaleString()} inhabitants`;
    }
  });

  return string;
};

console.log(`
----------------------------------
\nUSANDO FUNCION UTILIZANDO UN .forEach(),
DESTRUCTURACIÓN DE UN OBJETO
Y RETORNADO DINAMICAMENTE UNA STRING
----------------------------------
`);
console.log(myFunction("Argentina"));
console.log(myFunction("Spain"));
console.log(myFunction("netneo"));
