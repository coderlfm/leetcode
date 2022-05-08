export {};
function longestPalindrome(s: string): string {
  if (s == null || s.length < 2) {
    return s;
  }

  let strLen = s.length;
  let maxStart = 0; //最长回文串的起点
  let maxEnd = 0; //最长回文串的终点
  let maxLen = 1; //最长回文串的长度

  const dp: boolean[][] = [[]];

  for (let i = 0; i < s.length; i++) {
    if (!dp[i]) dp[i] = [];
    dp[i][i] = true;
  }

  for (let r = 1; r < strLen; r++) {
    for (let l = 0; l < r; l++) {
      if (s.charAt(l) == s.charAt(r) && (r - l <= 2 || dp[l + 1][r - 1])) {
        dp[l][r] = true;
        if (r - l + 1 > maxLen) {
          maxLen = r - l + 1;
          maxStart = l;
          maxEnd = r;
        }
      }
    }
  }
  return s.substring(maxStart, maxEnd + 1);
}

console.log(longestPalindrome('babad'));
