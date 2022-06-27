export {};

/**
[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]

官解思路， 从右上角开始找，如果当前值比target小，则向下一行找，如果比target大，则向左边行找，如果相等，则表示找到了，返回true
 */

function findNumberIn2DArray(matrix: number[][], target: number): boolean {
  if (!matrix[0][0]) return false;

  let rowI = 0,
    colI = matrix[0].length - 1;

  while (rowI < matrix.length && colI >= 0) {
    if (matrix[rowI][colI] > target) colI--;
    else if (matrix[rowI][colI] < target) rowI++;
    else return true;
  }

  return false;
}

findNumberIn2DArray([[-1, 3]], 3);
