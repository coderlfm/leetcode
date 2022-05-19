/**
思路
1. 先排序
2. 再找中位数
3. 累加 其它数字到中位数的间隔
 */

function minMoves2(nums: number[]): number {
  nums = nums.sort((a,b) => a-b);
  const middle = nums[Math.floor(nums.length / 2)];
  console.log(middle);
  let ans = 0;

  for (let i = 0; i < nums.length; i++) {
    ans += nums[i] >= middle ? nums[i] - middle : middle - nums[i];
  }
  return ans;
}

minMoves2([1, 10, 2, 9]);
