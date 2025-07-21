export const getCurrencySymbol = (code: string, locale = "en-US"): string => {
  const parts = (0).toLocaleString(locale, {
    style: "currency",
    currency: code,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  console.log(parts);
  return parts.replace(/\d|\s/g, "");
};
