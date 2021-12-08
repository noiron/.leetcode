/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) return 0;
  
  // 下面这一句可以和后面的情况合并
  // if (!root.left && !root.right) return 1;

  const m1 = minDepth(root.left);
  const m2 = minDepth(root.right);

  if (!root.left || !root.right) {
    // 此时 m1 和 m2 中至少有一个为 0
    return m1 + m2 + 1;
  }
  return 1 + Math.min(m1, m2);
};
// @lc code=end
