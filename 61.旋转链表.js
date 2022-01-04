/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head || k === 0) return head;

  let len = 1;
  let count = k;

  let slow = head;
  let fast = head;
  // 统计链表的长度
  while (count > 0 && fast.next !== null) {
    len++;
    count--;
    fast = fast.next;
  }

  if (k % len === 0) return head;

  if (fast.next === null) {
    k = k % len;
    fast = head;
    slow = head;
    while (k > 0) {
      k--;
      fast = fast.next;
    }
  }

  while (fast.next !== null) {
    fast = fast.next;
    slow = slow.next;
  }
  result = slow.next;
  slow.next = null;
  fast.next = head;
  return result;
};
// @lc code=end
