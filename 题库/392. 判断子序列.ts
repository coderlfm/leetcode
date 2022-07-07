export {};

function isSubsequence(s: string, t: string): boolean {
  if ((!s.length && t.length) || (!t.length && !s.length)) return true;
  if (!t.length && s.length) return false;

  let mark = 0;

  for (let i = 0; i < t.length; i++) {
    // 如果当前位匹配了，并且和需要找的长度一致，则直接return，否则继续找
    if (s[mark] === t[i]) {
      if (mark === s.length - 1) return true;
      mark++;
    }
  }

  return false;
}
