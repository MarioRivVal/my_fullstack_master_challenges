import { getRandomNumber } from "../utils/getRandomNumber";

export const generateCreditCardNumber = (): string => {
  let number = [];

  for (let i = 0; i < 4; i++) {
    number.push(getRandomNumber(9999, 4));
  }
  return number.join(" ");
};

export const generateCCV = (): string => {
  return getRandomNumber(99, 3);
};

export const generateUsername = (name: string, surname: string): string => {
  let username = [];

  username.push(name.slice(0, 2).toLocaleLowerCase());
  username.push(surname.slice(0, 2).toLocaleLowerCase());

  return username.join("");
};
