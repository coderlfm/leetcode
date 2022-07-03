export {};

function exchange(nums: number[]): number[] {
  if (!nums.length) return [];

  const result: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      result.push(nums[i]);
    } else {
      result.unshift(nums[i]);
    }
  }

  return result;
}
