abstract class SolutionType {
  pick: (target: number) => number;
}

{
  // 鱼塘抽样/蓄水池抽样， 取到的几率为 1/重复个数
  class Solution implements SolutionType {
    nums: number[] = [];

    constructor(nums: number[]) {
      this.nums = nums;
    }

    pick(target: number): number {
      let i = 0,
        count = 0,
        ans = 0; // 记录答案

      for (; i < this.nums.length; i++) {
        // 如果当前项与目标项一致
        if (this.nums[i] === target) {
          count++; // 则将count++
          // 第一次进入一定会是0，所以保底结果就是第一项 因为 任何数 * 1 都等于它本身，(0.3 * 1) 再向下取整后就是 0
          if (Math.floor(Math.random() * count) === 0) ans = i;
        }
      }

      return ans;
    }
  }

  const solution1 = new Solution([1, 2, 3, 3, 3]);
  // console.log(solution1.pick(3));
  // console.log(solution1.pick(3));
  // console.log(solution1.pick(3));
  // console.log(solution1.pick(3));
}

{
  class Solution implements SolutionType {
    nums: number[] = [];
    ops: Map<number, number[]>; // 记录所有 数字的索引

    constructor(nums: number[]) {
      this.ops = new Map();
      nums.forEach((item, index) => {
        if (!this.ops.has(item)) this.ops.set(item, []);
        this.ops.get(item)!.push(index);
      });
    }

    pick(target: number): number {
      const nums = this.ops.get(target);
      let ans = 0;
      for (let i = 0; i < nums!.length; i++) {
        // 如果计算出来的值为0，则将其设置为最后返回的值，第一次一定会进去
        if (Math.floor(Math.random() * (i + 1)) === 0) {
          ans = nums![i]; // 取到当前的索引
        }
      }

      return ans;
    }
  }
  const solution1 = new Solution([1, 2, 3, 3, 3]);
  console.log(solution1.pick(3));
  console.log(solution1.pick(3));
  console.log(solution1.pick(3));
  console.log(solution1.pick(3));
}
