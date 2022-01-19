/*
 * @lc app=leetcode.cn id=117 lang=javascript
 *
 * [117] 填充每个节点的下一个右侧节点指针 II
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  if (!root) return null;

  const queue = [root];
  while (queue.length > 0) {
    const n = queue.length;
    const level = [];
    for (let i = 0; i < n; i++) {
      const node = queue.shift();
      level.push(node);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    for (let i = 0; i < level.length - 1; i++) {
      level[i].next = level[i+1];
    }
    level[level.length-1].next = null;
  }

  return root;
};
// @lc code=end

