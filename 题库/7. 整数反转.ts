export {};

function reverse(x: number) {
  let ans = 0;

  while (x) {
    // 每次取到个位数，然后与原来的进行相加
    ans = ans * 10 + (x % 10);

    // 判断是否超过边界
    if (ans < Math.pow(-2, 31) || ans > Math.pow(2, 31) - 1) return 0;

    // 如果是负数，则需要向上取整，正数需要向下取整
    x = x <= 0 ? Math.ceil(x / 10) : Math.floor(x / 10);
  }

  return ans;
}

console.log(reverse(-123));
