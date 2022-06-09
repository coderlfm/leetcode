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


/**
BFS
思路：不能用递归的方式做，转成迭代的方式
 */
function levelOrder(root: TreeNode | null): number[] {
  if (!root) return [];

  const queue: TreeNode[] = [root];
  let result: number[] = [root.val];
  do {
    const curr = queue.shift();
    if (curr?.left) {
      result.push(curr.left.val);
      queue.push(curr.left);
    }
    if (curr?.right) {
      result.push(curr.right.val);
      queue.push(curr.right);
    }
  } while (queue.length);

  return result;
}
