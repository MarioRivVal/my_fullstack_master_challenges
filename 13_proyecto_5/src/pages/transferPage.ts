import { Navbar } from "../components/nav/Navbar";
import { Button } from "../components/button/Button";
import { SelectInput } from "../components/inputs/SelectInput";
import { linkPage } from "../utils/linkPages";
import { homePage } from "./homePage";
import { loginPage } from "./loginPage";

export const transferPage = () => {
  const app = document.querySelector<HTMLDivElement>("#app");

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
                    <p class="u-paragraph-xlarge u-text-bold ">Mario Rivera</p>
                    <p class="u-paragraph-small u-gray-font">4763 **** **** 0078</p>    
                  </div>
                </div>
               
                    
                <form class="form login-form u-white-box u-width-100 u-gap-small">
                  <div class="transfer__amount">
                    <div class="transfer__input-group">
                      <label class="u-secondary-title u-text-bold" for="amount">€</label>
                      <input type="number" class="input__amount" placeholder="_____" max="9999" required/>
                    </div>
                    <p class="u-paragraph-small u-gray-font">no fee</p>
                  </div>
                  <div class="inputs-box">
                    ${SelectInput({
                      id: "country",
                      options: [
                        { value: "2222", text: "Ana Fernadez" },
                        { value: "3333", text: "Steve Print" },
                        { value: "4444", text: "Peter Parker" },
                      ],
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

  linkPage("#btn-transfer", homePage);
  linkPage("#btn-logout", loginPage);
  linkPage("#btn-home", homePage);
};
