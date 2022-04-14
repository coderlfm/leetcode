function maximumWealth(accounts: number[][]): number {
  let maxCount = 0;

  for (let index = 0; index < accounts.length; index++) {
    const item = accounts[index];

    maxCount = Math.max(
      maxCount,
      item.reduce((prev, next) => prev + next, 0)
    );
  }
  return maxCount;
}

console.log(
  maximumWealth([
    [2, 8, 7],
    [7, 1, 3],
    [1, 9, 5],
  ])
);
