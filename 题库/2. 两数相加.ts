class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
/**
 思路和 989. 数组形式的整数加法 是一致的，如果数字大于10，则放到 进的1位放到下一次去计算
 */
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  // 结果链表
  const result = new ListNode();
  // 哨兵节点
  let prehead: ListNode | null = result;

  // 将最长的链表遍历结束
  while (l1 || l2) {
    // 如果其中一条链表的更短，则其后续的 加数以0补齐
    let num = (l1?.val ?? 0) + (l2?.val ?? 0);

    // 如果和 大于等于10，则将 进的1位放到下一次去计算
    if (num >= 10) {
      if (l1?.next) l1!.next.val++;
      else l1!.next = new ListNode(1); // 满10进1，所以下一位需要进一， 这种情况只会出现在 原链表的长度不够，需要加一的情况，如 9,9 + 1,1

      // 将当前的和减去10
      num -= 10;
    }

    // 得到当前的和
    prehead!.val = num;

    // 继续往后遍历
    l1 = l1?.next ?? null;
    l2 = l2?.next ?? null;

    // 只要任意一条链表还没到尾部，则将 result 链表的长度增加到相同的长度
    prehead = l1 || l2 ? (prehead!.next = new ListNode()) : null;
  }

  return result;
}

console.log(
  addTwoNumbers(new ListNode(2, new ListNode(4, new ListNode(3))), new ListNode(5, new ListNode(6, new ListNode(4))))
);

export {};
