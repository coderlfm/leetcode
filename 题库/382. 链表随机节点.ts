class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

{
  class Solution {
    nums: number[];

    constructor(head: ListNode | null) {
      this.nums = [];
      // 遍历这个链表，将其转为数组
      for (let prehead = head; prehead !== null; prehead = prehead.next) {
        this.nums.push(prehead.val);
      }
    }

    getRandom(): number {
      return this.nums[Math.floor(Math.random() * this.nums.length)];
    }
  }

  const solution1 = new Solution(
    new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))))
  );

  // console.log(solution1.getRandom());
  // console.log(solution1.getRandom());
  // console.log(solution1.getRandom());
  // console.log(solution1.getRandom());
  // console.log(solution1.getRandom());
}

{
  class Solution {
    head: ListNode | null;

    constructor(head: ListNode | null) {
      this.head = head;
    }

    getRandom(): number {
      let head = this.head,
        ans = 0,
        count = 0;

      while (head) {
        count++;
        // 水塘抽样，如果当前项 计算出来的值为0，则将其设置为结果
        if (Math.floor(Math.random() * count) === 0) ans = head.val;
        head = head.next;
      }

      return ans;
    }
  }

  const solution1 = new Solution(
    new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))))
  );

  console.log(solution1.getRandom());
  console.log(solution1.getRandom());
  console.log(solution1.getRandom());
  console.log(solution1.getRandom());
  console.log(solution1.getRandom());
}

export {};
