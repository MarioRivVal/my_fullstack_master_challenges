import { Navbar } from "../components/nav/Navbar";
import { TransactionItem } from "../components/transaction-item/TransactionItem";
import { linkPage } from "../utils/linkPages";
import { homePage } from "./homePage";
import { loginPage } from "./loginPage";

import { BarIcon } from "../components/icons/categories/BarIcon";
import { GiftIcon } from "../components/icons/categories/GiftIcon";
import { GymIcon } from "../components/icons/categories/GymIcon";
import { HolidayIcon } from "../components/icons/categories/HolidayIcon";
import { LoanIcon } from "../components/icons/categories/LoanIcon";
import { RestaurantIcon } from "../components/icons/categories/RestaurantIcon";
import { ShoppingIcon } from "../components/icons/categories/ShoppingIcon";
import { IncomeIcon } from "../components/icons/general/IncomeIcon";
import { OutcomeIcon } from "../components/icons/general/OutcomeIcon";

export const transactionPage = () => {
  const app = document.querySelector<HTMLDivElement>("#app");

  app!.innerHTML = `
           <section class="section transaction-page"> 
                           ${Navbar(true)}
                           <main class="main transaction__main u-width-100">
                            <div class="transaction__title-box">
                              <h2 class="u-text-bold u-primary-title">List of transactions</h2>
                              <a id="btn-sort" class="u-paragraph-large u-text-bold">Sort</a>
                            </div>
                               
                               <div class="u-white-box u-width-100 u-gap-large">
                                    <div class="transaction__list">
                                        ${TransactionItem({
                                          icon: BarIcon(),
                                          category: "Bar",
                                          type:"income",
                                          date: "22 Mayo 2025",
                                          amount: 1200,
                                        })}
                                          ${TransactionItem({
                                            icon: GiftIcon(),
                                            category: "Gift",
                                            type:"outcome",
                                            date: "22 Mayo 2025",
                                            amount: 1300,
                                          })}
                                          ${TransactionItem({
                                            icon: GymIcon(),
                                            category: "Gift",
                                            type:"income",
                                            date: "22 Mayo 2025",
                                            amount: 1300,
                                          })}
                                          ${TransactionItem({
                                            icon: HolidayIcon(),
                                            category: "Gift",
                                            type:"outcome",
                                            date: "22 Mayo 2025",
                                            amount: 1300,
                                          })}
                                          ${TransactionItem({
                                            icon: LoanIcon(),
                                            category: "Gift",
                                            type:"income",
                                            date: "22 Mayo 2025",
                                            amount: 1300,
                                          })}
                                          ${TransactionItem({
                                            icon: RestaurantIcon(),
                                            category: "Gift",
                                            type:"income",
                                            date: "22 Mayo 2025",
                                            amount: 1300,
                                          })}
                                          ${TransactionItem({
                                            icon: ShoppingIcon(),
                                            category: "Gift",
                                            type:"outcome",
                                            date: "22 Mayo 2025",
                                            amount: 1300,
                                          })}
                                    </div>
                                    <div class="transaction__totals">
                                          <div class="transaction__income-box u-income-font u-paragraph-large">
                                            <div class="small-icon-box">
                                              ${IncomeIcon()}
                                            </div>
                                            <span>In</span>
                                            <p class="u-text-bold">+ 233456</p>
                                          </div>
                                          <div class="transaction__outcome-box u-outcome-font u-paragraph-large">
                                             <div class="small-icon-box">
                                              ${OutcomeIcon()}
                                            </div>
                                            <span>Out</span>
                                            <p class="u-text-bold">- 233456</p>
                                          </div>
                                    </div>
                                   
                               </div>
                           </main>
                       </section> `;

  linkPage("#btn-home", homePage);
  linkPage("#btn-logout", loginPage);
};
