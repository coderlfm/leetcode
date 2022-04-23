var addToArrayForm = function (num: number[], k: number): number[] {
  let res = [];
  const n = num.length;

  // 必须遍历将 num 遍历完，这样才可以避免数组数字过小导致多于的数字没法加的情况，
  for (let i = n - 1; i >= 0; --i) {
    let sum = num[i] + (k % 10); // 每次从后往前计算，取出个位数进行相加
    k = Math.floor(k / 10); // 每次计算完把个位数舍去

    // 如果计算结果大于等于10，则将 进的1位放到k中 下一次再去计算
    if (sum >= 10) {
      k++;
      sum -= 10; // 因为满10 进1，进的1位放到了下一次计算，所以当前这次的结果需要减去10
    }

    // 将其按倒序push到数组中
    res.push(sum);
  }

  // 避免数组原有的位数不够放的情况，需要 余下的数字k一个一个push到数组中
  // 例如 [2,1,5] 806
  for (; k > 0; k = Math.floor(k / 10)) {
    res.push(k % 10);
  }

  // 最后将数组顺序颠倒，得到一个相加后正序的数字数组
  res.reverse();
  return res;
};

addToArrayForm([2, 1, 5], 806);
