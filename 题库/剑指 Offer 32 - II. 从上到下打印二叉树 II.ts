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

{
  // 只击败了5%的用户
  function levelOrder(root: TreeNode | null): number[][] {
    if (!root) return [];

    const result = [[root.val]],
      queue = [[root]];

    while (queue.length) {
      const preheadQueue = queue.shift();
      if (!preheadQueue?.length) continue;
      const row = [],
        rowQueue = [];
      for (let i = 0; i < preheadQueue.length; i++) {
        const prehead = preheadQueue[i];
        if (prehead?.left) {
          rowQueue.push(prehead.left);
          row.push(prehead.left.val);
        }
        if (prehead?.right) {
          rowQueue.push(prehead.right);
          row.push(prehead!.right.val);
        }
      }
      result.push(row);
      queue.push(rowQueue);
    }

    return result;
  }
}

{
  // 官解
  function levelOrder(root: TreeNode | null): number[][] {
    if (!root) return [];

    const result: number[][] = [],
      queue = [root];

    while (queue.length) {
      const length = queue.length; // 必须在这里先缓存一下此次需要遍历的长度
      result.push([]);

      // 精髓在于内层循环的结束条件，每次只会遍历完当前层级的节点
      for (let i = 0; i < length; i++) {
        const node = queue.shift();
        result[result.length - 1].push(node!.val);
        if (node?.left) queue.push(node.left);
        if (node?.right) queue.push(node.right);
      }
    }

    return result;
  }
}
