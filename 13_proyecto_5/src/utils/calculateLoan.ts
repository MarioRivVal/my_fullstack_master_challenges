import { LoanResult } from "../types";

export const calculateLoan = (amount: number, months: number): LoanResult => {
  let interestPercent = 0;

  switch (months) {
    case 12:
      interestPercent = 5;
      break;
    case 24:
      interestPercent = 10;
      break;
    case 36:
      interestPercent = 15;
      break;
    default:
  }

  const interestAmount = amount * (interestPercent / 100);
  const totalToPay = amount + interestAmount;
  const monthlyFee = totalToPay / months;

  return {
    totalToPay: +totalToPay.toFixed(2),
    monthlyFee: +monthlyFee.toFixed(2),
  };
};
