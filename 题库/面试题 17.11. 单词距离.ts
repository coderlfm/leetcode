export {};

// 思路，用两个索引来标记需要查找的两个单词，然后每次遍历完后取距离最短的

function findClosest(words: string[], word1: string, word2: string): number {
  const len = words.length;

  if (!len || len === 1) return 0;

  let ans = len;
  let index1: number = -1,
    index2: number = -1;

  for (let i = 0; i < len; i++) {
    if (words[i] === word1) index1 = i;
    else if (words[i] === word2) index2 = i;

    if (index1 > 0 && index2 > 0) {
      // 取绝对值的方式就不需要关注减数和被减数了
      ans = Math.min(Math.abs(index1 - index2), ans);
    }
  }

  return ans;
}

console.log(findClosest(['I', 'am', 'a', 'student', 'from', 'a', 'university', 'in', 'a', 'city'], 'a', 'student'));
