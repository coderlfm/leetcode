export {};

function minimumAbsDifference(arr: number[]): number[][] {
  const minAbsMap = new Map<number, number[][]>();

  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 1; i++) {
    const abs = arr[i + 1] - arr[i];
    const list = minAbsMap.get(abs) ?? [];
    list.push([arr[i], arr[i + 1]]);
    minAbsMap.set(abs, list);
  }

  return minAbsMap.get(Math.min(...Array.from(minAbsMap.keys())))!;
}

// 官解思路，排序+一次循环
{
  function minimumAbsDifference(arr: number[]): number[][] {
    let result: number[][] = [];
    let min = Number.MAX_VALUE;

    arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length - 1; i++) {
      const abs = arr[i + 1] - arr[i];

      if (abs <= min) {
        if (abs < min) {
          min = abs;
          result = [];
        }
        result.push([arr[i], arr[i + 1]]);
      }
    }

    return result;
  }
}
