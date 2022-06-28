export {};

function minArray(numbers: number[]): number {
  return numbers.sort((a, b) => a - b)[0];
}
