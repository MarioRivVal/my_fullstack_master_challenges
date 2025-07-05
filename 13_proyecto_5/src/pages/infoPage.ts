import { linkPage } from "../utils/linkPages";
import { loginPage } from "./loginPage";
// import { ListDetails } from "../components/list-details/ListDetails";

export const infoPage = () => {
  const app = document.querySelector<HTMLDivElement>("#app");
  app!.innerHTML = `
                <section class="section info-page">
                    <h2 class="u-text-bold u-secondary-title u-blue-font u-text-center">Info Page</h2>
                    <p class="u-paragraph-large u-text-center">Access three predefined user accounts to test the app:</p>
                    <div class="list-users u-text-center u-width-100">
                        <ul class="u-paragraph-large">
                            <li class="u-blue-font">Username</li>
                            <li>mario</li>
                            <li>ana</li>
                            <li>steve</li>
                        </ul>
                        <ul class=" u-paragraph-large">
                            <li class="u-blue-font">Password</li>
                            <li>1111</li>
                            <li>2222</li>
                            <li>3333</li>
                        </ul>
                    </div>
                        <p class="u-paragraph-large u-text-center">You can create additional temporary users. Note that these accounts  will disappear when the page is refreshed.</p>
                        <p class="u-paragraph-large u-text-center">This app is a simulation for testing purposes; no real data is stored, and all transactions are temporary.</p>
                        <button id="btn-close-info" class="btn btn-info">X</buttonid=class=>
            </section>
            `;

  linkPage("#btn-close-info", loginPage);
};
