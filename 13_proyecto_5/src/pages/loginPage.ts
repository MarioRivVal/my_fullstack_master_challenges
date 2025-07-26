import { LoginIcon } from "../components/icons/large/LoginIcon";
import { Button } from "../components/button/Button";
import { Input } from "../components/inputs/Input";
import { linkPage } from "../utils/linkPages";
import { loadEvents } from "../utils/loadEvents";
import { infoPage } from "./infoPage";
import { signupPage } from "./signupPage";

import { login } from "../app/login";

export const loginPage = () => {
  const app = document.querySelector<HTMLDivElement>("#app");

  app!.innerHTML = `
 
          <section class="section login-page">
            <div>
              <h1 class="u-text-bold u-primary-title u-blue-font">Welcome to Bankneo</h1>
              <p class="u-paragraph-large u-text-center">Hello there, log in to continue</p>
            </div>
            <div class="large-icon-box">
            ${LoginIcon()}
            </div>
            <form id="login-form" class="form login-form u-white-box u-width-100 u-gap-large">
              <div class="inputs-box">
                ${Input({
                  type: "text",
                  id: "username",
                  name: "username",
                  placeholder: "Username",
                })}
                ${Input({
                  type: "password",
                  id: "password",
                  name: "password",
                  placeholder: "Password",
                })} 
              </div>
              <div class="btn-box">
                ${Button({
                  id: "btn-login",
                  text: "Log in",
                  type: "submit",
                  className: "",
                  icon: "",
                })}
                <p class="u-paragraph-small u-text-center">Don't have an account? <a id="btn-signup" class="u-blue-font">Sign up</a> </p>
              </div>
            </form>
              <button id="btn-info" class="btn btn-info">Info</button> 
          </section>
        `;

  linkPage("#btn-info", infoPage);
  linkPage("#btn-signup", signupPage);

  loadEvents("#login-form", "submit", login);
};
