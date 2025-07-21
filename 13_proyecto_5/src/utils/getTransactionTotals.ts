import { Transaction } from "../types";
import { formatCurrency } from "./formatters";
import { state } from "../app/data";

export const getTransactionTotals = (transactions: Transaction[]) => {
  let totalIncome = 0;
  let totalExpense = 0;

  for (const tr of transactions) {
    if (tr.type === "income") {
      totalIncome += tr.amount;
    } else if (tr.type === "expense") {
      totalExpense += tr.amount;
    }
  }

  const user = state.currentUser!;
  const locale = user.location;
  const currency = user.currency;

  return {
    raw: {
      income: totalIncome,
      expense: totalExpense,
      balance: totalIncome + totalExpense,
    },

    formatted: {
      income: formatCurrency(totalIncome, currency, locale),
      expense: formatCurrency(totalExpense, currency, locale),
      balance: formatCurrency(totalIncome + totalExpense, currency, locale),
    },
  };
};
