export const maskCardNumber = (cardNum: string): string => {
  const digitsOnly = cardNum.replace(/\s+/g, "");
  const masked = digitsOnly
    .split("")
    .map((char, index) => (index < digitsOnly.length - 4 ? "•" : char))
    .join("");

  return masked.replace(/(.{4})/g, "$1 ").trim();
};
