export {};

function findPairs(nums: number[], k: number): number {
  const mapVal = new Map();
  const set = new Set();

  for (let i = 0; i < nums.length; i++) {
    mapVal.set(nums[i], i);
  }

  nums.forEach((item, index) => {
    // 如果map中有符合条件的值，并且不是自身
    if (mapVal.has(k + item) && mapVal.get(k + item) !== index) {
      // 去除同样条件的数对
      if (!set.has(`${k},${item}`)) set.add(`${k},${item}`);
    }
  });

  return set.size;
}
