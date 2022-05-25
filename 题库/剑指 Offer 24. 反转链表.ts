export {};

/**
反转链表
思路： 用一个新的链表，每次遍历的时候把最新的值放到这个链表的头部，然后返回这个链表
 */
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null,
    curr = head;

  while (curr) {
    const next = curr.next; // 先拿到next值
    curr.next = prev; // 将 当前的最前面节点放在第二个节点 (这一步操作不会影响 上一行)
    prev = curr; // 每次遍历将新遍历到的节点放在最前面
    curr = next; // 遍历下一次
  }

  return prev;
}
