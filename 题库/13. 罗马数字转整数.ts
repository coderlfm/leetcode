function romanToInt(s: string): number {
  // 常规数字
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  // 额外数字
  const other = {
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };

  let num = 0; // 转换后的数字
  let len = s.length;
  for (let i = 0; i < len; i++) {
    // 遍历字符串
    // 初始化当前的罗马数字为0
    // 获取当前罗马数字 和 额外的情况
    let cur = 0,
      key = s[i];

    // 避免下标越界
    if (i < len - 1 && other[key + s[i + 1]]) {
      cur = other[key + s[i + 1]];

      // 如果是特殊的罗马数字，因为它占了两个字符，所以索引需要再加一
      i++;
    } else {
      // 常规罗马数字
      cur = map[key];
    }

    // 将每次的罗马数字相加
    num += cur;
  }

  return num;
}
