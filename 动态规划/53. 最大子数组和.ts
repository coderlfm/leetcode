function maxSubArray(nums: number[]): number {
  let total = 0,
    maxVal = nums[0];

  if (nums.length === 1) return maxVal;

  for (let i = 0; i < nums.length; i++) {
    // 这里要取 最大值是 为了将之前数值小得情况过滤掉，从当前数开始，重新计算
    // 这个值需要不停的累加，除非当前遍历到的数字比之前累加的都还要大 ()
    total = Math.max(nums[i] + total, nums[i]);
    // 记录之前累计最大的值，因为上一步有可能会把total的值变小， 例如  total = 1， nums[i] = -3; 计算之后total就会等于-2，所以需要把之前的最高值保留
    maxVal = Math.max(total, maxVal);
  }

  return maxVal;
}

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
