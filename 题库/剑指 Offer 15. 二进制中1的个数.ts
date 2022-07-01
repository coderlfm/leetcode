export {}

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
 var hammingWeight = function (n: number) {
  return Number(n).toString(2).split('').filter(item => item === '1').length;
};
