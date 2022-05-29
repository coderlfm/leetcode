export {};

function findRepeatNumber(nums: number[]): number {
  let maxNum = nums[0],
    maxLength = 1;

  for (let i = 0; i < nums.length; i++) {
    let currNum = nums[i],
      currNumLength = 1;

    for (let j = i + 1; j < nums.length; j++) {
      if (currNum === nums[j]) currNumLength++;
    }

    if (currNumLength > maxLength) {
      maxLength = currNumLength;
      maxNum = currNum;
    }
  }

  return maxNum;
}

console.log(findRepeatNumber([3, 4, 2, 0, 0, 1]));
