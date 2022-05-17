export {};
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const [long, short] = nums1.length > nums2.length ? [nums1, nums2] : [nums2, nums1];

  // 先排序
  let i = 0,
    j = 0,
    arr = [];

  // 要遍历较长的数组
  for (; i < long.length; i++) {
    // 如果较短的数组比较长的小，则将小的先插入，然后下一轮遍历继续比较
    if (short[j] < long[i]) {
      arr.push(short[j++]);
      i = i - 1;
    } else {
      arr.push(long[i]);
    }
  }

  // 这种情况会出现在，较少的和数组都遍历完了，但是较短的数组有些数字过大，一直没有找到位置，插入，所以需要进行合并
  if (j !== short.length) {
    arr = [...arr, ...short.slice(j)];
  }

  // 再二分
  const middle = (arr.length - 1) / 2,
    left = Math.floor(middle),
    right = Math.ceil(middle);

  if (left !== right) {
    return (arr[left] + arr[right]) / 2;
  }

  return arr[middle];
}

console.log(findMedianSortedArrays([1, 2], [-1, 3]));
