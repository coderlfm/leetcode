/**
解法1： 将数组倒序
解法2： 新建一个数组，将之前的数组当做栈，从中一个一个取出到新数组中 (耗时更短)
 */

export {};

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

{
  function reversePrint(head: ListNode | null): number[] {
    if (!head) return [];

    const result: number[] = [];
    let prehead: ListNode | null = head;

    while (prehead) {
      result.push(prehead.val);
      prehead = prehead.next;
    }

    // 如果数组长度-1 是奇数，则
    let middle =
      (result.length - 1) % 2 === 0 ? Math.ceil((result.length - 1) / 2) : Math.floor((result.length - 1) / 2);

    for (let i = 0, j = 1; i <= middle; i++) {
      let temp = result[i];
      result[i] = result[result.length - j];
      result[result.length - j] = temp;
      j++;
    }

    return result;
  }
}
{
  function reversePrint(head: ListNode | null): number[] {
    if (!head) return [];

    const result: number[] = [];
    const ans: number[] = [];

    let prehead: ListNode | null = head;

    while (prehead) {
      result.push(prehead.val);
      prehead = prehead.next;
    }

    for (let i = 0; i < result.length; i++) {
      ans.push(result[result.length - (i + 1)]!);
    }

    return ans;
  }
  
  reversePrint(new ListNode(1, new ListNode(3, new ListNode(2))));
}
