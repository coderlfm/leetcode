class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if (!list1 && !list2) return null;

  if (!list1) return list2;

  if (!list2) return list1;

  // 哨兵节点
  const prehead = new ListNode();
  let pre: ListNode | null = prehead;

  // 遍历 list1 和 list2，只要有一个遍历结束则停止遍历
  while (list1 && list2) {
    // 判断 list1 和 list2 那个值更小
    if (list1.val <= list2.val) {
      // 如果是list1 更小，则将 下一项指向 list，然后list需要缩减掉当前这一节点
      pre!.next = list1;
      list1 = list1.next;
    } else {
      pre!.next = list2;
      list2 = list2.next;
    }

    // 每次对比完之后，需要同时更新更前节点
    pre = pre!.next;
  }

  // 只要其中一条链表为空，则将另外一条链表追加在后面
  if (!list1) pre!.next = list2;
  if (!list2) pre!.next = list1;

  return prehead.next;
}

const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

console.log(mergeTwoLists(list1, list2));
