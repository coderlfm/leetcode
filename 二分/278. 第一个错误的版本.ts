/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function (isBadVersion: any) {
  let version: number;
  return function (n: number): number {
    let current = n;
    while (1) {
      if (isBadVersion(current)) {
        version = current--;
      } else {
        return version;
      }
    }
  };
};

/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function (isBadVersion: any) {
  let version: number;
  return function (n: number): number {
    let left = 1,
      right = n;

    while (left <= right) {
      const middle = Math.floor((right - left) / 2) + left;

      if (isBadVersion(middle)) {
        // 表示是错误的版本，应该继续往低版本找
        right = middle - 1;
        // 每次将找到的最低版本记录
        version = middle;
      } else {
        left = middle + 1;
      }
    }

    return version;
  };
};
