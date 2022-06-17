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

function mirrorTree(root: TreeNode | null): TreeNode | null {
  reverse(root);
  return root;
}

function reverse(root: TreeNode | null) {
  if (!root) return null;

  // 翻转两个子节点
  [root.left, root.right] = [root.right, root.left];

  mirrorTree(root.left);
  mirrorTree(root.right);
}
