import { getLoanDetails } from "./loanFunctionality";

export const applyLoan = () => {
  const { months, totalToPay, monthlyFee } = getLoanDetails();
  console.log(months, totalToPay, monthlyFee);
};
