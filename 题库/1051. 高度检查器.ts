export {};

function heightChecker(heights: number[]): number {
  if (!heights.length) return 0;

  const result = [...heights].sort((a, b) => a - b);
  let ans = 0;

  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== result[i]) ans++;
  }

  return ans;
}
