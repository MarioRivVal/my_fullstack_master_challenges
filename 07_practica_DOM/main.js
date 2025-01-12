const destinations = [
  {
    link: "https://visitarvenecia.es/",
    img: "venice",
    score: 4.8,
    city: "Venezia",
    country: "Italy",
    price: 4150,
  },
  {
    link: "https://www.traveler.es/viajes-urbanos/articulos/cosas-que-hacer-en-la-habana-cuba-una-vez-en-la-vida/9097",
    img: "habana",
    score: 4.6,
    city: "La Habana",
    country: "Cuba",
    price: 4300,
  },
  {
    link: "https://www.atenas.net/",
    img: "athens",
    score: 4.8,
    city: "Athene",
    country: "Grece",
    price: 3400,
  },
  {
    link: "https://www.visitnorway.es/que-ver-en-noruega/noruega-de-los-fiordos/bergen/",
    img: "bergen",
    score: 4.9,
    city: "Bergen",
    country: "Norway",
    price: 5200,
  },
  {
    link: "https://www.disfrutaroma.com/",
    img: "rome",
    score: 4.7,
    city: "Rome",
    country: "Italy",
    price: 4670,
  },
  {
    link: "https://www.viajeroscallejeros.com/lugares-que-ver-en-dubai/",
    img: "dubai",
    score: 4.8,
    city: "Dubai",
    country: "Emirates",
    price: 4200,
  },
  {
    link: "https://www.disfrutaflorencia.com/que-ver",
    img: "florence",
    score: 4.6,
    city: "Florence",
    country: "Italy",
    price: 3780,
  },
  {
    link: "https://www.paris.es/que-ver",
    img: "paris",
    score: 4.5,
    city: "Paris",
    country: "France",
    price: 4100,
  },
  {
    link: "https://www.viajeroscallejeros.com/que-ver-en-kenia/",
    img: "kenya",
    score: 4.8,
    city: "Nairobi",
    country: "Kenya",
    price: 4380,
  },
];

// --------------------------------------- //

const currentYearEl = document.getElementById("currentYear");
const popularDestinationsEl = document.querySelector(".popular__destinations");

// --------------------------------------- //

const getYear = function () {
  return new Date().getFullYear();
};

const buildElementScore = function (score) {
  const scoreEl = document.createElement("P");
  scoreEl.classList.add("card-score");
  scoreEl.textContent = score;

  return scoreEl;
};

const buildElementLocation = function (city, country, price) {
  const cardLocationEl = document.createElement("DIV");
  cardLocationEl.classList.add("card-location");

  const locationEl = document.createElement("P");
  locationEl.textContent = " - ";

  const cityEl = document.createElement("SPAN");
  cityEl.id = "popular__location__city";
  cityEl.textContent = city;

  const countryEl = document.createElement("SPAN");
  countryEl.id = "popular__location__country";
  countryEl.textContent = country;

  locationEl.insertAdjacentElement("afterbegin", cityEl);
  locationEl.insertAdjacentElement("beforeend", countryEl);

  const currencyEl = document.createElement("P");
  currencyEl.textContent = "€";

  const priceEl = document.createElement("SPAN");
  priceEl.id = "popular__location__price";
  priceEl.textContent = price;

  currencyEl.appendChild(priceEl);

  cardLocationEl.append(locationEl, currencyEl);

  return cardLocationEl;
};

// Quise experimentar con Object.assign()
const buildElementAnchor = (link) =>
  Object.assign(document.createElement("A"), {
    href: link,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "card",
  });

const buildElementImage = (img, city) =>
  Object.assign(document.createElement("IMG"), {
    className: "card-img",
    src: `src/img/tours/${img}.webp`,
    alt: `${city}'s picture`,
  });

// ---------------------------------------- //
currentYearEl.textContent = getYear();

const fragment = document.createDocumentFragment();

destinations.forEach((el) => {
  const { img, city, country, link, price, score } = el;

  const container = buildElementAnchor(link);

  container.append(
    buildElementImage(img, city),
    buildElementScore(score),
    buildElementLocation(city, country, price)
  );

  fragment.appendChild(container);
});

popularDestinationsEl.appendChild(fragment);
