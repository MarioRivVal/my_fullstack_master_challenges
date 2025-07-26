import LocaleCurrency from "locale-currency";

export const getUserLocale = (): string => {
  return navigator.language || "en-US";
};

export const getUserCurrency = () => {
  const locale = getUserLocale();
  return LocaleCurrency.getCurrency(locale) || "USD";
};
