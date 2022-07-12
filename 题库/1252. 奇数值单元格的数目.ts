export {};

interface Item {
  value: number;
  isOdd: boolean;
}

function createDefaultVal() {
  return { value: 0, isOdd: false };
}

function oddCells(m: number, n: number, indices: number[][]): number {
  let oddCount = 0;

  const matrix: Item[][] = Array.from(new Array(m), () => Array.from(new Array(n), () => ({ value: 0, isOdd: false })));

  indices.forEach(([row, column]) => {
    
    // 将当前行标记📌 +1
    for (let index = 0; index < matrix[row].length; index++) {
      const newVal = matrix[row][index].value + 1;
      const newIsOdd = newVal % 2 !== 0;
      if (!matrix[row][index].isOdd && newIsOdd) oddCount++;
      else if (matrix[row][index].isOdd && !newIsOdd) oddCount--;
      debugger;
      matrix[row][index] = { isOdd: newIsOdd, value: newVal };
    }

    // 将当前列标记📌 +1
    for (let index = 0; index < matrix.length; index++) {
      const newVal = matrix[index][column].value + 1;
      const newIsOdd = newVal % 2 !== 0;
      if (!matrix[index][column].isOdd && newIsOdd) oddCount++;
      else if (matrix[index][column].isOdd && !newIsOdd) oddCount--;

      matrix[index][column] = { isOdd: newIsOdd, value: newVal };
    }
  });

  return oddCount;
}

oddCells(2, 3, [
  [0, 1],
  [1, 1],
]);
