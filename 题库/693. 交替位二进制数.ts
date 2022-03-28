/*
给定一个正整数，检查它的二进制表示是否总是 0、1 交替出现：换句话说，就是二进制表示中相邻两位的数字永不相同。

 

示例 1：

输入：n = 5
输出：true
解释：5 的二进制表示是：101
示例 2：

输入：n = 7
输出：false
解释：7 的二进制表示是：111.

思路：先将数字转换成二进制，然后遍历 第i项是否等于i+1项，等于的话表示出现相同，返回 false
*/

function hasAlternatingBits(n: number): boolean {
  if (n === 0 || n === 1) return true;

  const binary = parseInt(n + '').toString(2);

  for (let i = 0; i < binary.length - 1; i++) {
    if (binary[i] === binary[i + 1]) return false;
  }

  return true;
}
