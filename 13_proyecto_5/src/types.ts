type User = {
  username: string;
  password: string;
  name: string;
  surname: string;
  creditCardNum: string;
  expireData: string;
  cvv: string;
  currency: string;
  location: string;
  transactions: Transaction[];
};

type AuthState = {
  currentUser: User | null;
};

type Transaction = {
  category: string;
  type: "income" | "expense";
  date: string; // ISO string
  amount: number;
};

type CategoryOption = {
  value: string;
  text: string;
};

type LoanResult = {
  months?: number;
  totalToPay: number;
  monthlyFee: number;
  loanAmount: number;
};

export type { Transaction, User, AuthState, CategoryOption, LoanResult };
