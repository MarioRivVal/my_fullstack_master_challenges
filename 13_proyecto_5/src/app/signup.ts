import { messagePage } from "../pages/messagePage";
import { signupPage } from "../pages/signupPage";

export const signup = (e: Event) => {
  const target = e.target as HTMLFormElement | null;

  if (target) {
    const formData = new FormData(target);
    const formValues = Object.fromEntries(formData.entries());

    const password = formValues.password as string;

    if (password.length > 4) {
      messagePage("alert", "Password must to be only 4 digits", signupPage);
    }
  }
};
