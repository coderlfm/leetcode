export {};

function majorityElement(nums: number[]): number {
  const numberMap = new Map<number, number>();
  const middle = nums.length / 2;
  
  for (let i = 0; i < nums.length; i++) {
    if (numberMap.has(nums[i])) {
      const newVal = numberMap.get(nums[i])! + 1;
      if (newVal > middle) return nums[i];
      numberMap.set(nums[i], newVal);
    } else numberMap.set(nums[i], 1);
  }

  return Array.from<number>(numberMap.keys()).find((key) => numberMap.get(key)! > middle)!;
}

majorityElement([-1, 100, 2, 100, 100, 4, 100]);
