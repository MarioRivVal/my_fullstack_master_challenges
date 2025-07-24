import { Navbar } from "../components/nav/Navbar";
import { Button } from "../components/button/Button";
import { SelectInput } from "../components/inputs/SelectInput";
import { linkPage } from "../utils/linkPages";
import { homePage } from "./homePage";
import { loginPage } from "./loginPage";
import { users, state } from "../app/data";
import { loadEvents } from "../utils/loadEvents";
import { transferMoney } from "../app/transferMoney";
import { getTransactionTotals } from "../utils/getTransactionTotals";
import { getCurrencySymbol } from "../utils/getCurrencySymbol";

export const transferPage = () => {
  const app = document.querySelector<HTMLDivElement>("#app");

  const currentUser = state.currentUser!;
  const { formatted } = getTransactionTotals(currentUser.transactions);

  const symbol = getCurrencySymbol(currentUser.currency, currentUser.location);

  const selectOptions = users
    .filter((user) => user.username !== currentUser?.username)
    .map((user) => ({
      value: user.username,
      text: `${user.name} ${user.surname}`,
    }));

  app!.innerHTML = `
            <section class="section transfer-page">
              ${Navbar(true)}
              <main class="main transfer__main u-width-100">
                <div class="transfer__receptor-box">
                  <h2 class="u-secondary-title u-text-bold u-text-center">Transfer money</h2>
                  <div class="transfer__receptor u-width-100">
                    <div class="user__avatar user__avatar--transferpage ">
                      <img  src="https://i.pravatar.cc/300"/>
                    </div>
                    <p class="u-paragraph-xlarge u-text-bold ">${
                      currentUser.name
                    } ${currentUser.surname}</p>
                    <p class="u-paragraph-small u-gray-font">${
                      formatted.balance
                    }</p>    
                  </div>
                </div>
               
                    
                <form id="form-transfer-money" class="form login-form u-white-box u-width-100 u-gap-small">
                  <div class="transfer__amount">
                    <div class="transfer__input-group">
                      <label class="u-secondary-title u-text-bold" for="amount">${symbol}</label>
                      <input type="number" id="amount" name="amount" class="input__amount" placeholder="_____" max="9999" required/>
                    </div>
                    <p class="u-paragraph-small u-gray-font">no fee</p>
                  </div>
                  <div class="inputs-box">
                    ${SelectInput({
                      id: "country",
                      options: selectOptions,
                      name: "destination",
                      placeholder: "Select Destination Account",
                    })}
                  </div>
                  <div class="btn-box">
                    ${Button({
                      id: "btn-transfer",
                      text: "Send",
                      type: "submit",
                      icon: "",
                    })}
                  </div>
                </form>
              </main>
          </section>
            `;

  linkPage("#btn-logout", loginPage);
  linkPage("#btn-home", homePage);

  loadEvents("#form-transfer-money", "submit", transferMoney);
};
