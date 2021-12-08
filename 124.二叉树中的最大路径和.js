/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
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
var maxPathSum = function (root) {
  // https://leetcode-cn.com/problems/binary-tree-maximum-path-sum/solution/shou-hui-tu-jie-hen-you-ya-de-yi-dao-dfsti-by-hyj8/

  if (!root) return 0;

  let maxSum = -Infinity;

  // 能向父节点提供的最大路径和
  function dfs(root) {
    if (!root) return 0;

    const left = dfs(root.left);
    const right = dfs(root.right);

    const innerMaxSum = left + root.val + right;
    maxSum = Math.max(maxSum, innerMaxSum);

    const outputMaxSum = root.val + Math.max(0, left, right);

    return Math.max(0, outputMaxSum);
  }

  dfs(root);
  return maxSum;
};
// @lc code=end
