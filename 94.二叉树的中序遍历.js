/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
var inorderTraversal = function (root) {
  const ans = [];
  const stack = [];

  while (root || stack.length > 0) {
    // 入栈流程
    while (root) {
      stack.push(root);
      root = root.left;
    }
    // 出栈流程
    root = stack.pop();
    ans.push(root.val);
    root = root.right;
  }

  return ans;
};
// @lc code=end
