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

// 官解
function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];

  const result: number[][] = [],
    queue = [root];

  let isLeft = true; // 标记奇偶行，奇数从左往右，偶数从右往左输出

  while (queue.length) {
    const length = queue.length; // 必须在这里先缓存一下此次需要遍历的长度
    result.push([]);

    // 精髓在于内层循环的结束条件，每次只会遍历完当前层级的节点
    for (let i = 0; i < length; i++) {
      const node = queue.shift();

      // 如果是奇数则从左往右输出
      if (isLeft) {
        result[result.length - 1].push(node!.val);
      } else {
        // 偶数则从右往左输出，每次把最后的值插到最前面
        result[result.length - 1].unshift(node!.val);
      }
      if (node?.left) queue.push(node.left);
      if (node?.right) queue.push(node.right);
    }

    isLeft = !isLeft; // 每次遍历完当前行后取反
  }

  return result;
}
