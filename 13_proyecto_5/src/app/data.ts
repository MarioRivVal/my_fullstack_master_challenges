import { User, AuthState, CategoryOption } from "../types";

const users: User[] = [
  {
    username: "mario",
    password: "1111",
    name: "Mario",
    surname: "Rivera",
    creditCardNum: "4763 6988 1256 0078",
    expireData: "2/30",
    cvv: "069",
    currency: "EUR",
    location: "es-ES",

    transactions: [
      {
        category: "Salary",
        type: "income",
        date: "2025-01-15T08:00:00.000Z",
        amount: 2500,
      },
      {
        category: "Food",
        type: "expense",
        date: "2025-01-20T13:00:00.000Z",
        amount: -120.2,
      },
      {
        category: "Bars",
        type: "expense",
        date: "2025-02-05T22:45:00.000Z",
        amount: -60,
      },
      {
        category: "Gift",
        type: "income",
        date: "2025-02-10T14:00:00.000Z",
        amount: 150.1,
      },
      {
        category: "Home",
        type: "expense",
        date: "2025-02-28T12:00:00.000Z",
        amount: -900,
      },
      {
        category: "Electricity",
        type: "expense",
        date: "2025-03-03T09:15:00.000Z",
        amount: -80.9,
      },
      {
        category: "Transport",
        type: "expense",
        date: "2025-03-08T18:30:00.000Z",
        amount: -40.6,
      },
    ],
  },
  {
    username: "ana",
    password: "2222",
    name: "Ana",
    surname: "Fernandez",
    creditCardNum: "3322 6880 3449 6000",
    cvv: "220",
    expireData: "4/27",
    currency: "GBP",
    location: "en-GB",
    transactions: [
      {
        category: "Salary",
        type: "income",
        date: "2025-01-10T06:00:00.000Z",
        amount: 2000,
      },
      {
        category: "Shop",
        type: "expense",
        date: "2025-01-15T20:15:00.000Z",
        amount: -180.56,
      },
      {
        category: "Gym",
        type: "expense",
        date: "2025-01-18T17:00:00.000Z",
        amount: -50,
      },
      {
        category: "Gift",
        type: "income",
        date: "2025-02-01T11:00:00.000Z",
        amount: 200.98,
      },
      {
        category: "Holidays",
        type: "expense",
        date: "2025-02-20T21:00:00.000Z",
        amount: -500,
      },
      {
        category: "Restaurant",
        type: "expense",
        date: "2025-03-01T10:00:00.000Z",
        amount: -300.21,
      },
      {
        category: "Car",
        type: "expense",
        date: "2025-03-05T23:00:00.000Z",
        amount: -90,
      },
    ],
  },
  {
    username: "steve",
    password: "3333",
    name: "Steve",
    surname: "Wrangler",
    creditCardNum: "9823 7722 0055 0078",
    cvv: "988",
    expireData: "8/28",
    currency: "USD",
    location: "en-US",

    transactions: [
      {
        category: "Salary",
        type: "income",
        date: "2025-01-02T09:00:00.000Z",
        amount: 3200.45,
      },
      {
        category: "restaurant",
        type: "expense",
        date: "2025-01-08T19:45:00.000Z",
        amount: -140,
      },
      {
        category: "health",
        type: "expense",
        date: "2025-01-09T08:15:00.000Z",
        amount: -120.7,
      },
      {
        category: "Bars",
        type: "expense",
        date: "2025-01-13T21:00:00.000Z",
        amount: -75,
      },
      {
        category: "Food",
        type: "expense",
        date: "2025-02-10T12:30:00.000Z",
        amount: -95,
      },
      {
        category: "studies",
        type: "expense",
        date: "2025-03-01T10:00:00.000Z",
        amount: -350.1,
      },
      {
        category: "water",
        type: "expense",
        date: "2025-03-10T13:00:00.000Z",
        amount: -25,
      },
    ],
  },
];

const state: AuthState = {
  currentUser: null,
};

export const categories: CategoryOption[] = [
  { value: "car", text: "Car" },
  { value: "transport", text: "Transport" },
  { value: "health", text: "Health" },
  { value: "bars", text: "Bars" },
  { value: "water", text: "Water" },
  { value: "gift", text: "Gift" },
  { value: "food", text: "Food" },
  { value: "holidays", text: "Holidays" },
  { value: "gym", text: "Gym" },
  { value: "restaurant", text: "Restaurant" },
  { value: "home", text: "Home" },
  { value: "studies", text: "Studies" },
  { value: "electricity", text: "Electricity" },
  { value: "shop", text: "Shop" },
];

export { users, state };
