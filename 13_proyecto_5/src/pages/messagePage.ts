import { Button } from "../components/button/Button";
import { AlertIcon } from "../components/icons/large/AlertIcon";
import { SuccessIcon } from "../components/icons/large/SuccessIcon";
import { linkPage } from "../utils/linkPages";
import { Loader } from "../components/loader/Loader";

export const messagePage = (
  type: string,
  message: string,
  page: () => void
) => {
  const app = document.querySelector<HTMLDivElement>("#app");

  Loader();

  setTimeout(() => {
    app!.innerHTML = `
                    
    <section class="section signup-page"> 
        
        <main class="main alert__main u-width-100">
        <div class="alert-icon-box">
          ${type === "alert" ? AlertIcon() : SuccessIcon()}
        </div>
             <h2 class="u-text-bold u-secondary-title u-text-center">${message}</h2>
            
                ${Button({
                  id: "btn-close-alert",
                  text: "Back",
                  type: "button",
                  icon: "",
                })}               
            
        
        </main>
    </section> `;

    linkPage("#btn-close-alert", page);
  }, 1500);
};
