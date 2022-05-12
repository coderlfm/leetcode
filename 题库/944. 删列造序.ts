function minDeletionSize(strs: string[]): number {
  const col = strs[0].length; // 题目保证每个子串的长度是一致的，所以取第0个
  let ans = 0; // 需要删除的列数

  for (let i = 0; i < col; i++) {
    for (let j = 1; j < strs.length; j++) {
      // 如果前一个大于后一个，则表示这一列需要删除 会转换成 unicode码后再进行比较
      if (strs[j - 1][i] > strs[j][i]) {
        ans++;
        break;
      }
    }
  }

  return ans;
}

console.log(minDeletionSize(['zyx', 'wvu', 'tsr']));
