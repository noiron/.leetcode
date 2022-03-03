/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
  // 从根节点到叶子节点

  const result = [];
  /**
   * path 中不包括 root 的值
   */
  const find = (root, path, sum) => {
    if (!root) return;

    if (!root.left && !root.right) {
      if (root.val === sum) {
        result.push([...path, root.val]);
      }
      return;
    }

    find(root.left, [...path, root.val], sum - root.val);
    find(root.right, [...path, root.val], sum - root.val);
  }

  find(root, [], targetSum);
  return result;
};
// @lc code=end

