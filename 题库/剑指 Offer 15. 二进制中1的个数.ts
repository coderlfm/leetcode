export {};

const hammingWeight = function (n: number) {
  return Number(n)
    .toString(2)
    .split('')
    .filter((item) => item === '1').length;
};
