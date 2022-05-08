export {};

function longestPalindrome(s: string): string {
  let str = s[0],
    ans = s[0];
  for (let i = 1; i < s.length; i++) {
    const exists = str.indexOf(s[i]);
    // 如果存在,则从存在位置开始截取
    if (exists !== -1) {
      // 如果输入的是 "ccc" 则拼接的时候不需要截取，直接进行拼接
      if (s[i] === str[str.length - 1] && s[i] === str[0]) {
        str += s[i];

        // 然后判断遍历到的这小段回文字符串是否为最长的
        ans = str.length > ans.length ? str : ans;
      } else {
        str = str.slice(exists) + s[i];

        // 然后判断遍历到的这小段回文字符串是否为最长的
        ans = str.length > ans.length ? str : ans;

        // 每次找到一段回文字符串后，则置空，继续下一次查找
        str = '';
      }

      continue;
    }
    str += s[i];
  }

  return ans;
}

console.log(longestPalindrome('ccc'));
