/*
 * @lc app=leetcode.cn id=337 lang=javascript
 *
 * [337] 打家劫舍 III
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
var rob = function (root) {
  // 返回一个数组，其中的两个元素分别是选中和不选中该节点的最大值
  const dfs = node => {
    if (node === null) {
      return [0, 0];
    }

    const l = dfs(node.left);
    const r = dfs(node.right);
    const selected = node.val + l[1] + r[1];
    const nonSelected = Math.max(...l) + Math.max(...r);
    return [selected, nonSelected];
  }

  const rootStatus = dfs(root);
  return Math.max(...rootStatus);
};
// @lc code=end
