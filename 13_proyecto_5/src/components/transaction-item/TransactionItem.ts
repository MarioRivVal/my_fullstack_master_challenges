import "./transaction.css";

type TransactionItemType = {
  icon: string;
  category: string;
  type: string,
  date: string;
  amount: number;
};

export const TransactionItem = ({
  icon,
  category,
  type,
  date,
  amount,
}: TransactionItemType): string => `
    <div class="transaction__item">
        <div class="transaction__category-box">
            <div class="transaction__icon-box">
                ${icon}
            </div>
            <div class="transaction__category-details">
                <p class="u-paragraph-large ">${category}</p>
                <p class="u-paragraph-small u-gray-font ">${date}</p>
            </div>
        </div>
        <p class="u-paragraph-large u-${type}-font"><span>€</span>${amount}</p>
    </div>

`;
