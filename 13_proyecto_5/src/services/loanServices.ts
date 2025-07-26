import { User, LoanResult } from "../types";
import { calculateLoan } from "../utils/calculateLoan";

let loanAmount: number;
let loanMonths: number;
let loanTotalToPay: number;
let loanMonthFee: number;

export const loanFunctionality = (currentUser: User, symbol: string) => {
  const minusBtn = document.querySelector(
    ".loan__btn-minus"
  ) as HTMLButtonElement;
  const plusBtn = document.querySelector(
    ".loan__btn-plus"
  ) as HTMLButtonElement;
  const rangeInputEl = document.querySelector(
    ".loan__range"
  ) as HTMLInputElement;
  const applyBtnEl = document.querySelector(
    "#btn-apply-loan"
  ) as HTMLButtonElement;
  const amountEl = document.querySelector(".loan__amount") as HTMLSpanElement;
  const monthsEl = document.querySelector(
    "#list-value li:nth-child(1)"
  ) as HTMLLIElement;
  const totalPayEl = document.querySelector(
    "#list-value li:nth-child(2)"
  ) as HTMLLIElement;
  const monthlyFeeEl = document.querySelector(
    "#list-value li:nth-child(3)"
  ) as HTMLLIElement;
  const loanTermSelect = document.querySelector(
    "#loan__term"
  ) as HTMLSelectElement;
  const btnCalculateLoan = document.querySelector(
    "#btn-calculate-loan"
  ) as HTMLButtonElement;

  const STEP = 100;
  const MIN = Number(rangeInputEl.min);
  const MAX = Number(rangeInputEl.max);

  loanAmount = Number(rangeInputEl.value);

  const renderAmount = () => {
    amountEl.textContent = loanAmount.toLocaleString(currentUser.location);
    rangeInputEl.value = String(loanAmount);
    applyBtnEl.disabled = true;
    applyBtnEl.textContent = "Disabled";
    applyBtnEl.classList.add("btn-disabled");
  };

  minusBtn.addEventListener("click", () => {
    loanAmount = Math.max(MIN, loanAmount - STEP);
    renderAmount();
  });

  plusBtn.addEventListener("click", () => {
    loanAmount = Math.min(MAX, loanAmount + STEP);
    renderAmount();
  });

  rangeInputEl.addEventListener("input", (e) => {
    loanAmount = Number((e.target as HTMLInputElement).value);
    renderAmount();
  });

  btnCalculateLoan.addEventListener("click", () => {
    const months = loanTermSelect.value;
    if (!months) return;

    const { totalToPay, monthlyFee } = calculateLoan(loanAmount, +months);

    loanMonths = +months;
    loanTotalToPay = totalToPay;
    loanMonthFee = monthlyFee;

    monthsEl.textContent = loanMonths.toString();
    totalPayEl.textContent = `${symbol} ${loanTotalToPay}`;
    monthlyFeeEl.textContent = `${symbol} ${loanMonthFee}`;

    applyBtnEl.disabled = false;
    applyBtnEl.textContent = "Apply";
    applyBtnEl.classList.remove("btn-disabled");
  });

  renderAmount();
};

export const getLoanDetails = (): LoanResult => {
  return {
    months: loanMonths,
    totalToPay: loanTotalToPay,
    monthlyFee: loanMonthFee,
    loanAmount,
  };
};
