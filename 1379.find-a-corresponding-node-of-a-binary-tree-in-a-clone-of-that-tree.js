/*
 * @lc app=leetcode id=1379 lang=javascript
 *
 * [1379] Find a Corresponding Node of a Binary Tree in a Clone of That Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function (original, cloned, target) {
  const queue = [cloned];

  while (queue.length > 0) {
    const node = queue.shift();
    if (node === null) continue;
    if (node.val === target.val) {
      return node;
    }
    queue.push(node.left, node.right);
  }

  return null;
};
// @lc code=end
