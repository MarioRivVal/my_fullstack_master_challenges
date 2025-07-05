type User = {
  username: string;
  password: string;
  name: string;
  surname: string;
  creditCardNum: string;
  expireData: string;
  cvv: string;
  currency: string;
  location: string;
};

type AuthState = {
  currentUser: User | null;
};

const users: User[] = [
  {
    username: "mario",
    password: "1111",
    name: "Mario",
    surname: "Rivera",
    creditCardNum: "4763 6988 1256 0078",
    expireData: "2/30",
    cvv: "069",
    currency: "USD",
    location: "en-US",
  },
  {
    username: "ana",
    password: "2222",
    name: "Ana",
    surname: "Fernandez",
    creditCardNum: "3322 6880 3449 6000",
    cvv: "220",
    expireData: "4/27",
    currency: "AUD",
    location: "en-AU",
  },
  {
    username: "steve",
    password: "3333",
    name: "Steve",
    surname: "Wrangler",
    creditCardNum: "9823 7722 0055 0078",
    cvv: "988",
    expireData: "8/28",
    currency: "EUR",
    location: "es-ES",
  },
];

const state: AuthState = {
  currentUser: null,
};

export { users, state };
