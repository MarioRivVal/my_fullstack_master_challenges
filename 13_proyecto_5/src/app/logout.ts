import { state } from "./data";
import { messagePage } from "../pages/messagePage";
import { loginPage } from "../pages/loginPage";

export const logout = () => {
  state.currentUser = null;
  messagePage("success", "You are logged out", loginPage);
};
