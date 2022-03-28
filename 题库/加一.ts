/**
给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。

最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

你可以假设除了整数 0 之外，这个整数不会以零开头。

 

示例 1：

输入：digits = [1,2,3]
输出：[1,2,4]
解释：输入数组表示数字 123。
示例 2：

输入：digits = [4,3,2,1]
输出：[4,3,2,2]
解释：输入数组表示数字 4321。
示例 3：

输入：digits = [0]
输出：[1]
 

提示：

1 <= digits.length <= 100
0 <= digits[i] <= 9

 */
function plusOne(digits: number[]): number[] {
  let lastIndex = digits.length - 1;

  // 只去个位数
  digits[lastIndex] = (digits[lastIndex] + 1) % 10;

  // 如果这个数字小于9，或者这个数字是0-8 则直接返回
  if (digits[lastIndex] > 0) {
    return digits;
  }

  while (digits[lastIndex] === 0) {
    if (lastIndex === 0) {
      digits.unshift(1);
      return digits;
    }
    lastIndex--;
    digits[lastIndex] = (digits[lastIndex] + 1) % 10;
  }
  return digits;
}
plusOne([8, 9, 9, 9]);
