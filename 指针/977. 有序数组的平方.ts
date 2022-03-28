/*
给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。

 

示例 1：

输入：nums = [-4,-1,0,3,10]
输出：[0,1,9,16,100]
解释：平方后，数组变为 [16,1,0,9,100]
排序后，数组变为 [0,1,9,16,100]
示例 2：

输入：nums = [-7,-3,2,3,11]
输出：[4,9,9,49,121]
 

提示：

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums 已按 非递减顺序 排序
 

进阶：

请你设计时间复杂度为 O(n) 的算法解决本问题

思路 使用头尾指针的方式

*/

function sortedSquares(nums: number[]): number[] {
  let start = 0,
    end = nums.length - 1,
    pos = nums.length - 1,
    ans: number[] = [];

  while (start <= end) {
    // 表示开头是负数
    // 每次遍历都会拿头部的和尾部的进行比较
    if (nums[start] * nums[start] > nums[end] * nums[end]) {
      // 如果头部的大于尾部的，则将其从后往前排放
      ans[pos] = nums[start] * nums[start];
      start++;
    } else {
      // 常规的排序，不存在负数的情况，按正常情况从后往前排
      ans[pos] = nums[end] * nums[end];
      end--;
    }

    // 每次放置完都需要改变一次索引 进行--
    pos--;
  }

  return ans;
}
