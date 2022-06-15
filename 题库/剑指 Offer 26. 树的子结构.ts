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

function isSubStructure(A: TreeNode | null, B: TreeNode | null): boolean {
  if (!A || !B) return false;
  return deep(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B);
}

function deep(A: TreeNode | null, B: TreeNode | null): boolean {

  // 如果 B 到叶子节点了，则说明匹配
  if (B === null) return true;
  if (A === null || A.val != B.val) return false; // 如果A 到叶子节点了，或者A和B的值不一致，name就没有必要继续比较了

  // 如果有一个值相等，则继续递归比较，每次会向下比较左右两边的值，如果一直到Bde叶子节点都是true，则会将函数弹出栈，然后继续从没比较到的地方再进行比较
  // 所以可以解决 A [-2,1] B [-2,1,-2] 这种情况
  return deep(A.left, B.left) && deep(A.right, B.right);
}

// isSubStructure(
//   new TreeNode(1, new TreeNode(0, new TreeNode(-4), new TreeNode(-3)), new TreeNode(1)),
//   new TreeNode(1, new TreeNode(-4))
// );
