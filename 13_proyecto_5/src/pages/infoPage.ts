import { linkPage } from "../utils/linkPages";
import { loginPage } from "./loginPage";
import { users } from "../app/data";
import { Button } from "../components/button/Button";

export const infoPage = () => {
  const app = document.querySelector<HTMLDivElement>("#app");

  const usernames = users
    .map((user) => user.username)
    .map((item) => `<li>${item}</li>`)
    .join("");
  const passwords = users
    .map((user) => user.password)
    .map((item) => `<li>${item}</li>`)
    .join("");

  app!.innerHTML = `
                <section class="section info-page">
                    <h2 class="u-text-bold u-secondary-title u-blue-font u-text-center">Info Page</h2>
                    <p class="u-paragraph-large u-text-center">Access three predefined user accounts to test the app:</p>
                    <div class="list-users u-text-center u-width-100">
                        <ul class="u-paragraph-large">
                            <li class="u-blue-font">Username</li>
                            ${usernames}
                        </ul>
                        <ul class=" u-paragraph-large">
                            <li class="u-blue-font">Password</li>
                            ${passwords}
                        </ul>
                    </div>
                        <p class="u-paragraph-large u-text-center">You can create additional temporary users. Note that these accounts  will disappear when the page is refreshed.</p>
                        <p class="u-paragraph-large u-text-center">This app is a simulation for testing purposes; no real data is stored, and all transactions are temporary.
                        </p>
                       ${Button({
                         id: "btn-close-info",
                         text: "Close",
                         type: "button",
                         icon: "",
                       })} 
                       
            </section>
            `;

  linkPage("#btn-close-info", loginPage);
};
