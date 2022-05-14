function oneEditAway(first: string, second: string): boolean {
  let long = first.length > second.length ? first : second,
    short = first.length > second.length ? second : first,
    ans = 0;

  // 如果字符长度超过1，一次操作一定完不成，返回false
  if (long.length - short.length > 1) return false;

  // 先遍历短的字符串，然后长的字符串取相同索引进行比较，只允许有一次不匹配，
  for (let i = 0; i < short.length; i++) {
    if (short[i] !== long[i]) {
      // 如果两个字符不相等，则需要判断与下一个字符是否相等，如果依旧不相等，说明一次操作也无法完成
      if (short.length !== long.length && short[i] !== long[i + 1]) return false;

      if (ans) return false; // 如果再次进入，说明不符合
      ans++;

      // 只有长度不相等才需要截取，长度相等不需要截取，说明只需要 进行一次替换就可以
      if (short.length !== long.length) long = long.slice(0, i) + long.slice(i + 1);
    }
  }

  // 一般情况下循环结束还没有return，就说明这个字符可以一次性操作完成

  return true;
}

console.log(oneEditAway('teacher', 'bleacher'));
