/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
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
 * 以 root 为路径起点的路径数量
 */
const beginWithThisRoot = (root, targetSum) => {
  if (root === null) {
    return 0;
  }
  let result = 0;
  if (root.val === targetSum) {
    result = 1;
  }
  result += beginWithThisRoot(root.left, targetSum - root.val);
  result += beginWithThisRoot(root.right, targetSum - root.val);
  return result;
};

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  if (root === null) {
    return 0;
  }
  let result = beginWithThisRoot(root, targetSum);
  result += pathSum(root.left, targetSum);
  result += pathSum(root.right, targetSum);
  return result;
};
// @lc code=end
