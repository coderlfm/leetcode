/*
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。

示例 2：

输入：s = "()[]{}"
输出：true

示例 4：

输入：s = "([)]"
输出：false

*/

function isValid(s: string): boolean {
  const k: { [key: string]: string } = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  const arr: string[] = [];

  for (const val of s) {
    // 左括号
    if (val in k) {
      // 如果当前字符是左括号，则将其对应的右括号push进去
      arr.push(k[val]);
      // 右括号
    } else {
      // 如果当前字符是右括号，则从之前记录的数组中将最后一个取出来，判断是否和当前的相等，如果相等则抵消
      const prev = arr[arr.length - 1];
      if (prev === val) arr.pop();
      else return false;
    }
  }

  // 如果length 有值，说明还有没有抵消掉的左括号，返回false
  return !arr.length;
}

console.log(isValid('(){}}{'));
