import { messagePage } from "../pages/messagePage";
import { signupPage } from "../pages/signupPage";
import { state } from "./data";

export const signup = (e: Event) => {
  console.log("desde signup");
  const target = e.target as HTMLFormElement | null;

  if (target) {
    const signupValues = state.signupValues;

    if (signupValues) {
      Object.entries(signupValues).forEach(([key, value]) => {
        const input = target.elements.namedItem(key) as HTMLInputElement | null;
        if (input) {
          input.value = value as string;
        }
      });
    }

    const formData = new FormData(target);
    const formValues = Object.fromEntries(formData.entries());

    state.signupValues.username = formValues.username;

    const password = formValues.password as string;

    if (password.length > 4) {
      messagePage("alert", "Password must to be only 4 digits", signupPage);
    }
  }
};
