import { linkPage } from "../utils/linkPages";
import { Navbar } from "../components/nav/Navbar";
import { SelectInput } from "../components/inputs/SelectInput";
import { Button } from "../components/button/Button";
import { ListDetails } from "../components/list-details/ListDetails";
import { homePage } from "./homePage";
import { loginPage } from "./loginPage";

const list ={
    names:["Months","Total to pay","Monthly fee"],
    values:["12", "39853", "125"]
}

export const loanPage = () => {
  const app = document.querySelector<HTMLDivElement>("#app");

  app!.innerHTML = `
                <section class="section loan-page">
                    ${Navbar(true)}
                    <main class="main loan__main u-width-100">
                        <h2 class="u-secondary-title u-text-bold u-text-center">Apply for a Loan</h2>
                        <div class="loan__amount-selector u-width-100">
                            <div class="loan__btn-box u-width-100">
                                <button class="btn btn-green">-</button>
                                <button class="btn btn-green">+</button>
                            </div>
                            <input type="range" class="loan__range u-width-100" min="0" max="20000" step="100" value="10000">
                            <p class="loan__amount"><span>€</span>14500</p>

                        </div>
                        <div class="loan__details u-width-100">
                            <form class="form login-form u-white-box u-width-100 u-gap-small u-mb-large">
                                <div class="inputs-box">
                                    ${SelectInput({
                                      id: "loan-term",
                                      options: [
                                        { value: "12", text: "12 Months" },
                                        { value: "24", text: "24 Months" },
                                        { value: "36", text: "36 Months" },
                                      ],
                                      placeholder: "Choose your term",
                                    })}
                                </div>
                                <div class="btn-box">
                                    ${Button({
                                      id: "btn-aply-loan",
                                      text: "Apply",
                                      type: "submit",
                                      icon: "",
                                    })}
                                </div>
                            </form>
                            <div>
                                <p class="u-paragraph-large u-text-bold u-mb-medium ">Payment summary</p>
                                <div class="u-white-box u-width-100 u-gap-small">
                                    ${ListDetails(list)}
                                </div>
                            </div>
                        
                        </div>

                    </main>
                    
                </section>`;

  linkPage("#btn-home", homePage);
  linkPage("#btn-logout", loginPage);
};
