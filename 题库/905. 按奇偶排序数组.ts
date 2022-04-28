export {};
{
  function sortArrayByParity(nums: number[]): number[] {
    // // 新建一个和原数组长度一致的结果数组
    const ans = new Array(nums.length).fill(0);

    // 最左侧和最右侧指针
    let left = 0,
      right = nums.length - 1;

    for (let index = 0; index < nums.length; index++) {
      // 如果这个数字是偶数，则往最左侧插入，否则往最右侧进行插入
      if (nums[index] % 2 === 0) ans[left++] = nums[index];
      else ans[right--] = nums[index];
    }

    return ans;
  }
}

{
  function sortArrayByParity(nums: number[]): number[] {
    const len = nums.length;
    let l = 0,
      r = len - 1;
    while (l < r) {
      // 一直寻找到左边的奇数，
      while (l < r && nums[l] % 2 == 0) l++;
      // 一直寻找到右边的偶数
      while (l < r && nums[r] % 2 == 1) r--;

      // 如果 左边指针和右边指针相等，表示整个数组遍历完了
      if (l >= r) break;

      // 将左右的奇,偶数 原地交换
      let tmp = nums[l];
      nums[l] = nums[r];
      nums[r] = tmp;
    }
    return nums;
  }
  console.log(sortArrayByParity([2, 1, 2, 4]));
}
