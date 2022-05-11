/**
 思路 num1 的元素后面是用0填充的，是空的，所以可以从两个数组中最后面取出较大的元素来进行填充
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i = m + n,
    num1Index = m - 1,
    num2Index = n - 1;

  // 遍历最长长度，依次从两个数组的最后面取出元素判断，哪个更大则将其填入
  while (i) {
    // 判断 num2最后面和num1最后面的元素谁大
    // 首先 num2Index 需要不为空，且nums2最后一位更大，或者num1已经空了
    while (i && num2Index >= 0 && (nums2[num2Index] > nums1[num1Index] || num1Index < 0)) {
      nums1[--i] = nums2[num2Index--];
    }

    // 进入到这里，说明是 num1数字更大
    // 最后一次 --i 之后i会等于0
    if (i > 0) nums1[--i] = nums1[num1Index--];
  }
}
const num1 = [0, 0, 3, 0, 0, 0, 0, 0, 0];
merge(num1, 3, [-1, 1, 1, 1, 2, 3], 6);
console.log(num1);
