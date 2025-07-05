import { Button } from "../components/button/Button";
import { TextInput } from "../components/inputs/TextInput";
import { Navbar } from "../components/nav/Navbar";
import { linkPage } from "../utils/linkPages";
import { SelectInput } from "../components/inputs/SelectInput";

import { loginPage } from "./loginPage";
import { homePage } from "./homePage";

export const billPage = () => {
  const app = document.querySelector<HTMLDivElement>("#app");

  app!.innerHTML = `
            <section class="section signup-page"> 
                ${Navbar(true)}
                <main class="main signup__main u-width-100"> 
                    <h2 class="u-text-bold u-primary-title u-text-center">Pay Bill</h2>
                    <form class="form signup-form u-white-box u-width-100 u-gap-large">
                        <div class="inputs-box">
                            ${SelectInput({
                              id: "select-bill",
                              options: [
                                { value: "electricity", text: "Electricity" },
                                { value: "water", text: "Water" },
                                { value: "internet", text: "Internet" },
                                { value: "gas", text: "Gas" },
                              ],
                              placeholder: "Select a category",
                            })}
                            ${TextInput({
                              type: "number",
                              id: "password",
                              placeholder: "How much have you spent?",
                            })}  
                        </div>
                        <div class="btn-box">
                            ${Button({
                              id: "btn-pay-bill",
                              text: "Pay",
                              type: "submit",
                              icon: "",
                            })}               
                        </div>
                    </form>
                </main>
            </section> `;
  linkPage("#btn-pay-bill", homePage);
  linkPage("#btn-logout", loginPage);
  linkPage("#btn-home", homePage);
};
