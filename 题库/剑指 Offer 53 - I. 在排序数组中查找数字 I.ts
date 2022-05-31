export {};

/**
统计一个数字在排序数组中出现的次数。

示例 1:

输入: nums = [5,7,7,8,8,10], target = 8
输出: 2

思路：因为题目保证是排序后的数组，所以遍历的时候如果当前元素大于target，则不需要再向后进行查找了
 */

function search(nums: number[], target: number): number {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] > target) return count;
      if (nums[i] === target) count++;
  }

  return count;
};