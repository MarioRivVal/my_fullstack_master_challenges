import { messagePage } from "../pages/messagePage";
import { signupPage } from "../pages/signupPage";
import { infoPage } from "../pages/infoPage";
import { getUserLocale, getUserCurrency } from "../utils/userLocation";
import {
  generateCreditCardNumber,
  generateCCV,
  generateUsername,
} from "../services/signupServices";
import { users } from "./data";

export const signup = (e: Event) => {
  const target = e.target as HTMLFormElement;
  const formData = new FormData(target);
  const name = formData.get("name") as string;
  const surname = formData.get("surname") as string;
  const password = formData.get("password") as string;

  if (password.length > 4) {
    messagePage("alert", "Password must to be only 4 digits", signupPage);
    return;
  } else if (password.length < 4) {
    messagePage("alert", "Password must to be at least 4 digits", signupPage);
    return;
  }

  const username = generateUsername(name, surname);
  console.log(username);

  users.push({
    username,
    password,
    name,
    surname,
    creditCardNum: generateCreditCardNumber(),
    cvv: generateCCV(),
    expireData: "7/30",
    currency: getUserCurrency(),
    location: getUserLocale(),
    transactions: [],
  });

  messagePage(
    "success",
    `Account created.<br>Username: ${username}<br>Password: ${password}`,
    infoPage
  );
};
