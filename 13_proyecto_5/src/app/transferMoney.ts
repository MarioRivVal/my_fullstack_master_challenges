import { convertCurrency } from "../utils/convertCurrency";
import { state, users } from "./data";
import { getTransactionTotals } from "../utils/getTransactionTotals";
import { messagePage } from "../pages/messagePage";
import { transferPage } from "../pages/transferPage";
import { transactionPage } from "../pages/transactionPage";

export const transferMoney = async (e: Event) => {
  const currentUser = state.currentUser!;
  const { raw } = getTransactionTotals(currentUser.transactions);

  const form = e.target as HTMLFormElement;
  const formData = new FormData(form);

  const amount = parseFloat(formData.get("amount") as string);
  const destination = formData.get("destination") as string;

  const destinationUser = users.find((user) => user.username === destination);

  if (amount > raw.balance) {
    messagePage(
      "alert",
      "Oops! You don’t have enough money for this.",
      transferPage
    );
  } else {
    const convertedAmount =
      currentUser.currency !== destinationUser!.currency
        ? await convertCurrency(
            amount,
            currentUser.currency,
            destinationUser!.currency
          )
        : amount;

    // Quita dinero del usuario actual
    currentUser.transactions.unshift({
      category: "Transfer",
      type: "expense",
      date: new Date().toISOString(),
      amount: -Math.abs(amount),
    });

    // Ingresa dinero al recibidor.
    destinationUser!.transactions.unshift({
      category: "Transfer",
      type: "income",
      date: new Date().toISOString(),
      amount: convertedAmount,
    });

    messagePage(
      "success",
      `Money transfered successfully to ${destinationUser!.name} ${
        destinationUser!.surname
      } `,
      transactionPage
    );
  }
};
