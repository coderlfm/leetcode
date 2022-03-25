/**
  给定一个已排序的链表的头 head ， 删除所有重复的元素，使每个元素只出现一次 。返回 已排序的链表 。
  输入：head = [1,1,2,3,3]
  输出：[1,2,3]
 */


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (!head) return head;

  let cur = head;
  while (cur.next) {
    if (cur.val === cur.next.val) {
      // 如果当前节点值和下一个节点值相等，则跳过下一个节点
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }

  // 返回head但是因为上一步的 cur 拿到的是head的引用地址，所以此时的hade 是删除重复元素后的链表
  return head;
};
