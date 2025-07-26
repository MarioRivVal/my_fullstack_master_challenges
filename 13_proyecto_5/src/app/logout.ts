import { state } from "./data";
import { messagePage } from "../pages/messagePage";
import { loginPage } from "../pages/loginPage";

export const logout = () => {
  console.log(state.currentUser);
  state.currentUser = null;
  console.log(state.currentUser);

  messagePage("success", "You are logged out", loginPage);
};
