import { billPage } from "../pages/billPage";
import { messagePage } from "../pages/messagePage";
import { transactionPage } from "../pages/transactionPage";
import { getTransactionTotals } from "../utils/getTransactionTotals";
import { state } from "./data";

export const payBills = (e: Event) => {
  const currentUser = state.currentUser!;
  const { raw } = getTransactionTotals(currentUser.transactions);

  const form = e.target as HTMLFormElement;
  const formData = new FormData(form);

  const category = formData.get("category") as string;
  const rawAmount = parseFloat(formData.get("amount") as string);
  const amount = -Math.abs(rawAmount);

  if (rawAmount > raw.balance) {
    messagePage(
      "alert",
      "Oops! You don’t have enough money for this.",
      billPage
    );
    return;
  } else {
    currentUser.transactions.unshift({
      category,
      type: "expense",
      date: new Date().toISOString(),
      amount,
    });
    messagePage("success", "Bill paid succesfully!", transactionPage);
  }
};
