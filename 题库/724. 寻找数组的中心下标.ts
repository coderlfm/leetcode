export {};

function pivotIndex(nums: number[]): number {
  const total = nums.reduce((a, b) => a + b, 0);
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    // 因为左侧和右侧的和计算时不需要将中心下标计算进去
    if (sum * 2 + nums[i] === total) return i;

    sum += nums[i];
  }

  return -1;
}
