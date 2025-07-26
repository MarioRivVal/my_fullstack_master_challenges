import { state } from "./data";
import { getCurrencySymbol } from "../utils/getCurrencySymbol";
import { getLoanDetails } from "../services/loanServices";
import { messagePage } from "../pages/messagePage";
import { transactionPage } from "../pages/transactionPage";

export const applyLoan = () => {
  const { loanAmount } = getLoanDetails();
  const currentUser = state.currentUser!;
  const symbol = getCurrencySymbol(currentUser.currency, currentUser.location);

  currentUser.transactions.unshift({
    category: "Loan",
    type: "income",
    date: new Date().toISOString(),
    amount: loanAmount,
  });

  messagePage(
    "success",
    `The bank has granted you a loan of ${symbol} ${loanAmount}`,
    transactionPage
  );
};
