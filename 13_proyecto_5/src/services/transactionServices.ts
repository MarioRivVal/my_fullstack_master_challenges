import { sortTransactions } from "../utils/sortTransactions";
import { Transaction } from "../types";

export const transactionFunctionality = (
  isSorted: boolean,
  transactions: Transaction[],
  renderTransactions: (transactions: Transaction[]) => string
) => {
  const btnSort = document.getElementById("btn-sort");
  const container = document.querySelector(".transaction__list");

  btnSort?.addEventListener("click", () => {
    const txsToRender = isSorted
      ? [...transactions]
      : sortTransactions(transactions);

    container!.innerHTML = renderTransactions(txsToRender);
    isSorted = !isSorted;
    btnSort.textContent = isSorted ? "Unsort" : "Sort";
  });
};
