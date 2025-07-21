export const convertCurrency = async (
  amount: number,
  from: string,
  to: string
): Promise<number> => {
  try {
    const url = `https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`;

    const res = await fetch(url);
    if (!res.ok) throw new Error("Currency API request failed");

    const data = await res.json();
    const result = data.rates?.[to];
    if (result === undefined) {
      throw new Error("Currency pair not found in API response");
    }

    return result;
  } catch (error) {
    console.error("Currency API error:", error);
    throw error;
  }
};
