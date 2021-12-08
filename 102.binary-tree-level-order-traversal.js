/*
 * @lc app=leetcode id=102 lang=javascript
 *
 * [102] Binary Tree Level Order Traversal
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
var levelOrder = function (root) {
  if (!root) return [];

  root.depth = 0;
  const queue = [root];
  console.log('queue: ', queue);
  const result = [];

  while (queue.length > 0) {
    const node = queue.shift();
    const depth = node.depth;

    if (!result[depth]) {
      result[depth] = [node.val];
    } else {
      result[depth].push(node.val);
    }

    if (node.left) {
      node.left.depth = depth + 1;
      queue.push(node.left);
    }
    if (node.right) {
      node.right.depth = depth + 1;
      queue.push(node.right);
    }
  }

  return result;
};
// @lc code=end
