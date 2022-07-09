export {};

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function detectCycle(head: ListNode | null): ListNode | null {
  if (!head) return null;

  let index = 0;
  const listNodeMap: Map<ListNode, number> = new Map();

  while (head) {
    if (!listNodeMap.has(head)) listNodeMap.set(head, index++);
    else return head;

    head = head.next;
  }

  return null;
}
