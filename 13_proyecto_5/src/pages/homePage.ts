import { linkPage } from "../utils/linkPages";
import { loginPage } from "./loginPage";
import { UserPage } from "./userPage";
import { transferPage } from "./transferPage";
import { loanPage } from "./loanPage";
import { transactionPage } from "./transactionPage";
import { billPage } from "./billPage";
import { Navbar } from "../components/nav/Navbar";
import { Feature } from "../components/feature/Feature";
import { CreditCard } from "../components/credit-card/CreditCard";
import { Loader } from "../components/loader/Loader";
import { UserIcon } from "../components/icons/features/UserIcon";
import { TransferIcon } from "../components/icons/features/TransferIcon";
import { LoanIcon } from "../components/icons/features/LoanIcon";
import { TransactionIcon } from "../components/icons/features/TransactionIcon";
import { BillIcon } from "../components/icons/features/BillIcon";

import { state } from "../app/data";

export const homePage = () => {
  const app = document.querySelector<HTMLDivElement>("#app");

  Loader();

  setTimeout(() => {
    app!.innerHTML = `
            <section class="section home-page">
                ${Navbar(false)}

                <main class="main home__main">
                  <div class="credit-card-box">
                    <h2 class="u-secondary-title u-text-bold u-text-center">Hello, ${
                      state.currentUser?.name
                    }</h2>
                    ${CreditCard(false)}
                  </div>
                    
                    <div class="home__features">
                      ${Feature({
                        id: "feature-user",
                        icon: UserIcon,
                        text: "User",
                      })}
                      ${Feature({
                        id: "feature-transfer",
                        icon: TransferIcon,
                        text: "Transfer",
                      })}
                      ${Feature({
                        id: "feature-loan",
                        icon: LoanIcon,
                        text: "Loan",
                      })}
                      ${Feature({
                        id: "feature-transaction",
                        icon: TransactionIcon,
                        text: "Transaction",
                      })}
                      ${Feature({
                        id: "feature-bill",
                        icon: BillIcon,
                        text: "Bill",
                      })}
                    </div>
                </main>
            </section>
            `;

    linkPage("#btn-logout", loginPage);
    linkPage("#feature-user", UserPage);
    linkPage("#feature-transfer", transferPage);
    linkPage("#feature-loan", loanPage);
    linkPage("#feature-transaction", transactionPage);
    linkPage("#feature-bill", billPage);
  }, 800);
};
