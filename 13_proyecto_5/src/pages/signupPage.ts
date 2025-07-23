import { Input } from "../components/inputs/Input";
import { Navbar } from "../components/nav/Navbar";
import { Button } from "../components/button/Button";
import { linkPage } from "../utils/linkPages";
import { loginPage } from "./loginPage";
import { loadEvents } from "../utils/loadEvents";
import { signup } from "../app/signup";

export const signupPage = () => {
  const app = document.querySelector<HTMLDivElement>("#app");

  app!.innerHTML = `
                
            <section class="section signup-page"> 
                 ${Navbar(false)}
                <main class="main signup__main u-width-100"> 
                     <h1 class="u-text-bold u-primary-title u-blue-font">Create new user</h1>

                    <form id="signup-form" class="form signup-form u-white-box u-width-100 u-gap-large">
                        <div class="inputs-box">
                            ${Input({
                              type: "text",
                              id: "username",
                              name: "username",
                              placeholder: "Username",
                            })}
                            ${Input({
                              type: "number",
                              id: "password",
                              name: "password",
                              placeholder: "4-digit password",
                            })}  
                        </div>
                        <div class="btn-box">
                            ${Button({
                              id: "btn-create-user",
                              text: "Create",
                              type: "submit",
                              icon: "",
                            })}               
                        </div>
                    </form>
                </main>
            </section> `;

  linkPage("#btn-logout", loginPage);

  loadEvents("#signup-form", "submit", signup);
};
