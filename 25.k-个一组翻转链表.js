/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
 */

// https://leetcode-cn.com/problems/reverse-nodes-in-k-group/solution/tu-jie-kge-yi-zu-fan-zhuan-lian-biao-by-user7208t/
// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  const dummy = new ListNode(0, head);

  let pre = dummy;
  let end = dummy;

  while (end.next !== null) {
    for (let i = 0; i < k && end !== null; i++) {
      end = end.next;
    }
    if (end === null) break;
    const start = pre.next;
    const next = end.next;
    end.next = null;
    pre.next = reverseList(start);
    start.next = next;
    pre = start;
    end = start;
  }
  return dummy.next;
};

function reverseList(head) {
  let prev = null;
  let curr = head;
  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}
// @lc code=end

