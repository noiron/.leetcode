/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  let result = null;
  for (let i = 0; i < lists.length; i++) {
    result = mergeTwoLists(result, lists[i]);
  }
  return result;
};

function mergeTwoLists(p1, p2) {
  const dummyHead = new ListNode();
  let current = dummyHead;
  while (p1 && p2) {
    if (p1.val <= p2.val) {
      current.next = p1;
      p1 = p1.next;
    } else {
      current.next = p2;
      p2 = p2.next;
    }
    current = current.next;
  }
  current.next = p1 || p2;

  return dummyHead.next;
}

// @lc code=end

