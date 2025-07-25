import { Navbar } from "../components/nav/Navbar";
import { TransactionItem } from "../components/transaction-item/TransactionItem";
import { IncomeIcon } from "../components/icons/general/IncomeIcon";
import { OutcomeIcon } from "../components/icons/general/OutcomeIcon";
import { linkPage } from "../utils/linkPages";
import { getTransactionTotals } from "../utils/getTransactionTotals";
import { sortTransactions } from "../utils/sortTransactions";
import { Transaction } from "../types";
import { homePage } from "./homePage";
import { loginPage } from "./loginPage";

import { state } from "../app/data";
import { Loader } from "../components/loader/Loader";

export const transactionPage = () => {
  const app = document.querySelector<HTMLDivElement>("#app");
  let isSorted = false;

  const transactions = state.currentUser!.transactions;
  const { raw, formatted } = getTransactionTotals(transactions);

  const renderTransactions = (transactions: Transaction[]) => {
    return transactions.map((tx) => TransactionItem(tx)).join("");
  };

  Loader();
  setTimeout(() => {
    app!.innerHTML = `
           <section class="section transaction-page"> 
                           ${Navbar(true)}
                           <main class="main transaction__main u-width-100">
                              <div class="transaction__title-box">
                                <h2 class="u-text-bold u-primary-title">List of transactions</h2>
                                <a id="btn-sort" class="u-paragraph-large u-text-bold">Sort</a>
                              </div>
                              <div class="transaction__outcome-box u-income-font u-paragraph-large">
                                <span>Available</span>
                                <p class="u-text-bold ${
                                  Number(raw.balance) > 0
                                    ? "u-income-font"
                                    : "u-expense-font"
                                }">${formatted.balance}</p>
                              </div>
                               
                              <div class="u-white-box u-width-100 u-gap-large">
                                    <div class="transaction__list">
                                    ${renderTransactions(
                                      state.currentUser!.transactions
                                    )}

                                        
                                    </div>
                                    <div class="transaction__totals">
                                          <div class="transaction__income-box u-income-font u-paragraph-large">
                                            <div class="small-icon-box">
                                              ${IncomeIcon()}
                                            </div>
                                            <span>In</span>
                                            <p class="u-text-bold u-income-font">${
                                              formatted.income
                                            }</p>
                                          </div>
                                          <div class="transaction__outcome-box u-outcome-font u-paragraph-large">
                                             <div class="small-icon-box">
                                              ${OutcomeIcon()}
                                            </div>
                                            <span>Out</span>
                                            <p class="u-text-bold u-expense-font">${
                                              formatted.expense
                                            }</p>
                                          </div>
                                    </div>
                                   
                               </div>
                           </main>
                       </section> `;

    linkPage("#btn-home", homePage);
    linkPage("#btn-logout", loginPage);

    const btnSort = document.getElementById("btn-sort");
    const container = document.querySelector(".transaction__list");

    btnSort?.addEventListener("click", () => {
      const txsToRender = isSorted
        ? [...transactions]
        : sortTransactions(transactions);

      container!.innerHTML = renderTransactions(txsToRender);
      isSorted = !isSorted;
      btnSort.textContent = isSorted ? "Unsort" : "Sort";
    });
  }, 500);
};
