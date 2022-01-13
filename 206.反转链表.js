/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (!head || !head.next) return head;

  const newHead = reverseList(head.next);
  // 原先由 head 指向 head.next，现在由 head.next 指向 head
  head.next.next = head;
  head.next = null;
  return newHead;
};
// @lc code=end

