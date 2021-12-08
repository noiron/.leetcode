/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// 按序合并两个链表
const merge = (head1, head2) => {
  const dummyHead = new ListNode(0);
  let temp = dummyHead;
  while (head1 !== null && head2 !== null) {
    if (head1.val <= head2.val) {
      temp.next = head1;
      head1 = head1.next;
    } else {
      temp.next = head2;
      head2 = head2.next;
    }
    temp = temp.next;
  }
  if (head1 !== null) {
    temp.next = head1;
  } else {
    temp.next = head2;
  }
  return dummyHead.next;
};

const toSortList = (head, tail) => {
  if (head === null) {
    return null;
  }

  if (head.next === tail) {
    head.next = null;
    return head;
  }

  let slow = head;
  let fast = head;
  while (fast !== tail) {
    slow = slow.next;
    fast = fast.next;
    if (fast !== tail) {
      fast = fast.next;
    }
  }
  const mid = slow;
  return merge(toSortList(head, mid), toSortList(mid, tail));
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  return toSortList(head, null);
};
// @lc code=end
