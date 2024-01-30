export function sum(a: number, b: number): number {
  if (a === 0 || b === 0) {
    throw new Error("Summand darf nicht 0 sein");
  }
  return a + b;
}
