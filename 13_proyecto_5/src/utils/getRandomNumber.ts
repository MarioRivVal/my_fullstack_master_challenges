export function getRandomNumber(maxValue: number, minDigits: number): string {
  const random = Math.floor(Math.random() * maxValue) + 1;
  return String(random).padStart(minDigits, "0");
}
