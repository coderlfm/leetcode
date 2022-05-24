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

function isUnivalTree(root: TreeNode | null): boolean {

  if(!root) return true;
  
  // 如果左节点有值，则去判断左节点是否和当前值相等
  if(root?.left) {
    if(root.val !== root.left.val) return false;
    if (!isUnivalTree(root.left)) return false
  }

  if(root?.right) {
    if(root.val !== root.right.val) return false;
    if (!isUnivalTree(root.right)) return false
  }

  return true;
}


