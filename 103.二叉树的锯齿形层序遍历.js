/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (!root) return [];

  const queue = [root];
  let fromLeft = true;
  const result = [];

  while (queue.length > 0) {
    const n = queue.length;
    const level = [];
    for (let i = 0; i < n; i++) {
      const node = queue.shift();
      if (fromLeft) {
        level.push(node.val);
      } else {
        level.unshift(node.val);
      }
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    fromLeft = !fromLeft;
    result.push(level);
  }

  return result;
};
// @lc code=end
