/*
给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

请必须使用时间复杂度为 O(log n) 的算法。

 

示例 1:

输入: nums = [1,3,5,6], target = 5
输出: 2
示例 2:

输入: nums = [1,3,5,6], target = 2
输出: 1
示例 3:

输入: nums = [1,3,5,6], target = 7
输出: 4

*/

function searchInsert(nums: number[], target: number): number {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    const middle = Math.floor((right - left) / 2) + left;

    // 如果小于，说明要从右边查找
    if (nums[middle] < target) left = middle + 1;
    // 否则从左边查找，如果没有合适的位置，则会出现 right 小于 left 的情况，退出循环，然后将left作为要插入的索引
    else right = middle - 1;
  }

  // 如果找不到，则返回要插入的下标
  return left;
}

searchInsert([1, 3], 0);
