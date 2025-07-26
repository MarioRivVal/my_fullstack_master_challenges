import { Button } from "../components/button/Button";
import { Input } from "../components/inputs/Input";
import { Navbar } from "../components/nav/Navbar";
import { SelectInput } from "../components/inputs/SelectInput";
import { linkPage } from "../utils/linkPages";
import { loadEvents } from "../utils/loadEvents";
import { payBills } from "../app/payBill";
import { categories } from "../app/data";
import { logout } from "../app/logout";
import { homePage } from "./homePage";

export const billPage = () => {
  const app = document.querySelector<HTMLDivElement>("#app");

  app!.innerHTML = `
            <section class="section signup-page"> 
                ${Navbar(true)}
                <main class="main signup__main u-width-100"> 
                    <h2 class="u-text-bold u-primary-title u-text-center">Pay Bill</h2>
                    <form id="form-pay-bill" class="form u-white-box u-width-100 u-gap-large">
                        <div class="inputs-box">
                            ${SelectInput({
                              id: "select-bill",
                              options: categories,
                              name: "category",
                              placeholder: "Select a category",
                            })}
                            ${Input({
                              type: "number",
                              id: "amount",
                              name: "amount",
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
  linkPage("#btn-home", homePage);

  loadEvents("#btn-logout", "click", logout);
  loadEvents("#form-pay-bill", "submit", payBills);
};
