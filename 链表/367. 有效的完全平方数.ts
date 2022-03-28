/**
367. 有效的完全平方数
给定一个 正整数 num ，编写一个函数，如果 num 是一个完全平方数，则返回 true ，否则返回 false 。

进阶：不要 使用任何内置的库函数，如  sqrt 。

 

示例 1：

输入：num = 16
输出：true
示例 2：

输入：num = 14
输出：false
 

提示：

1 <= num <= 2^31 - 1

思路 1.暴力查找
    2.二分查找
 */

// function isPerfectSquare(num: number): boolean {
//   if (num === 1) return true;

//   let i = 1;

//   while (i <= num / 2) {
//     if (i * i === num) return true;
//     i++;
//   }

//   return false;

// };

function isPerfectSquare(num: number): boolean {
  if (num === 1) return true;

  let left = 1,
    right = num;

  while (left <= right) {
    const middle = Math.floor((right - left) / 2) + left;

    if (middle * middle > num) {
      right = middle - 1;
    } else if (middle * middle < num) {
      left = middle + 1;
    } else {
      return true;
    }
  }

  return false;
}
