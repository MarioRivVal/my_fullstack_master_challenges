import { linkPage } from "../utils/linkPages";
import { getCurrencySymbol } from "../utils/getCurrencySymbol";
import { Navbar } from "../components/nav/Navbar";
import { SelectInput } from "../components/inputs/SelectInput";
import { Button } from "../components/button/Button";
import { ListDetails } from "../components/list-details/ListDetails";
import { homePage } from "./homePage";
import { loginPage } from "./loginPage";
import { state } from "../app/data";
import { loanFunctionality } from "../services/loanServices";
import { applyLoan } from "../app/applyLoan";
import { loadEvents } from "../utils/loadEvents";
import { logout } from "../app/logout";

const list = {
  names: ["Months", "Total to pay", "Monthly fee"],
  values: ["0", "0", "0"],
};

export const loanPage = () => {
  const app = document.querySelector<HTMLDivElement>("#app");

  const currentUser = state.currentUser!;
  const symbol = getCurrencySymbol(currentUser.currency, currentUser.location);

  app!.innerHTML = `
                <section class="section loan-page">
                    ${Navbar(true)}
                    <main class="main loan__main u-width-100">
                        <h2 class="u-secondary-title u-text-bold u-text-center">Apply for a Loan</h2>
                        <div class="loan__amount-selector u-width-100">
                            <div class="loan__btn-box u-width-100">
                                <button class="btn btn-green loan__btn-minus">-</button>
                                <button class="btn btn-green loan__btn-plus">+</button>
                            </div>
                            <input type="range" class="loan__range u-width-100" min="100" max="20000" step="100" value="10000">
                            <p ><span class="loan__symbol">${symbol}</span><span class="loan__amount"></span></p>

                        </div>
                        <div class="loan__details u-width-100">
                            <form id="form-apply-loan" class="form loan-form u-white-box u-width-100 u-gap-small u-mb-large">
                                <div class="inputs-box">
                                    ${SelectInput({
                                      id: "loan__term",
                                      options: [
                                        { value: "12", text: "12 Months" },
                                        { value: "24", text: "24 Months" },
                                        { value: "36", text: "36 Months" },
                                      ],
                                      name: "load-term",
                                      placeholder: "Choose your term",
                                    })}
                                </div>
                                <div class="btn-box">
                                    ${Button({
                                      id: "btn-calculate-loan",
                                      text: "Calculate",
                                      type: "button",
                                      className: "btn-white",
                                      icon: "",
                                    })}
                                    ${Button({
                                      id: "btn-apply-loan",
                                      text: "Apply",
                                      type: "submit",
                                      icon: "",
                                      disabled: true,
                                    })}
                                </div>
                            </form>
                            <div>
                                <p class="u-paragraph-large u-text-bold u-mb-medium ">Payment summary</p>
                                <div id="loan__list" class="u-white-box u-width-100 u-gap-small">
                                    ${ListDetails(list)}
                                </div>
                            </div>
                        
                        </div>

                    </main>
                    
                </section>`;

  loanFunctionality(currentUser, symbol);
  loadEvents("#form-apply-loan", "submit", applyLoan);
  loadEvents("#btn-logout", "click", logout);

  linkPage("#btn-home", homePage);
  linkPage("#btn-logout", loginPage);
};
