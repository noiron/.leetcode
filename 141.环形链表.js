/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  const seen = new Map();

  while (head !== null) {
    if (seen.get(head)) {
      return true;
    }
    seen.set(head, 1);
    head = head.next;
  }

  return false;
};
// @lc code=end

