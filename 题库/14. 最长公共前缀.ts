function longestCommonPrefix(strs: string[]): string {
  let pre = strs[0];

  for (let i = 1; i < strs.length; i++) {
    let j = 0;
    for (; j < pre.length && j < strs[i].length; j++) {
      // 只要有一个字符不匹配，则直接跳出当前循环，并将其设置为最长的相等位置
      if (!strs[i][j].startsWith(pre[j])) break;
    }

    // 如果相等则记录当前相等的位置
    pre = pre.slice(0, j);
  }

  return pre;
}

console.log('jieguo:', longestCommonPrefix(['a']));
