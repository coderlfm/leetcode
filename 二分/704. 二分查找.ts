/**
给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。


示例 1:

输入: nums = [-1,0,3,5,9,12], target = 9
输出: 4
解释: 9 出现在 nums 中并且下标为 4

 */

function search(nums: number[], target: number): number {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    // (right - left / 2) 是为了在当前小分段取中位，+left 是为了保证在 右侧查找的时候 middle 的正确性
    const middle = Math.floor(right - left / 2) + left;

    // 左边的都不满足
    if (nums[middle] < target) {
      left = middle + 1;

      // 右边的也不满足
    } else if (nums[middle] > target) {
      right = middle - 1;
    } else {
      return middle; // 相等
    }
  }

  // 招不到返回-1
  return -1;
}
search([-1, 0, 3, 5, 9, 12], 9);
