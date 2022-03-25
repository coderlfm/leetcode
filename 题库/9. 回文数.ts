// 方式一 通过字符串反转
// function isPalindrome(x: number): boolean {
//   const originStr = x + '';
//   let str = ''

//   for (let i = originStr.length - 1; i >= 0; i--) {
//     str += originStr[i];
//   }

//   return str === originStr;
// };

//
function isPalindrome(x: number): boolean {
  // 如果是负数
  // 或者这个数是0结尾，但是这个数字又不是 0 ，则一定不是回文整数
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

  let newNumber = 0,
    originNumber = x;
  while (x > 0) {
    // 每次取出传入数字的个位(最后一位)， 将反转之后的数字 * 10 变成百位数 进行相加 例如 (12 * 10) + 1
    newNumber = newNumber * 10 + Math.floor(x % 10);

    // 每次遍历后将传入的数字 除以10，(去掉末尾的数字)
    x = Math.floor(x / 10);
    /**
      1
      12

      12
      1

      121
      0
     */
  }

  return newNumber === originNumber;
}
