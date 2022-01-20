/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
var deleteDuplicates = function(head) {
  const dummyNode = new ListNode(0, head);

  let prev = dummyNode;
  let current = head;
  while (current) {
    if (!current.next || current.val !== current.next.val) {
      prev = prev.next;
      current = current.next;
      continue;
    }

    while (current.next && current.val === current.next.val) {
      current = current.next;
    }
    prev.next = current.next;
    current = current.next;
  }

  return dummyNode.next;
};
// @lc code=end

