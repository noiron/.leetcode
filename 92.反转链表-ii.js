/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
  const dummyNode = new ListNode(0, head);

  // 找到 left 节点的前一个节点
  let pre = dummyNode;
  for (let i = 0; i < left - 1; i++) {
    pre = pre.next;
  }
  const leftNode = pre.next;

  // 找到 right 节点
  let rightNode = pre;
  for (let i = left; i <= right; i++) {
    rightNode = rightNode.next;
  }

  // 保留右节点的下一个节点
  const curr = rightNode.next;
  // 切断要 reverse 的部分
  rightNode.next = null;
  pre.next = null;

  reverseList(leftNode);
  pre.next = rightNode;
  leftNode.next = curr;
  return dummyNode.next;
};

var reverseList = function(head) {
  if (head === null || head.next === null) return head;

  const newHead = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return newHead;
};
// @lc code=end

