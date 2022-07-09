export {};

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function middleNode(head: ListNode | null): ListNode | null {
  if (!head) return null;

  let index = 0;
  const MAP: Record<number, ListNode> = {};

  while (head) {
    MAP[++index] = head;
    head = head.next;
  }

  return MAP[Math.floor(index / 2) + 1];
}

middleNode(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))));
