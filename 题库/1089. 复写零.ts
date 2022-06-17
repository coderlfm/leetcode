export {};

function duplicateZeros(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      wirte(arr, i);
      i = i + 1;
    }
  }
}

function wirte(arr: number[], start: number): void {
  for (let i = arr.length - 1; i > start; i--) {
    arr[i] = arr[i - 1];
  }
}

duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]);
