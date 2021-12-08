/*
 * @lc app=leetcode id=1302 lang=javascript
 *
 * [1302] Deepest Leaves Sum
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
var deepestLeavesSum = function (root) {
  if (!root) return 0;

  let maxLevel = 0;
  // 使用一个全局变量
  let sum = 0;

  calculateSumAtLevel(root, 0);
  return sum;

  function calculateSumAtLevel(root, level) {
    if (!root) return 0;

    if (level > maxLevel) {
      sum = 0;
      maxLevel = level;
    }
    if (level === maxLevel) {
      sum += root.val;
    }
    calculateSumAtLevel(root.left, level + 1);
    calculateSumAtLevel(root.right, level + 1);
  }
};

// @lc code=end
