import "./credit-card.css";
import { state } from "../../app/data";
import { maskCardNumber } from "../../utils/maskCardNumber";

export const CreditCard = (showFull: boolean): string => {
  const user = state.currentUser;
  const hiddenCardNum = maskCardNumber(user!.creditCardNum);
  const hiddenCVV = "•••";

  return `
    <div class="credit-card">
        <div class="credit-card-img">
            <img src="./img/credit-card.png" alt="credit-card" class="credit-card-img" />
        </div>
        <div class="credit-card-data">
            <div class="u-white-font">
                <p class="u-paragraph-xlarge u-mb-tiny">${user?.name} ${
    user?.surname
  }</p>
                <p class="u-paragraph-large">${
                  showFull ? user?.creditCardNum : hiddenCardNum
                }</p>
            </div>
            <div class="credit-card-details-box u-paragraph-small ">
                <div>
                    <p class="u-gray-font u-mb-tiny">Expire date</p>
                    <p class="u-white-font">${user?.expireData}</p>
                </div>
                <div>
                    <p class="u-gray-font u-mb-tiny">CCV</p>
                    <p class="u-white-font">${
                      showFull ? user?.cvv : hiddenCVV
                    }</p>
                </div>
            </div>
            
        </div>
    </div>

`;
};
