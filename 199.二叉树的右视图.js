/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
 * @return {number[]}
 */
var rightSideView = function(root) {
  if (!root) return [];

  const result = [];
  const queue = [root];
  while (queue.length > 0) {
    const level = [];
    const levelLength = queue.length;
    for (let i = 0; i < levelLength; i++) {
      const node = queue.shift();
      level.push(node);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(level[level.length - 1].val);
  }

  return result;
};
// @lc code=end

