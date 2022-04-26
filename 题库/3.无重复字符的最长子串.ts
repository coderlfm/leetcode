function lengthOfLongestSubstring(s: string): number {
  const temp: string[] = [];
  let max = 0;

  for (let i = 0; i < s.length; i++) {

    // 只要发现数组中有重复的了，则从头开始逐次删除，直到将重复的字母删除
    while (temp.includes(s[i])) {
      temp.shift();
    }

    temp.push(s[i]);
    max = Math.max(max, temp.length); // 只记录最长的长度
  }

  return max;
}

console.log(lengthOfLongestSubstring('abcabcbb'));
