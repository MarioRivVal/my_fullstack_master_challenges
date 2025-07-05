import { Navbar } from "../components/nav/Navbar";
import { CreditCard } from "../components/credit-card/CreditCard";
import { ListDetails } from "../components/list-details/ListDetails";
import { linkPage } from "../utils/linkPages";
import { loginPage } from "./loginPage";
import { homePage } from "./homePage";

import { state } from "../app/data";

export const UserPage = () => {
  const app = document.querySelector<HTMLDivElement>("#app");

  const user = state.currentUser;

  const list = {
    names: ["Name", "Password", "Currency", "Location"],
    values: [user!.name, user!.password, user!.currency, user!.location],
  };

  app!.innerHTML = `
            <section class="section user-page">
                  ${Navbar(true)}

                <main class="main user__main">
                    <div class="credit-card-box">
                        <h2 class="u-secondary-title u-text-bold u-text-center">User data</h2>
                        ${CreditCard(true)}
                    </div>
                   
                    <form class="u-white-box user__data-form u-width-100">
                        <div class="user__avatar user__avatar--userpage ">
                            <img  src="https://i.pravatar.cc/300"/>
                        </div>
                        ${ListDetails(list)}
                       
                    </form>
                </main>
              
            </section>
            `;

  linkPage("#btn-logout", loginPage);
  linkPage("#btn-home", homePage);
};
