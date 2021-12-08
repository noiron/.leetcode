/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
var diameterOfBinaryTree = function(root) {
  let maxDepthSum = 0; // 一个节点的左右节点的深度之和的最大值

  const depth = (node) => {
    if (node === null) return 0;

    const leftDepth = depth(node.left);
    const rightDepth = depth(node.right);
    maxDepthSum = Math.max(leftDepth + rightDepth, maxDepthSum);
    return Math.max(leftDepth, rightDepth) + 1;
  }

  depth(root);
  return maxDepthSum;
};
// @lc code=end

