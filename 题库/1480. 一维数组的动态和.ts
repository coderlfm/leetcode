export {}

function runningSum(nums: number[]): number[] {
  const result: number[] = [];
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
      result.push(sum += nums[i]);
  }
  return result;
};