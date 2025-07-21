import { Transaction } from "../types";

export const sortTransactions = (
  transactions: Transaction[]
): Transaction[] => {
  return [...transactions].sort((a, b) => {
    if (a.type !== b.type) {
      return a.type === "income" ? -1 : 1;
    }

    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
};
