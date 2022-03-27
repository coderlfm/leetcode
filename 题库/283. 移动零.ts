/** 
给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

请注意 ，必须在不复制数组的情况下原地对数组进行操作。

 

示例 1:

输入: nums = [0,1,0,3,12]
输出: [1,3,12,0,0]

*/

//  function moveZeroes(nums: number[]): void {
//   let fast = 0;
//   let slow = 0;

//   const forwardingAddress = new Map();

//   for (; fast < nums.length; fast++) {
//     if (nums[fast] !== 0) {
//       forwardingAddress.set(fast, slow);
//       slow++;
//     }
//   }

//   for (const [oldIndex, newIndex] of forwardingAddress) {
//     nums[newIndex] = nums[oldIndex];

//     if (newIndex !== oldIndex) nums[oldIndex] = 0;
//   }

// };

/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let fast = 0;
  let slow = 0;

  for (; fast < nums.length; fast++) {
    if (nums[fast] !== 0) {
      nums[slow++] = nums[fast];
    }
  }

  for (let i = slow; i < nums.length; i++) {
    nums[i] = 0;
  }
}
