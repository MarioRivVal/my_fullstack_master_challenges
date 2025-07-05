import { messagePage } from "../pages/messagePage";
import { loginPage } from "../pages/loginPage";
import { homePage } from "../pages/homePage";
import { users, state } from "./data";

export const login = (e: Event) => {
  const target = e.target as HTMLFormElement | null;

  if (target) {
    const formData = new FormData(target);
    const formValues = Object.fromEntries(formData.entries());

    const foundUser = users.find(
      (user) =>
        user.username === formValues.username &&
        user.password === formValues.password
    );

    if (!foundUser) {
      messagePage("alert", "The user or password is incorrect", loginPage);
      console.log("user o password equivocados");
      state.currentUser = null;
    } else {
      state.currentUser = foundUser;
      console.log("login");
      homePage();
    }

    console.log(state.currentUser);
  }
};
