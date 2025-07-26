import "./transaction.css";

import { state } from "../../app/data";
import { formatDate, formatCurrency } from "../../utils/formatters";
import { getIcon } from "../../utils/getIcon";

import { TransactionItemType } from "../../types";

export const TransactionItem = ({
  category,
  type,
  date,
  amount,
}: TransactionItemType): string => {
  const user = state.currentUser;
  const formattedDate = formatDate(date, user!.location);
  const formattedCurrency = formatCurrency(
    amount,
    user!.currency,
    user!.location
  );

  return `
    <div class="transaction__item">
        <div class="transaction__category-box">
            <div class="transaction__icon-box">
                ${getIcon(category)}
            </div>
            <div class="transaction__category-details">
                <p class="u-paragraph-large ">${category}</p>
                <p class="u-paragraph-small u-gray-font ">${formattedDate}</p>
            </div>
        </div>
        <p class="u-paragraph-large u-${type}-font">${formattedCurrency}</p>
    </div>

`;
};
