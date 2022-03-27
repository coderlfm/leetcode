/*
符合下列属性的数组 arr 称为 山脉数组 ：
arr.length >= 3
存在 i（0 < i < arr.length - 1）使得：
arr[0] < arr[1] < ... arr[i-1] < arr[i]
arr[i] > arr[i+1] > ... > arr[arr.length - 1]
给你由整数组成的山脉数组 arr ，返回任何满足 arr[0] < arr[1] < ... arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1] 的下标 i 。

 

示例 1：

输入：arr = [0,1,0]
输出：1
示例 2：

输入：arr = [0,2,1,0]
输出：1
示例 3：

输入：arr = [0,10,5,2]
输出：1
示例 4：

输入：arr = [3,4,5,1]
输出：2
示例 5：

输入：arr = [24,69,100,99,79,78,67,36,26,19]
输出：2
 

提示：

3 <= arr.length <= 104
0 <= arr[i] <= 106
题目数据保证 arr 是一个山脉数组
 

进阶：很容易想到时间复杂度 O(n) 的解决方案，你可以设计一个 O(log(n)) 的解决方案吗？

*/

// function peakIndexInMountainArray(arr: number[]): number {
//   let left = 0, right = arr.length - 1;

//   while (left <= right) {
//     const middle = Math.floor((right - left) / 2) + left;

//     // 说明封顶在左边 例如 79 78 67
//     if (arr[middle] > arr[middle + 1] && arr[middle] < arr[middle - 1])
//       right = middle;
//     // 说明封顶在右边 例如 3 4 5
//     else if (arr[middle] > arr[middle - 1] && arr[middle] < arr[middle + 1])
//       left = middle;
//     // 否则则表示找到了封顶 例如 69 100 70
//     else return middle;
//   }

// };

function peakIndexInMountainArray(arr: number[]): number {
  let left = 1,
    right = arr.length - 2,
    ans = 0;

  while (left <= right) {
    const middle = Math.floor((right - left) / 2) + left;

    // 说明封顶在左边 例如 79 78 67
    if (arr[middle] > arr[middle + 1]) {
      right = middle - 1;
      ans = middle;
    }
    // 说明封顶在右边 例如 3 4 5
    else left = middle + 1;
  }

  return ans;
}
