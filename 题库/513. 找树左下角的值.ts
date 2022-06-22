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

/*
找二叉树，最底层最靠左边的数字, 深度优先遍历，用一个索引记录遍历的层数，然后递归向下查找每次往下一级，索引加1
最后出栈的时候，如果left大于等于right，则将left 设置为最大的
*/

function findBottomLeftValue(root: TreeNode | null): number {
  if (!root) return -1;

  return deep(root)![0];
}

type nodeType = [number, number, 'left' | 'right'] | undefined;

function deep(root: TreeNode, index: number = 0, type?: 'left' | 'right'): nodeType {
  let left: nodeType, right: nodeType;

  if (root?.left) left = deep(root.left, index + 1, 'left');
  if (root?.right) right = deep(root.right, index + 1, 'right');

  if (!root.left && !root.right) return [root.val, index, type ?? 'left'];

  if (!left?.length && right?.length) return right;
  else if (!right?.length && left?.length) return left;
  else return left![1] >= right![1] ? left! : right!;
}

findBottomLeftValue(new TreeNode(2, new TreeNode(1), new TreeNode(3)));
