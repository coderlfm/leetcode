export {};

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function largestValues(root: TreeNode | null): number[] {
  if (!root) return [];
  const list: number[][] = [];
  deep(root, list, 0);

  return list.map((item) => Math.max(...item));
}

function deep(root: TreeNode | null, list: number[][], index: number) {
  if (!root) return;

  if (root.left) deep(root.left, list, index + 1);
  if (root.right) deep(root.right, list, index + 1);

  (list[index] = list[index] ?? []).push(root?.val);
}
