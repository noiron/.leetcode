/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let head = null;
  let tail = null;
  let carry = 0;

  while (l1 || l2) {
    const num1 = l1 ? l1.val : 0;
    const num2 = l2 ? l2.val : 0;
    const sum = num1 + num2 + carry;
    const node = new ListNode(sum % 10);
    if (!head) {
      head = tail = node;
    } else {
      tail.next = node;
      tail = node;
    }

    carry = sum >= 10 ? 1 : 0;
    if (l1) {
      l1 = l1.next;
    }
    if (l2) {
      l2 = l2.next;
    }
  }

  if (carry) {
    // 新建的节点的 next 默认为 null，不需要手动设置了
    tail.next = new ListNode(1);
  }
  return head;
};
// @lc code=end
